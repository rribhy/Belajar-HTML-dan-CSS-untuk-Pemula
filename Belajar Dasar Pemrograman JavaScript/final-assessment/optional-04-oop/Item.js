/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    constructor(id, name, quantity, price) { //Membuat constructior Item dengan properti id, name, quantity, dan price
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    updateDetails(name, quantity, price) { //Membuat method updateDetails untuk mengubah nilai name, quantity, dan price
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    displayDetails(id, name, quantity, price) { //Membuat method displayDetails untuk mengembalikan informasi detail dari Item
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}

// Jangan hapus kode di bawah ini!
export default Item;
