import util from "util"

const sayName = "Fajar"
const sayHobby = "coding"

console.info(`Hai ${sayName} ${sayHobby}`)
//sebelum ada metode backtip dlu memakai format util seperti dibawah ini
console.info(util.format(" Hello %s", sayName,"hobby",sayHobby))

//dalam bentuk json stringfy
const introduce = {
    name: "Fajar Ilham",
    gender : "Male",
    hobby : "Coding and make chill with gaming",
    favorite : "Enthusiast with ethical hacking and Backend developer",
}

console.info(`Introduce :  ${JSON.stringify(introduce)}`)
//dalam bentuk versi util
console.info(util.format("Introduce : %j", introduce))

