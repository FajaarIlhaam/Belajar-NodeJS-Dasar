import readline from "readline"
import process from "process"


//input dari terminal
const input = readline.createInterface( {
    input: process.stdin, //standar input
    output: process.stdout //standar output untuk output dri node js
})
/*menggunakan question untuk method bertanya maka output akan menampikan data dibawah lalu ketkia user ngetik atau nge input
maka callback akan dieksekusi dan databnya akan disimpan melalui arrow function 
*/
input.question("Hai nama kamu siapa?",(name) => {
console.info(`Oh oke, Hai ${name}`)
input.close()//jika sudah selesai maka jalanin input close
})
