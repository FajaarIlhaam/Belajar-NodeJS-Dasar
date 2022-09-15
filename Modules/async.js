// samplePromise = () => {
//     return Promise.resolve('Fajar')
// }

// const name = await.samplePromise()
// console.info(name)

/* Code diatas ketika dijalankan akan mengalami error karna function await diluar dri function async*/

const samplePromise = () => {
    return Promise.resolve("fajar")
}
const runAsync = async () => {
    const name = await samplePromise()
    console.info(name)
}
runAsync()
/*untuk ingin menggunakan await maka harus dibuat function async baru yang menampung await nya ini adalah cara pertama
dan cara keduanyya adalah menggunakan javascript modules atau .mjs
*/