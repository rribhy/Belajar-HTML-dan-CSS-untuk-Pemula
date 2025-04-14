function factorial(n) {
    if (n == 0) { //Kondisi if jika n = 0
        return 1; //Return 1
    }
    else { //Kondisi jika n bukan 0
        return n * factorial(n-1); //Return n * factorial(n-1)
    }
}

// Jangan hapus kode di bawah ini!
export default factorial;
