function fibonacci(n) {
    const sequence = [0]; //Inisialisasi array dengan nilai awal 0

    if (n === 0) return sequence; //Mereturn array jika n = 0
    sequence.push(1); //Push nilai 1 ke array
    for (let i = 2; i <= n; i++) { //Perulangan dari 2 hingga n
        sequence.push(sequence[i - 1] + sequence[i - 2]); //Push nilai fibonaci ke array
    }
    return sequence; //Return array
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
