import net from "net"

//membuat koneksi dari server ke client
const connectionClient = net.createConnection({
    port: 3000,
    host: "localhost"
})

connectionClient.addListener("data", (data) => { //event yang akan dikirim harus sama dengan di server
    console.info(`Mengirim data dri server dan menerima nya ke client : ${data.toString()}`)
})

setInterval(() => {
    connectionClient.write("Fajar\r\n")
}, 2000)