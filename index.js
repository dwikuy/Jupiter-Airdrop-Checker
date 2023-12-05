const fs = require('fs');
const axios = require('axios');

// Baca daftar wallet dari file teks
const wallets = fs.readFileSync('wallets.txt', 'utf8').split('\n').map(wallet => wallet.trim().toLowerCase());

// URL API yang akan diambil data dari
const apiBaseUrl = 'https://airdrop-api.jup.ag/allocation/';

// Inisialisasi array untuk menyimpan data yang memenuhi kriteria
const filteredData = [];

// Fungsi untuk mengambil data dari API
async function fetchData(wallet) {
  try {
    const apiUrl = `${apiBaseUrl}${wallet}`;
    console.log(`Mengambil data untuk wallet: ${wallet}`);
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.tokens_final && parseInt(data.tokens_final) > 1) {
      filteredData.push(`Owner: ${data.owner}, Tokens Final: ${data.tokens_final}`);
    }
  } catch (error) {
    console.error(`Gagal mendapatkan data untuk wallet: ${wallet}`);
  }
}

// Fungsi untuk mengambil data dari API dengan delay 10 detik
function fetchDataWithDelay(wallet, delay) {
  return new Promise(resolve => {
    setTimeout(async () => {
      await fetchData(wallet);
      resolve();
    }, delay);
  });
}

// Loop melalui setiap wallet dengan delay 10 detik
async function main() {
  const delayMs = 5000; // Delay dalam milidetik (10 detik)

  for (const wallet of wallets) {
    await fetchDataWithDelay(wallet, delayMs);
  }

  // Simpan data yang memenuhi kriteria ke dalam file isi.txt
  fs.writeFileSync('isi.txt', filteredData.join('\n'));
}

main();
