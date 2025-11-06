// File: ChiTietSanPham.js (Đã đổi tên và sửa logic)

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./SupabaseClient"; // 👈 SỬ DỤNG CLIENT KẾT NỐI

const detailStyles = {
  container: {
    padding: "50px",
    backgroundColor: "#1a172c",
    maxWidth: "800px",
    margin: "50px auto",
    borderRadius: "10px",
    color: "white",
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    backgroundColor: "#2e2a4a",
    borderRadius: "8px",
    padding: "10px",
  },
  info: {
    flexGrow: 1,
  },
  inputGroup: {
    marginTop: "20px",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #38bdf8",
    backgroundColor: "#12101F",
    color: "white",
    width: "80px",
    textAlign: "center",
    fontSize: "1em",
    marginLeft: "10px",
  },
  priceTag: {
    color: "#ff9900",
    fontSize: "1.2em",
    margin: "15px 0",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: "0.9em",
    marginBottom: "5px",
  },
  total: {
    fontSize: "1.5em",
    marginBottom: "20px",
    color: "#e879f9",
    borderTop: "1px solid #2e2a4a",
    paddingTop: "20px",
    marginTop: "20px",
  },
  payButton: {
    backgroundColor: "#059669",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: "5px",
    fontSize: "1.1em",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default function ChiTietSanPham() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetail() {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        console.error("Lỗi khi tải chi tiết sản phẩm:", error);
        navigate("/");
      } else {
        setProduct(data);
      }
      setLoading(false);
    }
    fetchProductDetail();
  }, [id, navigate]);

  if (loading || !product) {
    return (
      <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
        Đang tải chi tiết sản phẩm...
      </div>
    );
  }

  const currentQuantity = product.shards ? quantity : 1;
  // ⚠️ DÙNG product.price_value
  const totalPrice = product.price_value * currentQuantity;

  const handlePayment = () => {
    alert(
      `Thanh toán ${totalPrice.toLocaleString(
        "vi-VN"
      )} đ cho ${currentQuantity} gói ${product.name}.`
    );
  };

  return (
    <div style={detailStyles.container}>
      <img
        src={product.image_url}
        alt={product.name}
        style={detailStyles.image}
      />

      <div style={detailStyles.info}>
        <h1>
          {product.name} {product.shards && ` ×${product.shards}`}{" "}
        </h1>

        {product.bonus && <p>Bonus ×{product.bonus}</p>}
        {product.tag && <p style={{ color: "#ff9900" }}>{product.tag}</p>}

        {/* CHỌN SỐ LƯỢNG */}
        {product.shards && (
          <div style={detailStyles.inputGroup}>
            <label htmlFor="quantity">Chọn số lượng: </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              style={detailStyles.input}
            />
          </div>
        )}

        {/* Số lượng cố định */}
        {!product.shards && (
          <div style={detailStyles.inputGroup}>
            <p style={{ color: "#ccc" }}>Số lượng: 1</p>
          </div>
        )}

        {/* GIÁ */}
        {product.old_price && (
          <p style={detailStyles.oldPrice}>Giá cũ: {product.old_price}</p>
        )}
        <p style={detailStyles.priceTag}>Giá gói: {product.price}</p>

        {/* Tổng tiền và nút Thanh toán */}
        <div style={detailStyles.total}>
          Tổng tiền: {totalPrice.toLocaleString("vi-VN")} đ
        </div>

        <button onClick={handlePayment} style={detailStyles.payButton}>
          TIẾN HÀNH THANH TOÁN
        </button>
      </div>
    </div>
  );
}
