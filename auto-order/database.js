{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "password": "admin123",
      "email": "admin@example.com",
      "created_at": "2024-01-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "username": "bimxyz",
      "password": "bimxyz123",
      "email": "bimxyz@example.com",
      "created_at": "2024-01-15T10:30:00.000Z"
    },
    {
      "id": 3,
      "username": "johndoe",
      "password": "john123",
      "email": "john@example.com",
      "created_at": "2024-02-01T08:15:00.000Z"
    },
    {
      "id": 4,
      "username": "111",
      "password": "1",
      "email": "bimaputra436123@gmail.com",
      "created_at": "2026-03-22T15:00:09.988Z"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Kaos Polos Premium",
      "price": 85000,
      "description": "Kaos polos berkualitas tinggi, bahan katun combed 30s, nyaman dipakai sehari-hari",
      "stock": 25,
      "category": "Fashion",
      "image": "https://via.placeholder.com/200"
    },
    {
      "id": 2,
      "name": "Jaket Hoodie",
      "price": 175000,
      "description": "Jaket hoodie dengan bahan fleege tebal, cocok untuk cuaca dingin",
      "stock": 15,
      "category": "Fashion",
      "image": "https://via.placeholder.com/200"
    },
    {
      "id": 3,
      "name": "Celana Jeans",
      "price": 150000,
      "description": "Celana jeans stretch, nyaman dan fleksibel untuk berbagai aktivitas",
      "stock": 20,
      "category": "Fashion",
      "image": "https://via.placeholder.com/200"
    },
    {
      "id": 4,
      "name": "Sepatu Sneakers",
      "price": 250000,
      "description": "Sepatu sneakers casual, cocok untuk gaya sehari-hari",
      "stock": 10,
      "category": "Footwear",
      "image": "https://via.placeholder.com/200"
    },
    {
      "id": 5,
      "name": "Topi Baseball",
      "price": 45000,
      "description": "Topi baseball dengan bahan yang nyaman dan adjustable",
      "stock": 30,
      "category": "Aksesoris",
      "image": "https://via.placeholder.com/200"
    },
    {
      "id": 6,
      "name": "Tas Ransel",
      "price": 120000,
      "description": "Tas ransel multifungsi, cocok untuk sekolah atau traveling",
      "stock": 12,
      "category": "Aksesoris",
      "image": "https://via.placeholder.com/200"
    }
  ],
  "orders": [
    {
      "id": 1,
      "productId": 1,
      "productName": "Kaos Polos Premium",
      "username": "bimxyz",
      "price": 85000,
      "quantity": 2,
      "total_price": 170000,
      "order_date": "2024-02-10T09:30:00.000Z",
      "status": "completed",
      "address": "Jl. Contoh No. 123, Jakarta"
    },
    {
      "id": 2,
      "productId": 3,
      "productName": "Celana Jeans",
      "username": "johndoe",
      "price": 150000,
      "quantity": 1,
      "total_price": 150000,
      "order_date": "2024-02-12T14:20:00.000Z",
      "status": "pending",
      "address": "Jl. Test No. 45, Bandung"
    },
    {
      "id": 3,
      "productId": 2,
      "productName": "Jaket Hoodie",
      "username": "bimxyz",
      "price": 175000,
      "quantity": 1,
      "total_price": 175000,
      "order_date": "2024-02-15T11:45:00.000Z",
      "status": "shipped",
      "address": "Jl. Contoh No. 123, Jakarta"
    }
  ],
  "settings": {
    "store_name": "Bimxyz Store",
    "store_email": "store@bimxyz.com",
    "store_phone": "081234567890",
    "store_address": "Jl. Raya No. 123, Jakarta",
    "currency": "IDR",
    "tax_rate": 0.11
  },
  "categories": [
    {
      "id": 1,
      "name": "Fashion",
      "description": "Pakaian dan aksesoris fashion"
    },
    {
      "id": 2,
      "name": "Footwear",
      "description": "Sepatu dan alas kaki"
    },
    {
      "id": 3,
      "name": "Aksesoris",
      "description": "Aksesoris pendukung"
    }
  ]
}