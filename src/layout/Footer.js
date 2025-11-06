import React from "react";

// Định nghĩa styles cho component Footer
const styles = {
  footer: {
    backgroundColor: "#1a172c", // Màu nền xanh/tím đậm
    color: "white",
    textAlign: "center", // Không cần ép kiểu 'as "center"' trong JS
    padding: "20px 10px",
    marginTop: "40px",
  },
  // Style cho nội dung trong Footer (nếu cần)
  text: {
    fontSize: "0.9rem",
    margin: 0,
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 SHOP HSR 💫</p>
    </footer>
  );
}
