# 🖼️ Galeri Pribadi - Website Galeri Foto dengan Database

Selamat datang di Galeri Pribadi! Ini adalah website galeri foto pribadi yang modern, responsif, dan terintegrasi dengan database online menggunakan Firebase.

## ✨ Fitur Utama

### 1. **Galeri Respons​if**
   - Tata letak grid yang menyesuaikan dengan ukuran layar
   - Bekerja sempurna di desktop, tablet, dan mobile
   - Desain yang elegan dan profesional

### 2. **Admin Panel**
   - Upload foto baru dengan judul dan deskripsi
   - Kelola dan hapus foto
   - Lihat statistik galeri
   - Kredensial login yang aman

### 3. **Database Online (Firebase)**
   - Menyimpan data foto di cloud
   - Realtime updates
   - Cloud storage untuk gambar
   - Gratis untuk pemula

### 4. **Modal Viewer**
   - Lihat gambar dalam ukuran besar
   - Navigasi antar gambar dengan tombol atau keyboard
   - Tutup dengan tombol X atau tekan ESC

### 5. **Interaktivitas**
   - Hover effects pada gambar
   - Smooth scroll navigation
   - Keyboard shortcuts (← →, ESC)
   - Form handling

## 🚀 Cara Menggunakan

### Local (Tanpa Database)

1. **Buka File Galeri**
   - Buka `index.html` di browser web Anda

2. **Akses Admin Panel**
   - Buka `admin.html`
   - Login dengan: Username: `admin`, Password: `admin123`
   - Upload foto baru

3. **Navigasi**
   - Gunakan menu navigasi di atas untuk berpindah antar sektion
   - Klik tombol "Lihat Besar" untuk membuka modal

### Online (Dengan Database)

1. **Setup Firebase** (lihat [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md))
2. **Deploy ke GitHub Pages atau Firebase Hosting**
3. **Akses dari browser** di URL publik

## 📁 Struktur File

```
galeri-pribadi/
├── index.html                    # Website galeri utama
├── admin.html                    # Admin panel untuk upload
├── styles.css                    # CSS styling
├── script.js                     # JavaScript untuk galeri
├── README.md                     # Dokumentasi ini
├── DEPLOYMENT_GUIDE.md           # Panduan publikasi & database
├── firebase-config-template.json # Template Firebase config
└── .gitignore                    # Git ignore file
```

## 🔧 Konfigurasi

### Step 1: Setup Firebase (PENTING)

1. Buat akun di [Firebase Console](https://console.firebase.google.com/)
2. Buat project baru
3. Setup Realtime Database
4. Setup Cloud Storage
5. Copy konfigurasi Firebase

### Step 2: Update admin.html

Buka `admin.html` dan ubah:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Step 3: Update Kredensial Admin

Cari di `admin.html`:

```javascript
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
```

**Ganti dengan password yang kuat!**

## 📱 Fitur Admin Panel

### Login
- Username & password
- Session management

### Upload Foto
- Judul wajib
- Deskripsi opsional
- Preview gambar
- Upload ke cloud storage

### Manage Foto
- Lihat semua foto
- Hapus foto yang tidak diinginkan
- Statistik total foto
- Tanggal upload

## 🌐 Deployment

### GitHub Pages (Gratis)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/galeri-pribadi.git
git push -u origin main
```

Aktifkan GitHub Pages di Settings → Pages

URL: `https://username.github.io/galeri-pribadi`

### Firebase Hosting (Gratis)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

URL: `https://your-project.web.app`

**Lihat [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) untuk panduan lengkap**

## 📊 Fitur Database

### Realtime Database
- Simpan metadata foto
- Comments & likes
- Contact form submissions
- User activity

### Cloud Storage
- Simpan file gambar asli
- Backup automatic
- Scalable untuk pertumbuhan

### Authentication
- Admin login
- Password protection
- Session management

## 🎨 Kustomisasi

### Mengganti Nama Website

Ubah di `index.html`:

```html
<title>Nama Galeri Saya</title>
<h1>Nama Galeri Saya</h1>
```

### Mengganti Warna

Ubah di `styles.css`:

```css
:root {
    --primary-color: #667eea;        /* Ubah warna utama */
    --secondary-color: #764ba2;      /* Ubah warna sekunder */
}
```

### Mengganti Teks

Edit langsung di file HTML sesuai keinginan.

## 🌐 Kompatibilitas Browser

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📱 Responsiveness

Website ini fully responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (<480px)

## 🔒 Keamanan

### Rekomendasi:

1. **Ganti kredensial admin** dengan password yang kuat
2. **Setup Firebase Rules** untuk kontrol akses
3. **Update password secara berkala**
4. **Backup data** dari Firebase Console
5. **Monitor activity** di Firebase Console

## 📧 Data Storage

### Apa yang Disimpan?

- Metadata foto (judul, deskripsi, tanggal)
- File gambar (di Cloud Storage)
- Form kontak submissions
- Comments & likes (jika diaktifkan)

### Privasi

- Data hanya diakses dengan login admin
- HTTPS encryption otomatis
- Google Cloud security

## 🐛 Troubleshooting

### Local Testing

```bash
# Jika ingin test dengan local server:
python -m http.server 8000
# atau
npx http-server
```

Buka: `http://localhost:8000`

### Admin Login Tidak Berfungsi

1. Buka DevTools (F12)
2. Check console untuk error messages
3. Periksa username & password
4. Clear browser cache

### Firebase Connection Error

1. Periksa Firebase config
2. Periksa internet connection
3. Lihat Firebase Console untuk status
4. Check browser console (F12)

## 📚 Dokumentasi Lengkap

- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Panduan publikasi & setup database
- [Firebase Docs](https://firebase.google.com/docs) - Dokumentasi Firebase
- [GitHub Pages Docs](https://docs.github.com/en/pages) - Dokumentasi GitHub Pages

## ✅ Quick Start Checklist

- [ ] Buka `index.html` di browser
- [ ] Test klik "Admin" link
- [ ] Login dengan kredensial default
- [ ] (Opsional) Setup Firebase & deploy

## 🎉 Ready to Go!

Website galeri pribadi Anda sudah siap digunakan!

Untuk publikasi online dengan database, ikuti [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

**Dibuat dengan ❤️ untuk galeri pribadi Anda**
