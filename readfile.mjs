// import { createServer } from 'http';
// import {readFile} from 'fs';

// const PORT = 3000;

// let MyServer = createServer((req,res)=>{
  
//     readFile('./readfile.txt', 'utf8', (err,data)=>{
//         if(err){
//             console.log(err)
//             res.end("An Error has ocurred.")
//             res.writeHead(404, {"Content-Type": "text/plain"})
//         }
//         else{
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.end(data)
//         }
//     })
    
// })

// MyServer.listen(PORT , ()=>{
//     console.log(`The server is running at http://localhost:${PORT}`)
// })

//Async Function

// import { createServer } from 'http';
// import {readFile} from 'node:fs/promises';

// const PORT = 3000;

// let MyServer = createServer( async (req,res)=>{
// try{
//   const data  = await readFile('./readfile.txt', 'utf8', ()=>{        
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.end(data)
//    })
// }
// catch (err){
//     console.log(err)
//     res.end("An Error has ocurred.")
//     res.writeHead(404, {"Content-Type": "text/plain"})
//     }
// })

// MyServer.listen(PORT , ()=>{
//     console.log(`The server is running at http://localhost:${PORT}`)
// })