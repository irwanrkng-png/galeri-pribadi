# 🚀 Panduan Publikasi Galeri Online dengan Database

Panduan lengkap untuk mempublikasikan website galeri pribadi Anda dengan database online menggunakan Firebase.

## 📋 Daftar Isi
1. [Setup Awal](#setup-awal)
2. [Konfigurasi Firebase](#konfigurasi-firebase)
3. [Deployment ke GitHub Pages](#deployment-ke-github-pages)
4. [Deployment ke Firebase Hosting](#deployment-ke-firebase-hosting)
5. [Troubleshooting](#troubleshooting)

---

## Setup Awal

Pastikan Anda memiliki:
- Akun GitHub (untuk GitHub Pages)
- Akun Google (untuk Firebase)
- Git terinstall di komputer Anda

### File yang Sudah Ada:
- `index.html` - Website galeri utama
- `styles.css` - Styling
- `script.js` - Interaktivitas
- `admin.html` - Admin panel untuk upload foto

---

## 📦 Konfigurasi Firebase

### Langkah 1: Buat Project Firebase

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik **"Buat Proyek"**
3. Isi nama proyek (contoh: `galeri-pribadi`)
4. Disable Google Analytics (opsional)
5. Klik **"Buat"** dan tunggu selesai

### Langkah 2: Setup Realtime Database

1. Di Firebase Console, pilih proyek Anda
2. Buka **"Realtime Database"** di menu sebelah kiri
3. Klik **"Buat Database"**
4. Pilih lokasi terdekat (contoh: `asia-southeast1` untuk Indonesia)
5. Mulai dalam mode **"Locked Mode"** (keamanan)
6. Klik **"Aktifkan"**

### Langkah 3: Setup Cloud Storage

1. Di Firebase Console, pilih **"Storage"**
2. Klik **"Mulai"**
3. Pilih lokasi terdekat
4. Tinjau aturan keamanan storage:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /gallery-photos/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Langkah 4: Dapatkan Konfigurasi Firebase

1. Buka **Project Settings** (ikon gear di pojok kiri atas)
2. Scroll ke bawah, cari **"SDK setup and configuration"**
3. Pilih **"Web"**
4. Copy konfigurasi Firebase (terlihat seperti ini):

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

### Langkah 5: Update Konfigurasi di admin.html

Buka file `admin.html` dan cari bagian:

```javascript
// ===== KONFIGURASI FIREBASE =====
// TODO: Ganti dengan konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    // ... dst
};
```

Ganti dengan konfigurasi Firebase Anda yang sudah dicopy.

### Langkah 6: Setup Authentication (Opsional)

Untuk keamanan lebih baik, gunakan Firebase Authentication:

1. Di Firebase Console, buka **"Authentication"**
2. Klik tab **"Sign-in method"**
3. Aktifkan **"Email/Password"**
4. Update kode di `admin.html` untuk menggunakan Firebase Auth

---

## 🔐 Update Kredensial Admin

Di file `admin.html`, cari:

```javascript
// ===== ADMIN CREDENTIALS =====
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
```

**GANTI dengan kredensial yang aman!**

---

## 🚀 Deployment ke GitHub Pages

### Langkah 1: Buat Repository GitHub

1. Buka [GitHub](https://github.com/)
2. Klik **"New repository"**
3. Nama: `galeri-pribadi` (atau nama lain)
4. Pilih **"Public"** atau **"Private"**
5. Klik **"Create repository"**

### Langkah 2: Setup Git di Komputer

Buka Command Prompt/Terminal:

```bash
cd c:\coba

git init
git add .
git commit -m "Initial commit - galeri pribadi"
git branch -M main
git remote add origin https://github.com/USERNAME/galeri-pribadi.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda.

### Langkah 3: Enable GitHub Pages

1. Buka repository di GitHub
2. Klik **"Settings"**
3. Di sidebar kiri, klik **"Pages"**
4. Pilih **"Deploy from a branch"**
5. Branch: `main`, Folder: `/ (root)`
6. Klik **"Save"**

Selesai! Website Anda akan tersedia di: `https://username.github.io/galeri-pribadi`

---

## 🔥 Deployment ke Firebase Hosting

### Langkah 1: Install Firebase CLI

Buka Command Prompt/Terminal:

```bash
npm install -g firebase-tools
```

### Langkah 2: Login ke Firebase

```bash
firebase login
```

Browser akan membuka, login dengan akun Google Anda yang punya Firebase.

### Langkah 3: Initialize Firebase Project

```bash
cd c:\coba
firebase init hosting
```

Jawab pertanyaan:
- **Pilih project**: Pilih project Firebase yang sudah dibuat
- **Public directory**: Ketik `.` (current directory) atau `./`
- **Single-page app**: Pilih `No`
- **Overwrite index.html**: Pilih `No`

### Langkah 4: Deploy ke Firebase

```bash
firebase deploy
```

Tunggu proses selesai. URL hosting Anda akan ditampilkan.

---

## 📱 Fitur-Fitur

### Panel Admin

1. **Admin Login**
   - Username: `admin` (sesuai konfigurasi)
   - Password: `admin123` (sesuai konfigurasi)

2. **Upload Foto**
   - Isi judul dan deskripsi
   - Pilih file gambar
   - Klik "Upload Foto"

3. **Manage Foto**
   - Lihat semua foto yang sudah diupload
   - Hapus foto yang tidak diinginkan
   - Lihat statistik total foto

### Gallery

1. **Lihat Galeri**
   - Foto ditampilkan dalam grid responsif
   - Hover untuk melihat judul dan tombol "Lihat Besar"

2. **View Modal**
   - Tekan tombol "Lihat Besar" untuk membuka gambar besar
   - Navigasi dengan tombol "Sebelumnya/Berikutnya"
   - Atau gunakan arrow keys (← →)
   - Tekan ESC atau klik X untuk menutup

3. **Responsif**
   - Desktop, tablet, dan mobile

---

## 🔒 Keamanan

### Langkah Keamanan yang Direkomendasikan:

1. **Ganti Kredensial Admin**
   - Jangan gunakan `admin/admin123`
   - Gunakan password yang kuat

2. **setup Firebase Rules**
   - Untuk Realtime Database:
   ```
   {
     "rules": {
       "photos": {
         ".read": true,
         ".write": "root.child('admin').child(auth.uid).exists()"
       }
     }
   }
   ```

3. **Gunakan HTTPS**
   - GitHub Pages: Otomatis
   - Firebase Hosting: Otomatis

4. **Backup Data**
   - Download backup berkala dari Firebase Console

---

## 🛡️ Contoh Rules Firebase (Rekomendasi & Testing)

Berikut contoh aturan yang bisa Anda pakai. Jangan gunakan aturan `allow read, write: if true;` di production.

- Contoh cepat untuk TESTING (boleh dipakai sementara, TIDAK AMAN untuk production):

Firestore (test):
```
rules_version = '2';
service cloud.firestore {
   match /databases/{database}/documents {
      match /{document=**} {
         allow read, write: if true;
      }
   }
}
```

Storage (test):
```
rules_version = '2';
service firebase.storage {
   match /b/{bucket}/o {
      match /{allPaths=**} {
         allow read, write: if true;
      }
   }
}
```

- Contoh yang lebih aman (baca publik, tulis hanya untuk admin memakai custom claim `admin: true`):

Firestore (production-rekomendasi):
```
rules_version = '2';
service cloud.firestore {
   match /databases/{database}/documents {
      match /photos/{photoId} {
         allow read: if true;
         allow write: if request.auth != null && request.auth.token.admin == true;
      }
      match /settings/{doc} {
         allow read: if true;
         allow write: if request.auth != null && request.auth.token.admin == true;
      }
   }
}
```

Storage (production-rekomendasi):
```
rules_version = '2';
service firebase.storage {
   match /b/{bucket}/o {
      match /photos/{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null && request.auth.token.admin == true;
      }
      match /hero/{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null && request.auth.token.admin == true;
      }
   }
}
```

Catatan: untuk memberikan `custom claim` `admin: true` ke user Anda, gunakan Firebase Admin SDK di server atau `firebase-tools`:

Contoh (Node.js):
```js
admin.auth().setCustomUserClaims(uid, { admin: true });
```

Atau selama development Anda bisa memberikan write permission sementara lewat Console Rules editor.

---

## 📌 Cara Mengisi `firebase-config.js`

1. Dari Firebase Console → Project Settings → SDK setup, copy konfigurasi web.
2. Buka file `firebase-config.js` di proyek Anda, lalu isi seperti contoh berikut dan ubah `window.firebaseConfigExists = true;`:

Contoh `firebase-config.js`:
```js
window.firebaseConfigExists = true;
window.firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "your-project.firebaseapp.com",
   projectId: "your-project",
   storageBucket: "your-project.appspot.com",
   messagingSenderId: "YOUR_SENDER_ID",
   appId: "YOUR_APP_ID"
};
```

3. Simpan file dan muat ulang `admin.html` untuk mulai menggunakan Firebase.


## 🐛 Troubleshooting

### Masalah: Foto tidak upload

**Solusi:**
- Check browser console (F12 > Console)
- Pastikan Firebase config sudah benar
- Periksa ukuran file gambar

### Masalah: Admin login tidak berfungsi

**Solusi:**
- Periksa username dan password di browser console
- Clear browser cache (Ctrl+Shift+Delete)
- Coba mode private/incognito

### Masalah: GitHub Pages tidak update

**Solusi:**
```bash
git status
git add .
git commit -m "Update galeri"
git push origin main
```
Tunggu 1-2 menit untuk GitHub Pages rebuild

### Masalah: Firebase deployment error

**Solusi:**
- Pastikan firebase-tools terinstall: `firebase --version`
- Pastikan sudah login: `firebase login`
- Check file `.firebaserc` ada di directory
- Coba: `firebase deploy --debug`

---

## 📊 Statistik & Monitoring

### Firebase Console Features:

1. **Realtime Database**
   - Monitor queries dan usage
   - Lihat struktur data

2. **Cloud Storage**
   - Monitor file uploads
   - Lihat ukuran storage

3. **Hosting**
   - Lihat traffic analytics
   - Lihat deployment history

---

## 🎨 Customization Tips

### Ubah Judul Website

Di `index.html`, ubah:
```html
<title>Galeri Online - Koleksi Foto Terbaik</title>
```

### Ubah Warna Tema

Di `styles.css`, ubah CSS variables:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... dst */
}
```

### Ubah Text

Cari dan ganti text di `index.html` sesuai kebutuhan.

---

## 📧 Support

Jika ada masalah:

1. Check FAQ di [Firebase Docs](https://firebase.google.com/docs)
2. Check [GitHub Pages Docs](https://docs.github.com/en/pages)
3. Lihat console browser untuk error messages

---

## ✅ Checklist Publikasi

- [ ] Setup Firebase project
- [ ] Konfigurasi Realtime Database
- [ ] Konfigurasi Cloud Storage
- [ ] Update Firebase config di admin.html
- [ ] Ubah kredensial admin
- [ ] Test admin login locally
- [ ] Buat GitHub repository
- [ ] Push code ke GitHub
- [ ] Enable GitHub Pages
- [ ] Test website di GitHub Pages
- [ ] (Opsional) Deploy ke Firebase Hosting
- [ ] Share URL dengan teman/keluarga

---

## 🎉 Selesai!

Website galeri pribadi Anda sudah siap dipublikasikan dan dapat diakses secara online!

**URL GitHub Pages:** `https://username.github.io/galeri-pribadi`
**URL Firebase Hosting:** `https://your-project.web.app` (jika menggunakan Firebase)

Selamat! 🎊
