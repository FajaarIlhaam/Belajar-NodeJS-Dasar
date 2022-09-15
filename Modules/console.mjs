import { Console } from "console";
import fs from "fs"

/*Library di console bisa di run selain terminal sepeerti mengerimkan console lewat file*/
const file = fs.createWriteStream("application.log")//menggunakan stream untuk membuat file consolenya

const log = new Console({
    stdout: file,   //mengganti stdout nya ke stream yang udh di buat variables
    stderr: file     //mengganti stderr nya ke stream yang udh di buat variables
})

log.info("Hai world") //console log hanya memanggil variable log
log.error("hai")
