//macam - macam atau jenis library os modules
import os from "os"

console.info(os.platform()) //untuk ngasih info platform yang dipakai
console.info(os.arch()) //untuk arsitektur dari sistem os 
console.table(os.cpus())//untuk jenis cpu atau jumlah cpu nya
console.info(os.uptime())//untuk jenis berapa lama sistem nya beroperasi
console.info(os.totalmem())//untuk info total memori keseluruhan / yang sudah dipakai
console.info(os.freemem())//untuk info total memori yang masih free
console.info(os.hostname())//untuk nama host dari sistem
console.info(os.homedir())//untuk direktori default sistem
console.table(os.networkInterfaces())