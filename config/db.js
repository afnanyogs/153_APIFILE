// config/db.js (Solusi)

const connectDB = async () => {
    try {
        // ... kode koneksi database ...
        console.log('Database connected successfully');
    } catch (err) { // <--- TAMBAHKAN PARAMETER ERROR DI SINI (misalnya 'err' atau 'error')
        // Sekarang variabel 'err' sudah terdefinisi dan bisa digunakan
        console.error('Database connection failed:', err); 
        process.exit(1);
    }
}

module.exports = connectDB;