import cluster from "cluster"
import os from "os"
import process from "process"
import http, { request } from "http"

if(cluster.isPrimary) {
    //jalankan server
    console.info(`primary : ${process.pid}`) //kalau pake node run programmnya yang primary
    for (let i = 0; i<os.cpus().length; i++) { //ngejalanin sesuai core dari cpu
        cluster.fork()
    }//yang jalan adalah worker

    //check exit
    cluster.addListener("exit", (worker) => {
        console.info(`worker ${worker.id} is exit `)
        cluster.fork()//jika ada cluster yang mati maka cluster fork ini akan menjalakan cluster baru lgi
    })
}


if(cluster.isWorker) {
    //menambahkan data di worker
    console.info(`worket : ${process.pid}`)
   const server = http.createServer((request,response) => { //http server 
    response.write(`response from proccess ${process.pid}`)
    response.end()
    process.exit()
   })

   server.listen(3000)
}

/*Untuk ngecek perberdaan node yang kerja di primary dan di worker bisa menggunakan process untuk melihat masing masing id*/

