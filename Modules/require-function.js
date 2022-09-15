const os = require("os")

console.info(os.platform())
console.table(os.cpus())

/*Require function ini adalah pemanggilan modules yang sama cuman beda metode karna require function ini menggunakan
standart function javascript untuk memanggil modules sedangkan .mjs itu menggunakan import bedanya require function 
tidak perlu menambahkan .mjs cukup .js maka sudah jalan.
-require function ini adalah metode lama dari pemanggilan modules node js sebelum ada import modules
*/