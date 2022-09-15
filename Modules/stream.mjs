import fs from "fs"

//stream adalah aliran data di node js string ini berupa object yang sifatnya read delete and write

//stream writeable
const writer = fs.createWriteStream("target.log") //patch 

writer.write("Fajar\n")
writer.write("Ilham\n") 
writer.write("Zard\n")
writer.end()

//strean readable
const reader = fs.createReadStream("target.log")
//reader proccess menggunakan event
reader.addListener("data",(data) => { //ketika process read terjadi maka yang dicetak adalah berbentuk buffer bukan string lgi
   console.info(data.toString())//default nya adalah buffer jadi harus di konversikan
})
