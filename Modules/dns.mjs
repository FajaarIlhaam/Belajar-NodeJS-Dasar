import dns from "dns/promises" 


const address = await dns.lookup("DESKTOP-PNAN0VN") //method untuk menyetak ip4

console.info(address.address)
console.info(address.family)
