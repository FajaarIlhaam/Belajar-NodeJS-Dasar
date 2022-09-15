import {URL} from "url" //librabry url untuk mengetehaui informasi dari url

const link = new URL("https://nodejs.org/dist/latest-v16.x/docs/api/url.html")

//url yang asli bisa diubah sesuai dengan kemauan
link.host = "wwww.zardilham.com"

console.info(link.toString())
console.info(link.href)
console.info(link.protocol)
console.info(link.host)
console.info(link.pathname)
console.info(link.searchParams)