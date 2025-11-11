 const fs=require('fs');

 const requestHandler=(req,res)=>{

    
   if(req.url==='/')
   {
   res.write('<html>');
   res.write('<h1>Enter  Title</h1>');
   res.write('<form action="/messages" method="POST"><input type="text" name="message" ><input type="text" name="age" ><button type="submit">Send</button></form> ');
   res.write('</html>');
   return res.end();
    } 
      
    
    if(req.url==='/messages' && req.method=="POST")
    {
        const body=[];

        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        } );
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];

            fs.writeFileSync('message.txt',message, err=>{

                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
            });

        }

   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<h1>Hello  j again </h1>');
   res.write('</html>');
   res.end();
 

 };

module.exports=requestHandler;
 