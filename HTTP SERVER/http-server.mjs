import http from "http"

const server = http.createServer(/*requestListener*/(request,response) => { //callback yang berisi parameter request dan response

    console.info(request.method) //request method
    console.info(request.url)   //request url
    console.table(request.headers) //request header

    //menambah response dengan stream
    if (request.url === "/fajar") {
        response.write("IM READY TO BUILD APPLICATION USING NODE JS")
    }else if(request.url === "/zard"){
        response.write("HALO ZARD")
    }
    response.end()
})

//menjalakan server di web browser
server.listen(3000) //port 300