import {createServer} from "node:http"
import {unlink} from "node:fs/promises"

let PORT = 3000;

let myServer = createServer(async ()=>{
    try{
    await unlink("khalifile.txt")
      console.log("Khalifile is goining to fly.")    
    }
    catch(err){
         console.log("The file is non existent", err)
    }

})

myServer.listen(PORT,  ()=>{
      console.log(`The server is running at http://localhost:${PORT}`)
})