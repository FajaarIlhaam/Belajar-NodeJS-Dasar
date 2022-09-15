import process from "process"

process.addListener("exit", (exitCode) => {
    console.info(`Node js exit with code ${exitCode}`)
})

console.info(process.version)
console.table(process.argv)
console.table(process.report)

process.exit(1)
console.info("hello")//output ini tidak akan keluar karna bagian process di atas sudah melakukan exit