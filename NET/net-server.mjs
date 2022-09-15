import net from "net"

/* NET adalah standard library atau modules untuk membuat modul network client dan server berbasis TCP*/

const server = net.createServer((client) => {  //membuat server dan melakukan callback setiap ada client yang terkoneksi ke dalam server nya yang berupa socket
    console.info("client connected")

    client.addListener("data", (data) => {  //untuk memanggil socket menggunakan event listener
        console.info(`Menerima data dari client : ${data.toString()}`)
        client.write(`hello ${data.toString()}\r\n` ) //client disini dikonversirkan menajdi stream yang bisa readable dan writeable
    })
})

//untuk menjalankan port
server.listen(3000, "localhost")