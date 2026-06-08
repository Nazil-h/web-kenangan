# 📸 Website Kenangan — Panduan Lengkap

Template website kenangan berbasis HTML/CSS/JS murni.  
Siap hosting di **GitHub Pages** tanpa perlu server atau framework apapun.

---

## 📁 Struktur Folder

Pastikan struktur foldermu seperti ini sebelum upload ke GitHub:

```
kenangan-website/
├── index.html          ← File utama (EDIT DI SINI)
├── style.css           ← Tampilan (jangan ubah kecuali untuk kustomisasi)
├── script.js           ← Logika (jangan ubah)
├── README.md           ← Panduan ini
└── assets/
    ├── music/
    │   └── lagu.mp3        ← File musikmu (MP3 atau OGG)
    ├── photos/
    │   ├── foto1.jpg        ← Foto kenangan pertama
    │   ├── foto2.jpg        ← Foto kenangan kedua
    │   └── ...              ← dst.
    └── videos/
        └── video1.mp4       ← Video kenangan (opsional)
```

---

## ✏️ Panduan Mengisi Template

Buka `index.html` dengan teks editor (VS Code, Notepad++, dll).  
Cari komentar `[EDIT]` — bagian itulah yang perlu kamu ubah.

---

### Slide 1 — Ucapan Pembuka

| Yang diisi | Cara mengisinya |
|---|---|
| Judul tab browser | Ganti teks di `<title>...</title>` (baris paling atas) |
| Kata sapaan | Ganti teks di `<span class="script-tag">` |
| Nama orang yang dituju | Ganti teks di `<h1 class="big-name">` |
| Pesan pembuka | Ganti paragraf di `<p class="body-text">` |
| Teks tombol | Ganti teks di `<button class="btn-outline">` (opsional) |

---

### Slide 2 — Musik

| Yang diisi | Cara mengisinya |
|---|---|
| File musik | Taruh file MP3 di `assets/music/`, lalu ganti path di `<source src="...">` |
| Judul lagu | Ganti teks di `<h2 class="song-title">` |
| Nama artis | Ganti teks di `<p class="song-artist">` |
| Pesan kecil | Ganti teks di `<p class="song-note">` (opsional, hapus tag `<p>` jika tidak mau) |

---

### Slide Kenangan — Cara Menambah

1. Buka `index.html`, cari komentar `KENANGAN #2`  
2. **Copy** seluruh blok `<section class="slide s-mem" ...> ... </section>`  
3. **Paste** setelah slide kenangan terakhir (sebelum `SLIDE PENUTUP`)  
4. Ganti `data-slide="X"` — isi X dengan nomor urut berikutnya (mis. 5, 6, 7, dst.)  
5. Isi foto/video dan teks sesuai petunjuk komentar `[EDIT]`  
6. Update angka di `<div class="mem-num">` sesuai urutan (01, 02, 03, ...)

**Tips variasi layout:**  
Tambahkan class `flip` pada `<div class="mem-grid">` untuk membalik posisi foto ke kanan.  
Disarankan bergantian: kenangan ganjil tanpa `flip`, kenangan genap pakai `flip`.

**Menggunakan video** (bukan foto):  
- Hapus (atau comment) blok `<div class="polaroid">...</div>`  
- Uncomment blok `<div class="vid-wrap">...</div>`  
- Ganti path di `<source src="...">`

---

### Slide Penutup

| Yang diisi | Cara mengisinya |
|---|---|
| Kata pengantar penutup | Ganti teks di `<span class="script-tag">` |
| Kalimat penutup utama | Ganti teks di `<h2 class="closing-title">` |
| Pesan penutup | Ganti paragraf di `<p class="body-text">` |
| Tanda tangan | Ganti teks di `<p class="signature">` |

---

## 🖼️ Tips Foto & Video

### Foto
- Format yang disarankan: **JPG** atau **WebP**
- Ukuran ideal: **800×600px** atau lebih (tapi jangan terlalu besar)
- Ukuran file: maksimal **1–2 MB per foto** agar loading cepat
- Foto portrait (vertikal) tetap bisa — otomatis di-crop ke rasio 4:3
- Kalau mau compress foto, pakai [Squoosh](https://squoosh.app) (gratis, berbasis web)

### Video
- Format: **MP4** (H.264)
- Ukuran: usahakan di bawah **10 MB** per video agar tidak lambat di GitHub Pages
- Kalau terlalu besar, compress dulu di [HandBrake](https://handbrake.fr) (gratis)

### Musik
- Format: **MP3** atau **OGG**
- Musik akan **loop otomatis** saat diputar
- Pilih lagu yang tenang agar tidak mengganggu saat membaca teks
- Ukuran file: idealnya di bawah **5–8 MB**

---

## 🚀 Cara Hosting di GitHub Pages

1. **Buat repository baru** di [github.com](https://github.com)  
   > ⚠️ Kalau mau bisa diakses semua orang, buat **Public**. Kalau Private, butuh GitHub Pro untuk Pages.

2. **Upload semua file dan folder**:  
   `index.html`, `style.css`, `script.js`, folder `assets/`

3. Buka **Settings** → **Pages** (menu di sidebar kiri)

4. Di bagian **Source**: pilih  
   `Deploy from a branch` → branch `main` → folder `/ (root)`

5. Klik **Save**

6. Tunggu **1–3 menit**, lalu akses websitemu di:
   ```
   https://username-github-kamu.github.io/nama-repository/
   ```

> 💡 **Tips share:** Gunakan URL shortener [s.id](https://s.id) atau [bit.ly](https://bit.ly)  
> agar link lebih pendek dan mudah diingat saat kamu bagikan.

---

## 🎨 Kustomisasi Warna

Buka `style.css`, di bagian paling atas ada `:root { ... }`.  
Variabel yang bisa kamu ganti untuk mengubah tema warna:

```css
--amber:    #c8864a;  /* Warna aksen utama (tombol, tanggal, dll) */
--cream:    #f0e4cc;  /* Warna teks heading terang */
--bg:       #0a0806;  /* Warna background utama */
--text-dim: #9a8a78;  /* Warna teks paragraf */
--pol-bg:   #f5edd8;  /* Background frame polaroid */
```

Cari kombinasi warna yang kamu suka di [coolors.co](https://coolors.co),  
lalu paste kode hex-nya ke sini.

---

## ⌨️ Navigasi Website

| Cara | Fungsi |
|---|---|
| **Scroll** | Pindah slide ke bawah/atas |
| **Klik titik** di sisi kanan | Lompat ke slide tertentu |
| **Arrow Down / Page Down** | Slide berikutnya |
| **Arrow Up / Page Up** | Slide sebelumnya |

---

*Template dibuat dengan ♥*
