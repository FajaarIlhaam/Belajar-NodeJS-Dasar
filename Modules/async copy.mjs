
const samplePromise = () => {
    return Promise.resolve("fajar")
}

const name = await samplePromise()
console.info(name)

/*Jika menggunakan node modules maka fungsi await akan jalan karna pada dasar nya .mjs ini juga
termasuk default behaviournya adalah sebuah ASYNC FUNCTION */