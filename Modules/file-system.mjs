import fs from "fs/promises"


const buffer = await fs.readFile('file-system.mjs')
console.info(buffer.toString())

//menulis file promise dan akan mengkonversikan sesuai jenis file
await fs.writeFile('tes.html', 'hello world')