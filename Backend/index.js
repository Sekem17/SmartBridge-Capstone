import 'dotenv/config.js'; // Harus berada di baris paling atas agar variabel lingkungan langsung terbaca
import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// Impor konfigurasi koneksi database
import './db/config.js';

// Impor rute
import userRoutes from './routes/user.js';
import mainRoutes from './routes/index.js';

// Inisialisasi aplikasi express
const app = express();

// Konfigurasi Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true
}));

// Konfigurasi Rute Middleware
app.use('/user', userRoutes); // Semua rute terkait pengguna (user)
app.use('/', mainRoutes);     // Rute utama lainnya

// Menjalankan Server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});