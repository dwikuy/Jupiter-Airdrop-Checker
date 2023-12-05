const fs = require('fs');
const axios = require('axios');

// Baca daftar wallet dari file teks
const wallets = fs.readFileSync('wallets.txt', 'utf8').split('\n').map(wallet => wallet.trim().toLowerCase());

// URL API yang akan diambil data dari
const apiBaseUrl = 'https://airdrop-api.jup.ag/allocation/';

// Inisialisasi array untuk menyimpan data yang memenuhi kriteria
const filteredData = [];

// Fungsi untuk mengambil data dari API dengan delay
async function fetchDataWithDelay(wallet) {
  try {
    const apiUrl = `${apiBaseUrl}${wallet}`;
    console.log(`Mengambil data untuk wallet: ${wallet}`);
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.tokens_final && parseInt(data.tokens_final) > 1) {
      const balance = `Balance: ${data.tokens_final}`;
      console.log(`Wallet: ${wallet}, ${balance}`);
      filteredData.push(`Wallet: ${wallet}, ${balance}`);
      fs.writeFileSync('isi.txt', filteredData.join('\n'));
    }
  } catch (error) {
    console.error(`Gagal mendapatkan data untuk wallet: ${wallet}`);
  }
}

// Loop melalui setiap wallet dengan delay 5 detik
async function main() {
  const delayMs = 5000; // Delay dalam milidetik (5 detik)

  for (const wallet of wallets) {
    await fetchDataWithDelay(wallet);
    await new Promise(resolve => setTimeout(resolve, delayMs)); // Delay 5 detik
  }
}

main();
