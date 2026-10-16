const dataMahasiswa = [
    { nama: "Cindu", nilai: 85, kehadiran: 90 },
    { nama: "Andi", nilai: 78, kehadiran: 85 },
    { nama: "Budi", nilai: 65, kehadiran: 80 },
    { nama: "Siti", nilai: 92, kehadiran: 95 },
    { nama: "Rina", nilai: 55, kehadiran: 70 }
];

// Function 1: Menghitung rata-rata
function hitungRataRata(data) {
    let total = 0;

    data.forEach(function (mhs) {
        total += mhs.nilai;
    });

    return total / data.length;
}

// Function 2: Mencari mahasiswa yang lulus
function cariMahasiswaLulus(data) {
    return data.filter(function (mhs) {
        return mhs.nilai >= 70 && mhs.kehadiran >= 75;
    });
}

// Menampilkan data menggunakan perulangan
console.log("=== DATA MAHASISWA ===");

for (const mhs of dataMahasiswa) {
    let kategori;

    if (mhs.nilai >= 85) {
        kategori = "A";
    } else if (mhs.nilai >= 70) {
        kategori = "B";
    } else {
        kategori = "D";
    }

    console.log(
        mhs.nama,
        "| Nilai:", mhs.nilai,
        "| Kategori:", kategori
    );
}

// Menampilkan hasil pengolahan
console.log("Rata-rata nilai:",
    hitungRataRata(dataMahasiswa).toFixed(2)
);

console.log("Mahasiswa lulus:",
    cariMahasiswaLulus(dataMahasiswa)
);

// Operator logika OR
const perluEvaluasi = dataMahasiswa.filter(function (mhs) {
    return mhs.nilai < 70 || mhs.kehadiran < 75;
});

console.log("Perlu evaluasi:", perluEvaluasi);