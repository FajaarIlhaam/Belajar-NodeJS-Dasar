const buffer = Buffer.from("Fajar Ilham", "utf-8") //(String: jar, encoding: utf-8)
console.info(buffer.toString()) //konver ke string biasa
console.info(buffer.toString("hex")) //konver ke hex
console.info(buffer.toString("base64")) //konver ke 64

const bufferBase64 = Buffer.from("RmFqYXIgSWxoYW0=" , "base64") //menampilkan hasil base 64
console.info(bufferBase64.toString("utf-8"))//mengkonversi dari encoding ke encoding lain