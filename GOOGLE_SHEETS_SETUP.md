# Hướng Dẫn Kết Nối Form Đặt Hàng với Google Sheets

## Tổng Quan
Form đặt hàng của bạn đã được xây dựng sẵn để gửi dữ liệu đến Google Sheets qua Google Apps Script. Hãy làm theo các bước dưới đây để thiết lập hoàn chỉnh.

## Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo một Sheet mới
3. Đặt tên cho Sheet (ví dụ: "Đơn Hàng Xà Lách")
4. Tạo các cột sau với tiêu đề:
   - A: `Timestamp` (Thời gian)
   - B: `Full Name` (Họ tên)
   - C: `Phone` (Số điện thoại)
   - D: `Address` (Địa chỉ)
   - E: `Quantity` (Số lượng)
   - F: `Combos` (Sản phẩm chọn)
   - G: `Total Price` (Tổng giá)

Ví dụ:
```
| Timestamp | Full Name | Phone | Address | Quantity | Combos | Total Price |
|-----------|-----------|-------|---------|----------|--------|-------------|
```

## Bước 2: Tạo Google Apps Script

1. Mở Sheet của bạn
2. Nhấp vào **Tools** (Công cụ) → **Script Editor** (Trình chỉnh sửa tập lệnh)
3. Xóa code mặc định và dán code dưới đây:

```javascript
function doPost(e) {
  try {
    // Lấy dữ liệu từ request
    const data = JSON.parse(e.postData.contents);
    
    // Lấy sheet hiện tại
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Thêm hàng dữ liệu mới
    sheet.appendRow([
      data.timestamp,           // Timestamp
      data.fullName,            // Họ tên
      data.phone,               // Số điện thoại
      data.address,             // Địa chỉ
      data.quantity,            // Số lượng
      data.combos,              // Sản phẩm
      data.totalPrice           // Tổng giá
    ]);
    
    // Trả về kết quả thành công
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Trả về lỗi
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: false, 
        error: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Bước 3: Deploy Google Apps Script

1. Nhấp vào **Deploy** (Triển khai) → **New Deployment** (Triển khai mới)
2. Chọn **Type** → **Web app** (Ứng dụng web)
3. Điền các thông tin:
   - **Execute as**: Chọn tài khoản Google của bạn
   - **Who has access**: Chọn **Anyone** (Bất kỳ ai)
4. Nhấp **Deploy** (Triển khai)
5. **Sao chép URL** được cung cấp (trông như thế này):
   ```
   https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/userwithscriptid
   ```

## Bước 4: Cài Đặt Environment Variable

1. Vào trang Vercel project của bạn
2. Vào **Settings** → **Environment Variables**
3. Thêm biến mới:
   - **Name**: `GOOGLE_APPS_SCRIPT_URL`
   - **Value**: Dán URL từ Bước 3
4. Nhấp **Save**

Ví dụ:
```
GOOGLE_APPS_SCRIPT_URL = https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/userwithscriptid
```

## Bước 5: Test Form

1. Trở lại trang web của bạn
2. Cuộn đến section "Đặt Hàng Xà Lách"
3. Điền các thông tin:
   - Họ tên: `Nguyễn Văn A`
   - Số điện thoại: `0901234567`
   - Địa chỉ: `123 Đường ABC, TP. HCM`
   - Chọn một combo sản phẩm
   - Số lượng: `1`
4. Nhấp **Đặt Hàng Ngay**
5. Kiểm tra Google Sheet để xác nhận dữ liệu đã được thêm vào

## Xác Thực Số Điện Thoại Việt Nam

Form được cấu hình để xác thực số điện thoại Việt Nam với các định dạng:
- `0xxx xxx xxxx` (bắt đầu bằng số 0)
- `+84xxx xxx xxxx` (bắt đầu bằng +84)

Ví dụ các số hợp lệ:
- `0901234567`
- `0912345678`
- `+84901234567`

## Khắc Phục Sự Cố

### Lỗi "Server configuration error"
- Kiểm tra xem `GOOGLE_APPS_SCRIPT_URL` đã được đặt trong Environment Variables hay chưa
- Đảm bảo URL được sao chép chính xác từ Google Apps Script

### Form không gửi dữ liệu
- Mở DevTools (F12) → Console để xem thông báo lỗi
- Kiểm tra rằng Google Apps Script được deploy với quyền "Anyone has access"
- Xác nhận URL được deploy là chính xác

### Dữ liệu không xuất hiện trong Google Sheet
- Kiểm tra các cột có tên chính xác hay không
- Đảm bảo Google Apps Script được deploy lại nếu có sửa code

## Thêm Tính Năng Nâng Cao (Optional)

### 1. Tự động định dạng số tiền
Thêm công thức trong cột G (Total Price) để định dạng tiền tệ:
```
=TEXT(G2,"₫#,##0")
```

### 2. Gửi Email xác nhận
Thêm vào Google Apps Script:
```javascript
function doPost(e) {
  // ... code trên ...
  
  // Gửi email xác nhận
  MailApp.sendEmail(
    data.phone + "@gmail.com", // Sử dụng phone làm email demo
    "Xác nhận đơn hàng",
    "Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ bạn sớm."
  );
  
  return ContentService.createTextOutput(...);
}
```

### 3. Thêm Google Form thay vì API
Nếu không muốn dùng Google Apps Script, bạn có thể:
1. Tạo Google Form
2. Lấy Form ID
3. Sửa form để submit trực tiếp đến Google Form
4. Dữ liệu sẽ tự động được thêm vào Google Sheet

## Hỗ Trợ Thêm

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

**Ghi chú**: Form đã được tối ưu hóa cho mobile và desktop. Dữ liệu sẽ được gửi tới Google Sheets an toàn qua HTTPS.
