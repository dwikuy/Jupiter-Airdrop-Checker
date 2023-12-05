# Jupiter-Airdrop-Checker

## Deskripsi
Script ini digunakan untuk memeriksa wallet yang mendapatkan Airdrop Jupiter / jup.ag.

## Persyaratan
- Node.js (versi 12 atau lebih baru)
- Paket `axios` (instal dengan perintah `npm install axios`)

## Penggunaan
1. Clone repositori ini ke komputer Anda atau unduh sebagai ZIP.
2. Buat file `wallets.txt` dan tambahkan daftar wallet yang ingin Anda cek, satu wallet per baris.
3. Instal paket `axios` jika belum terpasang: npm install axios fs
4. Jalankan skrip dengan perintah: node index.js
5. Hasil akan disimpan dalam file `isi.txt`, yang akan berisi daftar wallet yang memenuhi kriteria.

## Catatan
- Pastikan koneksi internet Anda berfungsi dengan baik saat menjalankan skrip ini, karena skrip ini mengambil data dari internet melalui API.
- Anda dapat menyesuaikan URL API dan filter kriteria sesuai dengan kebutuhan Anda dengan mengedit kode skrip.
- Pastikan untuk menjaga kerahasiaan file `wallets.txt` Anda yang berisi daftar wallet pribadi Anda.
