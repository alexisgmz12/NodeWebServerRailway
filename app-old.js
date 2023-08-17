const http = require('http')

http.createServer((req,res)=>{
    //Establecer el tipo de file a descargar y su nombre
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    //Establacer la respuesta y el tipo de respuesta que se mostrara
    // res.writeHead(200,{'Content-Type':'application/csv'})
    //Mostrar data
    // res.write('id,nombre\n');
    // res.write('1,Alexis\n');
    // res.write('2,Maria\n');
    // res.write('3,Juan\n');
    // res.write('4,Pedro\n');
    //Terminar la respuesta y mostrar resultodos
    // res.end();

    
})
.listen(8080)

console.log('Escuchando el puerto',8080)