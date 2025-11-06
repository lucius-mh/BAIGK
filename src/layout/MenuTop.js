import React from "react";
import { Link } from "react-router-dom";

// Định nghĩa các liên kết điều hướng
const navItems = [
  { text: "Trang chủ", path: "/", active: true },
  {
    text: "Trò chơi",
    path: "/games",
    iconClass: "fas fa-caret-down",
    active: false,
  },
  { text: "Blog", path: "/blog", active: false },
];

// Định nghĩa styles cho component
const styles = {
  header: {
    backgroundColor: "#1a172c",
    padding: "10px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ff9900",
  },
  logoText: {
    marginLeft: "5px",
    fontSize: "24px",
    color: "#F8F8FF",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    color: "#c9c5d8",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    padding: "10px 5px",
    transition: "color 0.3s",
  },
  navTools: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1E1A33",
    borderRadius: "5px",
    padding: "8px 15px",
    color: "#c9c5d8",
    width: "300px",
  },
  searchInput: {
    background: "none",
    border: "none",
    color: "#c9c5d8",
    width: "100%",
    outline: "none",
    fontSize: "14px",
    marginLeft: "10px",
  },
  langCurrency: {
    color: "#c9c5d8",
    fontSize: "14px",
    padding: "8px 15px",
    backgroundColor: "#1E1A33",
    borderRadius: "5px",
  },
  emailIcon: {
    fontSize: "20px",
    color: "#c9c5d8",
    cursor: "pointer",
  },
  loginBtn: {
    background: "linear-gradient(90deg, #a855f7, #e879f9)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default function MenuTop() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* 1. Logo: SHOP HSR */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={styles.logo}>
            <span
              style={{
                color: "#ff9900",
              }}
            >
              HSR
            </span>
            <span style={styles.logoText}>SHOP</span>
          </div>
        </Link>

        {/* 2. Menu Điều Hướng */}
        <nav style={styles.navLinks}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                ...styles.navLink,
                color: item.active ? "#fff" : styles.navLink.color,
              }}
            >
              {item.text}
              {item.iconClass && <i className={item.iconClass}></i>}
            </Link>
          ))}
        </nav>

        {/* 3. Công cụ và Tài khoản */}
        <div style={styles.navTools}>
          {/* Thanh tìm kiếm */}
          <div style={styles.searchBox}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Vui lòng nhập từ khóa tìm kiếm"
              style={styles.searchInput}
            />
          </div>

          {/* Ngôn ngữ/Tiền tệ */}
          <div style={styles.langCurrency}>
            <span>VND | Tiếng Việt</span>
          </div>

          {/* Icon Email/Thư */}
          <div style={styles.emailIcon}>
            <i className="fas fa-envelope"></i>
          </div>

          {/* Nút Đăng nhập */}
          <button style={styles.loginBtn}>Đăng nhập</button>
        </div>
      </div>
    </header>
  );
}
