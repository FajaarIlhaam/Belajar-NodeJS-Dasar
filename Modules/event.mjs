import {EventEmitter} from "events"

/* Untuk menambahkan sebuah event maka dibutuhkan sebuah listener
listener ini akan melakukan sebuah callback yang akan dipanggil ketika melakukan emit
dengan jenis event yang sama
*/
const emitter = new EventEmitter()
emitter.addListener("hello", (name) => { //disini event yang di trigger adalah event hello
console.info(`Hai ${name}`)
})

// emitter.on("hello", (name) => { //disini event yang di trigger adalah event hello
//     console.info(`Hai ${name}`)
//     })  pakai on

emitter.emit("hello", "fajar")
