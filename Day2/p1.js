const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plan'});
    res.end('Hello world!')
})
server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err)
    else
       console.log("server started on port 9000")
})