// File: models/product.ts

export interface Product {
  id: number;
  name: string;
  shards: number | null;
  bonus: number | null;
  price: string;
  priceValue: number;
  oldPrice?: string;
  tag?: string;
  imageURL: string;
}

// Đường link ảnh Shard (đã xác nhận hoạt động)
const SHARD_IMAGE_URL =
  "https://sdk.hoyoverse.com/upload/payment-center/2023/04/01/166386bd6061f28b5feb70313227f7ac_3722135411357150308.png";
// Placeholder URLs cho 4 sản phẩm mới (dùng các placeholder ổn định hơn)
const EXPRESS_PASS_URL =
  "https://sdk.hoyoverse.com/upload/payment-center/2023/04/01/8c7da28aa8ee6a6866dd910b51b72a55_231965598331145514.png";
const GLORY_URL =
  "https://sdk.hoyoverse.com/upload/payment-center/2023/04/01/8c05e1e0ac1ebd671f665d81fe57e095_5394795815123989271.png";
const MEDAL_URL =
  "https://sdk.hoyoverse.com/upload/payment-center/2023/04/01/a843582686644e1208bcd3d52a69cde5_545452469685667472.png";
const TICKET_PACK_URL =
  "https://sdk.hoyoverse.com/sdk-payment-upload/2025/10/27/ac95f20e9fd710eba82257bfa6bdb722_8771835915656243402.png";

export const productData: Product[] = [
  // --- 4 SẢN PHẨM ONEIRIC SHARD (ĐÃ GIỮ LẠI) ---
  {
    id: 1,
    name: "Oneiric Shard",
    shards: 60,
    bonus: 60,
    price: "22,000 đ",
    priceValue: 22000,
    imageURL: SHARD_IMAGE_URL,
  },
  {
    id: 2,
    name: "Oneiric Shard",
    shards: 300,
    bonus: 300,
    price: "109,000 đ",
    priceValue: 109000,
    imageURL: SHARD_IMAGE_URL,
  },
  {
    id: 3,
    name: "Oneiric Shard",
    shards: 980,
    bonus: 980,
    price: "329,000 đ",
    priceValue: 329000,
    imageURL: SHARD_IMAGE_URL,
  },
  {
    id: 4,
    name: "Oneiric Shard",
    shards: 1980,
    bonus: 1980,
    price: "699,000 đ",
    priceValue: 699000,
    imageURL: SHARD_IMAGE_URL,
  },

  // --- 4 SẢN PHẨM BỔ SUNG (ĐÃ THÊM) ---
  {
    id: 5,
    name: "Express Supply Pass",
    shards: null,
    bonus: null,
    price: "109,000 đ",
    priceValue: 109000,
    imageURL: EXPRESS_PASS_URL,
  },
  {
    id: 6,
    name: "Nameless Glory",
    shards: null,
    bonus: null,
    price: "219,000 đ",
    priceValue: 219000,
    imageURL: GLORY_URL,
  },
  {
    id: 7,
    name: "Nameless Medal",
    shards: null,
    bonus: null,
    price: "449,000 đ",
    priceValue: 449000,
    oldPrice: "468,000 đ",
    imageURL: MEDAL_URL,
  },
  {
    id: 8,
    name: "Special Ticket Pack",
    shards: null,
    bonus: null,
    price: "22,000 đ",
    priceValue: 22000,
    tag: "Remaining ×1",
    imageURL: TICKET_PACK_URL,
  },
];
