'use client'

import { Checkbox } from "@/components/ui/checkbox"
import React from "react"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { FlashOffer } from "./flash-offer"

interface ComboOption {
  id: string
  name: React.ReactNode
  label: string
  packages: number
  price: number
  shipping: string
}

const comboOptions: ComboOption[] = [
  {
    id: 'combo1',
    name: <p><span className="text-xl">5</span> Gói Hạt Giống Xà Lách</p>,
    label: '5 Gói Hạt Giống Xà Lách',
    packages: 5,
    price: 100000,
    shipping: 'Miễn Phí Ship',
  },
  {
    id: 'combo2',
    name: <p><span className="text-xl">10</span> Gói Hạt Giống Xà Lách</p>,
    label: '10 Gói Hạt Giống Xà Lách',
    packages: 10,
    price: 150000,
    shipping: 'Miễn Phí Ship',
  },
  {
    id: 'combo3',
    name: <p><span className="text-xl">20</span> Gói Hạt Giống Xà Lách</p>,
    label: '20 Gói Hạt Giống Xà Lách',
    packages: 20,
    price: 250000,
    shipping: 'Miễn Phí Ship',
  },
]

export function OrderForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({})

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    selectedCombo: '',
  })

  const validateVietnamesePhone = (phone: string): boolean => {
    const vietnamesePhoneRegex = /^(?:\+84|0)[0-9]{9,10}$/
    return vietnamesePhoneRegex.test(phone.replace(/\s/g, ''))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setFieldErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleComboChange = (comboId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCombo: comboId,
    }))
    setFieldErrors((prev) => ({ ...prev, selectedCombo: '' }))
  }

  const calculateTotal = (): number => {
    if (!formData.selectedCombo) return 0
    const combo = comboOptions.find((c) => c.id === formData.selectedCombo)
    return combo?.price || 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
    setError(null)
    setSuccess(false)

    const errors: { [key: string]: string } = {}

    if (!formData.fullName.trim()) {
      errors.fullName = 'Vui lòng nhập họ tên'
    }

    if (!validateVietnamesePhone(formData.phone)) {
      errors.phone = 'Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam (0xxx xxx xxxx)'
    }

    if (!formData.address.trim()) {
      errors.address = 'Vui lòng nhập địa chỉ nhận hàng'
    }

    if (!formData.selectedCombo) {
      errors.selectedCombo = 'Vui lòng chọn một combo'
    }

    if (Object.keys(errors).length > 0) {
      console.log('Validation Errors:', errors)
      setFieldErrors(errors)
      return
    }

    // Get combo name
    const combo = comboOptions.find((c) => c.id === formData.selectedCombo)
    const comboName = combo?.label || ''

    setLoading(true)

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          address: formData.address.trim(),
          combo: comboName,
          totalPrice: calculateTotal(),
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Gửi đơn hàng thất bại. Vui lòng thử lại.')
      }

      setSuccess(true)
      setFormData({
        fullName: '',
        phone: '',
        address: '',
        selectedCombo: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  const total = calculateTotal()

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        {/* <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b"> */}
        <FlashOffer options="clock" />
        {/* </CardHeader> */}

        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Tên khách hàng <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Nhập Tên khách hàng"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full"
                />
                {fieldErrors.fullName && (
                  <p className="text-sm text-red-600 mt-1">{fieldErrors.fullName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Số Điện Thoại <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                // required
                />
                {fieldErrors.phone && (
                  <p className="text-sm text-red-600 mt-1">{fieldErrors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="address" className="block text-sm font-medium mb-2">
                  Địa Chỉ Nhận Hàng <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="Nhập địa chỉ nhận hàng chi tiết"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full min-h-24"
                // required
                />
                {fieldErrors.address && (
                  <p className="text-sm text-red-600 mt-1">{fieldErrors.address}</p>
                )}
              </div>
            </div>

            {/* Combo Selection */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900">Chọn số lượng gói sản phẩm</h3>

              <RadioGroup value={formData.selectedCombo} onValueChange={handleComboChange}>
                <div className="space-y-3">
                  {comboOptions.map((combo) => (
                    <div
                      key={combo.id}
                      className="flex items-center space-x-3 px-4 py-2 border rounded-lg hover:bg-green-50 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem
                        value={combo.id}
                        id={combo.id}
                      />
                      <div className="flex-1">
                        <label
                          htmlFor={combo.id}
                          className="text-sm font-medium text-gray-900 cursor-pointer block"
                        >
                          <div className="flex items-center justify-between mt-1">
                            {combo.name}
                            <span className="text-xl font-semibold text-green-600">
                              {combo.price.toLocaleString('vi-VN')}đ
                            </span>
                          </div>
                          <span className="text-xs text-green-600 font-medium">{combo.shipping}</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {fieldErrors.selectedCombo && (
                <p className="text-sm text-red-600 mt-2">{fieldErrors.selectedCombo}</p>
              )}
            </div>
            {/* Submit Button */}
            <div className="border-t pt-6">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg rounded-lg transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  'Đặt Hàng Ngay'
                )}
              </Button>
            </div>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription>
                  Em cảm ơn ạ. Mấy ngày tới sẽ có bên giao hàng gọi cho Anh/Chị. Anh/Chị để ý điện thoại nhận hàng giúp em nhé ạ
                </AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
