/*Buffer adalah memanipulasi sebuah file menjadi sebuah array byte 
buffer sudah bersifat global jadi tidak perlu untuk diimpor kembali
*/
const buffer = Buffer.from("Fajar Ilham")
console.info(buffer)//string fajar ilham akan dicetak dalam bentuk byte
console.info(buffer.toString())//Untuk mengembalikan menjadi sebuah string kembali

buffer.reverse() // membalikkan kata string dri yang sebelumnnya
console.info(buffer.toString()) // akan dikonversikan menjadi string terbalik