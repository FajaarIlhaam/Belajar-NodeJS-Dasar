import { threadId, parentPort } from "worker_threads";

//melakukan perulangan dari data worker-main
parentPort.addListener("message", (message) => {
    for (let i = 0; i < message; i++) {
        console.info(`thread ${threadId} send message ${i}`)
        parentPort.postMessage(i)
    }
    parentPort.close()//worker di close
})