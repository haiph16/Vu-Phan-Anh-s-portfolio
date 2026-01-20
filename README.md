# Portfolio Project

Một dự án portfolio được xây dựng với **React**, **Tailwind CSS**, và **Vite**.

## Tính năng

- ✨ Responsive Design - Thích ứng với mọi kích thước màn hình
- 🎨 Tailwind CSS - Styling hiện đại và linh hoạt
- ⚡ Vite - Build tool nhanh chóng
- 🚀 Lucide Icons - Bộ icon đẹp và nhẹ
- 📱 Mobile-First - Thiết kế theo kiểu mobile-first

## Các Section

1. **Navigation** - Menu navigation fixed với mobile menu
2. **Hero Section** - Giới thiệu chính với CTA button
3. **About Section** - Giới thiệu về bản thân
4. **Projects Section** - Hiển thị các project nổi bật
5. **Skills Section** - Danh sách các kỹ năng
6. **Contact Section** - Thông tin liên hệ với social links
7. **Footer** - Footer với copyright

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Cấu trúc Project

```
portfolio/
├── src/
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind CSS imports
├── public/               # Static files
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## Sử dụng

1. Mở [http://localhost:5173](http://localhost:5173) để xem dự án
2. Chỉnh sửa các nội dung trong `src/App.jsx`
3. Thay đổi màu sắc và styling trong `tailwind.config.js`
4. Thêm các project thật vào mảng `projects`
5. Cập nhật thông tin liên hệ trong section Contact

## Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa `tailwind.config.js` để thêm custom colors

### Thêm Project
Chỉnh sửa mảng `projects` trong `src/App.jsx`

### Thêm Skills
Chỉnh sửa mảng `skills` trong `src/App.jsx`

## Quản lý hosting
Truy cập: https://trenton.maychu.cloud:2222
ID : vuphanan695c
Password : Admin@123

## Technologies

- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Vite](https://vitejs.dev) - Build tool
- [Lucide React](https://lucide.dev) - Icon library

## License

MIT

## Support

Nếu bạn có bất kỳ câu hỏi nào, vui lòng mở issue hoặc liên hệ.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
