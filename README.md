# PremiumShop - E-Commerce Landing Page

🛒 Website bán slot premium các dịch vụ như ChatGPT Business, Netflix, YouTube Premium, Spotify, Midjourney với giá rẻ nhất thị trường.

## 🚀 Tính Năng

- ✅ **Modern Design**: Giao diện hiện đại, techy với màu sắc bắt mắt
- ✅ **Responsive**: Tối ưu cho mọi thiết bị (mobile, tablet, desktop)
- ✅ **Animations**: Hiệu ứng mượt mà với Framer Motion
- ✅ **SEO Ready**: Meta tags đầy đủ cho SEO
- ✅ **Zalo Integration**: Nút chat Zalo ở mọi nơi
- ✅ **Form Validation**: React Hook Form với validation
- ✅ **Easy to Expand**: Thêm sản phẩm mới chỉ cần edit 1 file

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: React Icons
- **Language**: TypeScript

## 🛠️ Cài Đặt

### 1. Clone repository

```bash
git clone https://github.com/your-username/premium-shop.git
cd premium-shop
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Cấu Hình

### Thay đổi thông tin Zalo

Mở file `src/data/products.ts` và cập nhật:

```typescript
export const ZALO_CONFIG = {
  id: "0123456789", // Thay bằng số Zalo của bạn
  oaLink: "https://zalo.me/0123456789", // Thay bằng link Zalo OA của bạn
  // ...
};
```

### Thêm sản phẩm mới

Mở file `src/data/products.ts` và thêm sản phẩm vào array `products`:

```typescript
{
  id: '7',
  slug: 'ten-san-pham',
  name: 'Tên Sản Phẩm',
  // ... các thông tin khác
}
```

## 📁 Cấu Trúc Thư Mục

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Trang chủ
│   ├── layout.tsx         # Root layout
│   ├── san-pham/          # Trang sản phẩm
│   │   ├── page.tsx       # Danh sách sản phẩm
│   │   └── [slug]/        # Chi tiết sản phẩm
│   ├── trial/             # Trang đăng ký trial
│   ├── chinh-sach/        # Trang chính sách
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HomePage.tsx
│   ├── ProductCard.tsx
│   ├── CountdownTimer.tsx
│   ├── Testimonials.tsx
│   └── ZaloFloatingButton.tsx
└── data/
    └── products.ts        # Dữ liệu sản phẩm
```

## 🚀 Deploy lên Vercel

### Cách 1: Deploy từ GitHub

1. Push code lên GitHub repository
2. Truy cập [vercel.com](https://vercel.com)
3. Đăng nhập với GitHub
4. Click "New Project"
5. Import repository của bạn
6. Click "Deploy"

### Cách 2: Deploy bằng Vercel CLI

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📱 Các Trang Chính

### Trang Chủ (/)

- Hero section với gradient bắt mắt
- Featured products grid
- Social proof với testimonials
- Countdown timer tạo urgency

### Trang Sản Phẩm (/san-pham)

- Filter theo category
- Grid layout responsive
- Product cards với thông tin đầy đủ

### Chi Tiết Sản Phẩm (/san-pham/[slug])

- Hero với thông tin sản phẩm
- Bảng giá các gói
- Hướng dẫn sử dụng
- Chính sách bảo hành

### Trang Trial (/trial)

- Form đăng ký trial miễn phí
- Validation với React Hook Form
- Redirect tới Zalo sau submit

### Trang Chính Sách (/chinh-sach)

- Bảo hành
- Rủi ro & Disclaimer
- Quy trình mua hàng
- Chính sách hoàn tiền

## ⚠️ Lưu Ý

- Đây là template website, cần thay đổi thông tin Zalo và nội dung cho phù hợp
- Các hình ảnh trong `/public/images/` là placeholder, cần thay bằng hình thật
- Testimonials là mẫu, cần cập nhật đánh giá thật từ khách hàng

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🤝 Hỗ Trợ

Nếu bạn có thắc mắc hoặc cần hỗ trợ, vui lòng tạo issue trên GitHub.
