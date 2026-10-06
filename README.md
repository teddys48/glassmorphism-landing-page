# 🌟 Lumina UI — Extreme Glassmorphism Landing Page

Arsitektur landing page modern dengan **Extreme Glassmorphism**, dibangun menggunakan **Bun**, **React 19**, **Vite 8**, dan **Tailwind CSS v4** dengan implementasi *design taste* anti-slop, aksesibilitas tingkat tinggi (WCAG AA/AAA), serta kesiapan containerisasi production menggunakan **Docker** & **NGINX**.

---

## ✨ Fitur Utama

- 💎 **Extreme Glassmorphism Engine**:
  - Simulasi optik fisik: multi-layer `backdrop-filter` (blur hingga 48px), transmisi cahaya sub-pixel, serta specular top-edge bevel glare.
  - Refraksi kromatik realistis menggunakan aura orb bercahaya dinamis (`Nebula Cyan`, `Cyber Violet`, `Emerald Matrix`, `Solar Amber`).
  - Efek Z-depth 3D bertingkat pada kartu dan kontrol mengambang.
- 🎛️ **Live Interactive Glass Studio (Lab)**:
  - Pengunjung dapat mengubah parameter optik secara langsung: *Backdrop Blur*, *Surface Translucency*, *Specular Edge Highlight*, *Saturation Boost*, dan *Prismatic Hue*.
  - Menghasilkan kode CSS production yang dapat disalin dengan 1 klik.
- ⚡ **Kinerja Ekstrim (Zero JS Shader Overhead)**:
  - 100% akselerasi hardware GPU (`translate3d`, `will-change: transform`, CSS compositor pipeline) tanpa jank render saat scroll.
  - Target render mulus 120 FPS.
- ♿ **Aksesibilitas & Fallback Anti-Gagal (Best Practices)**:
  - Kontras teks terverifikasi WCAG AA/AAA (rasio 7.8:1+).
  - Dukungan native untuk `@media (prefers-reduced-transparency: reduce)` dengan fallback solid berkejelasan tinggi.
  - Dukungan `@media (prefers-reduced-motion: reduce)` yang menghentikan animasi rotasi dan orbs.
  - Navigasi keyboard penuh (`focus-visible:ring-2 focus-visible:ring-cyan-400`).
- 🎨 **Anti-Slop Design Discipline**:
  - Hero section terukur pas dalam viewport awal desktop (`min-h-[100dvh]`, top padding terkontrol).
  - Hierarki tipografi proporsional dengan font modern `Outfit` & `JetBrains Mono`.
  - Bento grid asimetris dengan variasi visual kaya (tanpa repetisi kartu monokrom).
  - Bebas dari hand-rolled emoji — menggunakan SVG icon terstandarisasi.
- 🚀 **Full Modern Stack**:
  - **Bun**: package manager & runtime ultra cepat.
  - **React 19** + **TypeScript**.
  - **Vite 8** + **@tailwindcss/vite v4**.
  - **Multi-stage Dockerfile** (Bun Alpine builder + NGINX Alpine runtime berukuran ringan < 35MB).

---

## 🛠️ Persyaratan Sistem

- [Bun](https://bun.sh) (v1.1+ atau v1.3+)
- [Docker](https://www.docker.com/) (opsional, untuk deployment container)

---

## 🚀 Panduan Memulai Cepat

### 1. Instalasi Dependensi dengan Bun

```bash
bun install
```

### 2. Jalankan Mode Pengembangan (HMR)

```bash
bun run dev
```

Buka browser Anda di `http://localhost:5173`.

### 3. Build untuk Produksi

```bash
bun run build
```

Hasil build yang dioptimasi dan di-minify akan berada di folder `dist/`.

### 4. Menjalankan Linting

```bash
bun run lint
```

---

## 🐳 Menjalankan dengan Docker

Proyek ini telah dilengkapi dengan `Dockerfile` multi-stage dan `nginx.conf` teroptimasi (lengkap dengan Gzip compression, HTTP security headers, SPA routing, dan endpoint `/health`).

### Menggunakan Docker Compose (Direkomendasikan)

```bash
docker compose up -d --build
```

Akses landing page di: `http://localhost:3000`

Cek status healthcheck:
```bash
curl http://localhost:3000/health
```

### Menggunakan Docker CLI Langsung

```bash
# Build Docker image
docker build -t lumina-glassmorphism:latest .

# Jalankan kontainer di port 3000
docker run -d -p 3000:80 --name lumina-landing lumina-glassmorphism:latest
```

---

## 📁 Struktur Direktori

```
├── .dockerignore                  # Docker ignore rules
├── .gitignore                     # Git ignore komprehensif (Bun, Vite, OS, Env)
├── Dockerfile                     # Multi-stage build (oven/bun -> nginx:alpine)
├── docker-compose.yml             # Konfigurasi container service & port mapping
├── nginx.conf                     # Konfigurasi NGINX production dengan SPA & security
├── package.json                   # Konfigurasi proyek, scripts, & dependensi
├── tsconfig.json                  # Konfigurasi TypeScript
├── vite.config.ts                 # Konfigurasi Vite & Tailwind v4
└── src/
    ├── types.ts                   # Definisi interface & type tema
    ├── index.css                  # Master CSS extreme glassmorphism & keyframes
    ├── main.tsx                   # Entry point React
    ├── App.tsx                    # Komposisi utama landing page
    └── components/
        ├── BackgroundAura.tsx     # Ambient dynamic chromatic glowing orbs
        ├── Navbar.tsx             # Floating frosted glass navigation dock
        ├── Hero.tsx               # High-impact hero & interactive 3D glass specimen
        ├── TrustWall.tsx          # SVG tech ecosystem trust strip
        ├── InteractiveGlassLab.tsx# Real-time optical shader playground studio
        ├── BentoFeatures.tsx      # Asymmetric bento grid dengan angle caustics
        ├── GlassShowcase.tsx      # Tabbed archetypes (Spatial, Fintech, AI, Studio)
        ├── PricingSection.tsx     # Transparent glass pricing tiers + confetti
        ├── FAQSection.tsx         # Accessible frosted glass accordion
        ├── CTASection.tsx         # High-density glass conversion card
        └── Footer.tsx             # Semantic frosted glass footer
```

---

## 📄 Lisensi

Proyek ini didistribusikan di bawah lisensi **MIT**.
