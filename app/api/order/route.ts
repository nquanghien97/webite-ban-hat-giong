import { NextRequest, NextResponse } from 'next/server'

interface OrderData {
  fullName: string
  phone: string
  address: string
  quantity: string
  combos: string
  totalPrice: number
  timestamp: string
}

/**
 * POST /api/order
 * Submits order form data to Google Sheets via Google Apps Script Web App
 *
 * To set up Google Sheets integration:
 * 1. Create a Google Sheet with columns: Timestamp, Full Name, Phone, Address, Quantity, Combos, Total Price
 * 2. Create a Google Apps Script (see example below)
 * 3. Deploy as Web App and set GOOGLE_APPS_SCRIPT_URL environment variable
 *
 * Example Google Apps Script:
 * ```
 * function doPost(e) {
 *   try {
 *     const sheet = SpreadsheetApp.getActiveSheet();
 *     const data = JSON.parse(e.postData.contents);
 *
 *     sheet.appendRow([
 *       data.timestamp,
 *       data.fullName,
 *       data.phone,
 *       data.address,
 *       data.quantity,
 *       data.combos,
 *       data.totalPrice
 *     ]);
 *
 *     return ContentService.createTextOutput(
 *       JSON.stringify({ success: true })
 *     ).setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService.createTextOutput(
 *       JSON.stringify({ success: false, error: error.toString() })
 *     ).setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * ```
 */
export async function POST(request: NextRequest) {
  try {
    const body: OrderData = await request.json()

    // Validate required fields
    if (!body.fullName || !body.phone || !body.address || !body.combos) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get Google Apps Script URL from environment variables
    const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL

    if (!googleAppsScriptUrl) {
      console.error('[v0] GOOGLE_APPS_SCRIPT_URL environment variable is not set')
      // For development/demo, return success even without Google Sheets
      // Remove this in production
      if (process.env.NODE_ENV === 'development') {
        console.log('[v0] Demo mode: Order received (not sent to Google Sheets)', body)
        return NextResponse.json({ success: true, message: 'Order received in demo mode' })
      }

      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    // Send data to Google Apps Script
    const response = await fetch(googleAppsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      console.error('[v0] Google Apps Script error:', response.statusText)
      throw new Error('Failed to submit order to Google Sheets')
    }

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.error || 'Unknown error from Google Sheets')
    }

    return NextResponse.json({
      success: true,
      message: 'Order submitted successfully',
    })
  } catch (error) {
    console.error('[v0] Order submission error:', error)

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An error occurred while processing your order',
      },
      { status: 500 }
    )
  }
}
