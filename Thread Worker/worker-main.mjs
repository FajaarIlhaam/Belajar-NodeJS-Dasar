import { threadId, Worker } from "worker_threads";

//membvuat 2 worker
const worker1 = new Worker("./worker.mjs")
const worker2 = new Worker("./worker.mjs")

//ketika worker mengirim data lalu menangkap data apa yang dikirim melalui callback dibawah
worker1.addListener("message", (message) => {
    console.info(`thread ${threadId} receive from worker 1: ${message}`) //threadid otomatis Auto Increment
})
worker2.addListener("message", (message) => {
    console.info(`thread ${threadId} receive from worker 2: ${message}`)
})

//mengirim data worker yang berupa value integer
worker1.postMessage(10)
worker2.postMessage(10)