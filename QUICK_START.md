# ⚡ Quick Start - Publikasi dalam 5 Menit

Panduan super cepat untuk membuat website Anda online!

## Pilihan 1: GitHub Pages (TERMURAH & TERGRATIS)

### 1️⃣ Buat GitHub Repository

1. Buka [github.com](https://github.com)
2. Sign up jika belum punya akun
3. Klik **"New repository"**
4. Nama: `galeri-pribadi`
5. Pilih **"Public"**
6. Klik **"Create repository"**

### 2️⃣ Upload File Anda

Option A - Git Command:

```bash
cd c:\coba

git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"

git init
git add .
git commit -m "Upload galeri pribadi"
git branch -M main
git remote add origin https://github.com/USERNAME/galeri-pribadi.git
git push -u origin main
```

Option B - GitHub Desktop:
1. Download [GitHub Desktop](https://desktop.github.com)
2. Klik "+ New" → Create New Repository
3. Pilih folder `c:\coba`
4. Publish ke GitHub

### 3️⃣ Enable GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings**
3. Sidebar: **Pages**
4. Pilih branch: `main`
5. Folder: `/ (root)`
6. Klik **Save**

✅ **SELESAI!** Website online di: `https://username.github.io/galeri-pribadi`

---

## Pilihan 2: Netlify (MUDAH & GRATIS)

### 1️⃣ Connect GitHub

1. Buka [netlify.com](https://netlify.com)
2. Klik **Sign up** → "Sign up with GitHub"
3. Authorize Netlify

### 2️⃣ Deploy

1. Klik **"New site from Git"**
2. Pilih GitHub → repo `galeri-pribadi`
3. Klik **Deploy Site**

✅ **SELESAI!** Website online secara instant!

---

## Pilihan 3: Firebase Hosting (DENGAN DATABASE)

### 1️⃣ Setup Firebase

1. Buka [firebase.google.com](https://firebase.google.com)
2. Klik **Get started**
3. Klik **Add project**
4. Nama: `galeri-pribadi`
5. Finish

### 2️⃣ Setup Realtime Database

1. Pilih project
2. Klik **Realtime Database**
3. Klik **Create Database**
4. Pilih lokasi: Asia Tenggara (se1)
5. Start: **Locked mode**
6. **Enable**

### 3️⃣ Setup Storage

1. Klik **Storage**
2. Klik **Get started**
3. Pilih lokasi yang sama
4. **Done**

### 4️⃣ Copy Config

1. Klik ⚙️ **Settings**
2. Scroll ke **SDK setup**
3. Pilih **Web**
4. Copy config

### 5️⃣ Update admin.html

Di `admin.html`, ganti:
```javascript
const firebaseConfig = {
    // Paste config di sini
};
```

### 6️⃣ Update Kredensial

Cari di `admin.html`:
```javascript
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
```

Ganti dengan password baru!

### 7️⃣ Deploy

```bash
npm install -g firebase-tools
firebase login
firebase init hosting

# Di folder c:\coba
firebase deploy
```

✅ **SELESAI!** Website online di URL yang ditampilkan

---

## 🎯 Perbandingan Opsi

| Fitur | GitHub Pages | Netlify | Firebase |
|-------|---|---|---|
| Harga | Gratis | Gratis | Gratis |
| Setup | Medium | Mudah | Medium |
| Database | ❌ | ❌ | ✅ |
| Admin Panel | ❌ | ❌ | ✅ |
| CDN | ✅ | ✅ | ✅ |
| Support | Good | Best | Good |

---

## 📱 Test Lokal Terlebih Dahulu

Sebelum publish, test di lokal:

```bash
# Pilih salah satu:

# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Ruby
ruby -run -ehttpd . -p8000
```

Buka: `http://localhost:8000`

---

## ✅ Checklist

- [ ] Edit file HTML/CSS/JS (opsional)
- [ ] Test file lokal (`index.html` & `admin.html`)
- [ ] Pilih platform (GitHub Pages / Netlify / Firebase)
- [ ] Daftar akun
- [ ] Upload file
- [ ] Enable hosting
- [ ] Buka URL publik
- [ ] Share dengan teman!

---

## 🔗 Hasil Akhir

**GitHub Pages:**
```
https://username.github.io/galeri-pribadi
```

**Netlify:**
```
https://your-site-name.netlify.app
```

**Firebase:**
```
https://your-project.web.app
```

---

## 🆘 Bantuan Cepat

### URL tidak loading
- Tunggu 5-10 menit setelah deploy
- Refresh browser (Ctrl+F5)
- Clear cache browser

### Admin page error
- Check Firebase config
- Verify credentials
- Check browser console (F12)

### Foto tidak muncul
- Gunakan link image yang benar
- Upload via admin panel
- Check storage di Firebase

---

## 🎉 Selamat!

Website Anda sudah online! 🚀

Share URL dengan teman & keluarga untuk menunjukkan galeri pribadi Anda!

**Next Steps:**
- [Full Deployment Guide](DEPLOYMENT_GUIDE.md)
- [Main README](README.md)
- [Firebase Docs](https://firebase.google.com/docs)

---

**Butuh bantuan? Baca file DEPLOYMENT_GUIDE.md untuk panduan lengkap**
