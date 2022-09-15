import os from "os"


//module untuk ngecek jenis os atau cpi yang kita pakai
console.info(os.platform())
console.table(os.cpus())

/*Jika ingin menambahkan Modules untuk node js gunakan file .mjs karna jika menggunakan .js itu akan terjadi error 
 karna node js tidak dapat membaca ES Module
*/