// File: App.tsx (Đã sửa lỗi Import)

import { BrowserRouter, Routes, Route } from "react-router-dom";
// SỬA LỖI: Sử dụng Default Import (BỎ DẤU NGOẶC NHỌN {})
import Layout from "./Layout";
import ListHSR from "./ListHSR";
import ChiTietSanPham from "./ChiTietSanPham";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route chính sử dụng Layout */}
        <Route path="/" element={<Layout />}>
          {/* Trang chủ (Index Route) - Hiển thị danh sách sản phẩm */}
          <Route index element={<ListHSR />} />

          {/* Trang chi tiết sản phẩm / Thanh toán */}
          <Route path="detail/:id" element={<ChiTietSanPham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
