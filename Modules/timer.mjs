import timers from "timers/promises"

// console.info(new Date())
// const timerName = await timers.setTimeout(5000, "Fajar") //(target, value)
// console.info(new Date())

//set interval menggunakan for
for await (const starTime of timers.setInterval(1000, "igonered")) {
    console.info(`start time at ${new Date()}`)
}
