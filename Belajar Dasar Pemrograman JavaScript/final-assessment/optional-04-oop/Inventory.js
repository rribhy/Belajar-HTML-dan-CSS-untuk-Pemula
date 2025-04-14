/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungsi `item.displayDetails()`).
 */

class Inventory {
    constructor() { //Membuat constructor untuk membuat objek Inventory
        this.items = [];
    }
    addItem(items) { //Membuat method untuk menambahkan item ke dalam inventory
        this.items.push(items);
    }
    removeItem(id) { //Membuat method untuk menghapus item dari inventory
        this.items = this.items.filter(items => items.id !== id);
    }
    listItems() { //Membuat method untuk menampilkan detail item
        return this.items.map(items => items.displayDetails()).join('\n');
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
