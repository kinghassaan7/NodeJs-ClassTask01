// import {createServer} from "node:http"
// import { appendFile } from "node:fs"

// const PORT = 3000;

// let myServer = createServer((req,res)=>{ 
//     appendFile("createfile.txt", "\nThis is the new file in which text is appended.", (err)=>{
//         if(err) {
//           console.log("An error has occured")
//           res.end("An error has occured")
//           res.writeHead(404, {"Context": "text/plain"})
//         }

//       else{
       
//             console.log("New file is being created")
//             res.end("This is a file.")
//      }
//     })
//     })

// myServer.listen(PORT,()=>{
//     console.log(`The server is running at http://localhost:${PORT}`)
// })

// Async Function

// import { createServer } from "node:http";
// import { appendFile } from "node:fs/promises";

// const PORT = 3000;

// const myServer = createServer(async (req, res) => { 
//     try {
//         await appendFile("createfile.txt", "\nThis is the new file in which text is appended.");
//         console.log("New file is being created");
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("This is a file.");
//     } catch (err) {
//         console.log("An error has occurred");
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("An error has occurred");
//     }
// });

// myServer.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}`);
// });
