import https from "https"

//http client node js
const endpoint = "https://hookb.in/r1ekxRQQoLUqdJ3qVQwr"
const request = https.request(endpoint, { //request endpoint dan option  
    method: "POST",
    headers: {
            "content-type" : "application/json",
            "Accept" : "application/json",
    }
}, (response) => { //callback dan mengerim respone incomingMessage
    response.addListener("data", (data) => {  //menambahkan listener
        console.info(`Receive data : ${data.toString()}`) 
    })
})

//menambahkan data berupa json
const body = JSON.stringify({
    name: "Fajar Ilham",
    hobby: "coding",
})

//stream
request.write(body)
request.end()