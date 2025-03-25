// ============================
//  ABSTRAKSI (Abstraction)
// ============================
// Kita membuat class abstrak "Pasien" yang hanya bisa diwarisi, bukan langsung dibuat objeknya.
class Pasien {
    constructor(nama, umur, keluhan) {
        if (this.constructor === Pasien) {
            throw new Error("Class Pasien adalah abstrak dan tidak bisa dibuat objek langsung.");
        }
        this.nama = nama;
        this.umur = umur;
        this.keluhan = keluhan;
    }

    // Method abstrak untuk dipakai di subclass
    deskripsi() {
        throw new Error("Method 'deskripsi()' harus diimplementasikan di subclass.");
    }
}

// ============================
//  ENKAPSULASI (Encapsulation)
// ============================
// Class ini menggunakan enkapsulasi dengan properti private (menggunakan #).
class Antrian {
    #daftarPasien = []; // Properti private, hanya bisa diakses dalam class ini

    // Method untuk menambahkan pasien ke antrian
    tambahPasien(pasien) {
        this.#daftarPasien.push(pasien);
        console.log(`${pasien.nama} telah ditambahkan ke antrian.`);
    }

    // Method untuk memproses pasien berikutnya
    prosesPasien() {
        if (this.#daftarPasien.length === 0) {
            console.log("Tidak ada pasien dalam antrian.");
            return;
        }
        const pasien = this.#daftarPasien.shift(); // Menghapus pasien pertama dalam antrian
        console.log(`Pasien ${pasien.nama} dengan keluhan "${pasien.keluhan}" sedang ditangani.`);
    }

    // Method untuk menampilkan jumlah pasien dalam antrian
    jumlahAntrian() {
        return this.#daftarPasien.length;
    }
}

// ============================
//  PEWARISAN (Inheritance)
// ============================
// Class "PasienUmum" dan "PasienBPJS" mewarisi class "Pasien"
class PasienUmum extends Pasien {
    constructor(nama, umur, keluhan, biaya) {
        super(nama, umur, keluhan);
        this.biaya = biaya;
    }

    // Implementasi method abstrak
    deskripsi() {
        return `Pasien Umum: ${this.nama}, Umur: ${this.umur} tahun, Keluhan: ${this.keluhan}, Biaya: Rp ${this.biaya}`;
    }
}

class PasienBPJS extends Pasien {
    constructor(nama, umur, keluhan, nomorBPJS) {
        super(nama, umur, keluhan);
        this.nomorBPJS = nomorBPJS;
    }

    // Implementasi method abstrak
    deskripsi() {
        return `Pasien BPJS: ${this.nama}, Umur: ${this.umur} tahun, Keluhan: ${this.keluhan}, No. BPJS: ${this.nomorBPJS}`;
    }
}

// ============================
//  POLIMORFISME (Polymorphism)
// ============================
// Method yang menerima objek pasien dan memanggil deskripsi mereka
function tampilkanInfoPasien(pasien) {
    console.log(pasien.deskripsi()); // Method deskripsi() bisa berbeda tergantung jenis pasien
}

// ============================
//  IMPLEMENTASI PROGRAM
// ============================

// Membuat objek antrian
const antrian = new Antrian();

// Membuat beberapa objek pasien
const pasien1 = new PasienUmum("Andi", 30, "Demam", 100000);
const pasien2 = new PasienBPJS("Siti", 25, "Batuk", "BPJS-123456");
const pasien3 = new PasienUmum("Budi", 40, "Pusing", 150000);

// Menambahkan pasien ke antrian
antrian.tambahPasien(pasien1);
antrian.tambahPasien(pasien2);
antrian.tambahPasien(pasien3);

// Menampilkan informasi pasien menggunakan polimorfisme
tampilkanInfoPasien(pasien1);
tampilkanInfoPasien(pasien2);
tampilkanInfoPasien(pasien3);

// Memproses pasien dalam antrian
console.log("\nMemproses pasien dalam antrian:");
antrian.prosesPasien();
antrian.prosesPasien();
antrian.prosesPasien();
antrian.prosesPasien(); // Akan menunjukkan bahwa antrian kosong
