// File: Layout.js

import React from "react";
import { Outlet } from "react-router-dom";
// ⚠️ Đã sửa đường dẫn import đúng theo cấu trúc file của bạn
import MenuTop from "./layout/MenuTop";
import Footer from "./layout/Footer";

export default function Layout() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a172c",
        minHeight: "100vh",
      }}
    >
      {/* 🧭 RENDER COMPONENT MENU TOP */}
      <MenuTop />

      {/* 📦 NỘI DUNG CHÍNH */}
      <main
        style={{
          padding: "10px 40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Outlet />
      </main>

      {/* 🦾 RENDER COMPONENT FOOTER */}
      <Footer />
    </div>
  );
}
