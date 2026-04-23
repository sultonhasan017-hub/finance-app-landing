// 1. State / Data Application
// Kita coba ambil data dari LocalStorage (Memory Browser) agar permanen
let dataTransaksi = JSON.parse(localStorage.getItem("transaksi")) || [];

// 2. Selector
const namaItem = document.getElementById("namaItem");
const jumlahItem = document.getElementById("jumlahItem");
const btnTambah = document.getElementById("btnTambah");
const daftarTransaksi = document.getElementById("daftarTransaksi");

// 3. Function untuk Render (Menampilkan) Data ke HTML
const renderTransaksi = () => {
  daftarTransaksi.innerHTML = ""; // Kosongkan dulu list sebelum diisi ulang

  dataTransaksi.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.cssText =
      "display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #ddd;";

    li.innerHTML = `
            <span>${item.nama}</span>
            <span style="color: #e11d48;">- Rp ${item.jumlah.toLocaleString("id-ID")}</span>
            <button onclick="hapusData(${index})" style="background:none; border:none; color:red; cursor:pointer;">[x]</button>
        `;
    daftarTransaksi.appendChild(li);
  });

  // Simpan setiap perubahan ke LocalStorage (Standar Industri)
  localStorage.setItem("transaksi", JSON.stringify(dataTransaksi));
};

// 4. Function Tambah Data
const tambahData = () => {
  const nama = namaItem.value;
  const jumlah = parseInt(jumlahItem.value);

  if (!nama || !jumlah) {
    alert("Isi semua data dulu!");
    return;
  }

  // Masukkan ke Array sebagai Object
  dataTransaksi.push({ nama, jumlah });

  // Bersihkan input
  namaItem.value = "";
  jumlahItem.value = "";

  renderTransaksi();
};

// 5. Function Hapus Data
window.hapusData = (index) => {
  dataTransaksi.splice(index, 1); // Menghapus 1 data berdasarkan urutan (index)
  renderTransaksi();
};

// 6. Event Listener
btnTambah.addEventListener("click", tambahData);

// Jalankan render saat pertama kali web dibuka
renderTransaksi();
