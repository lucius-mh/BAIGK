import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// ⚠️ Đảm bảo đường dẫn này đúng:
import { supabase } from "./SupabaseClient";

// --- STYLES ---
const styles = {
  container: {
    padding: "30px 20px",
    backgroundColor: "#1a172c",
  },
  title: {
    fontSize: "2em",
    color: "#F8F8FF",
    marginBottom: "30px",
    textAlign: "center",
    fontWeight: "300",
  },
  listGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "100px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "25px 20px",
    textAlign: "center",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    color: "#333",
    position: "relative",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)",
  },
  badge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#ff3d00",
    color: "white",
    padding: "4px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "0.8em",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    margin: "15px auto 10px",
  },
  productName: {
    fontSize: "1.2em",
    fontWeight: "600",
    margin: "5px 0",
    color: "#1a172c",
  },
  subText: {
    fontSize: "1em",
    color: "#666",
    margin: "2px 0",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#aaa",
    fontSize: "0.9em",
    margin: "0",
  },
  currentPrice: {
    fontSize: "1.4em",
    fontWeight: "bold",
    color: "#007bff",
    margin: "5px 0 15px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "12px 0",
    width: "100%",
    borderRadius: "8px",
    fontSize: "1em",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none",
    display: "block",
  },
};

// --- COMPONENT PRODUCT CARD ---
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // 🚀 BỌC TOÀN BỘ NỘI DUNG TRONG 1 THẺ DIV
    <div
      style={isHovered ? { ...styles.card, ...styles.cardHover } : styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tag/Badge: ID 1-4 là First Recharge */}
      {product.id <= 4 && <div style={styles.badge}>First recharge</div>}
      {product.tag && product.id > 4 && (
        <div style={styles.badge}>{product.tag}</div>
      )}

      {/* ⚠️ CHÚ Ý: DÙNG product.image_url */}
      <img src={product.image_url} alt={product.name} style={styles.image} />

      <p style={styles.productName}>
        {product.shards ? `Oneiric Shard ×${product.shards}` : product.name}
      </p>

      {product.bonus && <p style={styles.subText}>Bonus ×{product.bonus}</p>}

      <div style={{ marginTop: "auto" }}>
        {product.old_price && (
          <p style={styles.oldPrice}>{product.old_price}</p>
        )}

        <p style={styles.currentPrice}>{product.price}</p>

        {/* Nút Purchase - Link đến trang chi tiết */}
        <Link
          // Link đến /detail/<id>
          to={`/detail/${product.id}`}
          style={styles.button}
        >
          Purchase
        </Link>
      </div>
    </div>
  );
};

// --- COMPONENT LIST HSR ---
export default function ListHSR() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      } else {
        // Sắp xếp theo ID để đảm bảo thứ tự 1-8
        setProducts(data.sort((a, b) => a.id - b.id));
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
        Đang tải sản phẩm...
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>CỬA HÀNG SẢN PHẨM</h2>
      <div style={styles.listGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
