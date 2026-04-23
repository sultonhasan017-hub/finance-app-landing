// 1. Inisialisasi Element (Menangkap apa yang ada di layar)
const inputPemasukan = document.getElementById('inputPemasukan');
const btnHitung = document.getElementById('btnHitung');
const hasilPajak = document.getElementById('hasilPajak');

// 2. Logic Function
const hitungPajak = () => {
    const nilaiInput = inputPemasukan.value;

    // Validasi Dasar (Sangat penting di industri agar aplikasi tidak crash)
    if (nilaiInput === "" || nilaiInput <= 0) {
        alert("Mohon masukkan angka yang valid!");
        return;
    }

    // Kalkulasi Pajak 11% (Standar PPN Indonesia)
    const pajak = nilaiInput * 0.11;
    const sisaUang = nilaiInput - pajak;

    // 3. Menampilkan ke Layar dengan Template Literals (Backtick `)
    hasilPajak.innerHTML = `
        Pajak PPN (11%): Rp ${pajak.toLocaleString('id-ID')} <br>
        Sisa uang bersih: Rp ${sisaUang.toLocaleString('id-ID')}
    `;
};

// 4. Event Listener (Mendengarkan klik tombol)
btnHitung.addEventListener('click', hitungPajak);