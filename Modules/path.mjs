import path from "path"

const file = 'Users/Fajar/tes.html'

console.info(path.dirname(file)) //untuk mengetahui direktori dri file yang dibuat
console.info(path.basename(file))//untuk base name
console.info(path.extname(file))//untuk externale name
console.info(path.parse(file))