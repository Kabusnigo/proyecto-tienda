const express = require('express');
const app = express();
const path = require('path');
const hombresRouter = require('./routes/hombres');
const mujeresRouter = require('./routes/mujeres');
let puerto = 3306;
app.use(express.json());

// app.use es un Middleware
// Para que se envien multiples archivos estaticos desde una carpeta especifica
// asi aparece el style del sitio. 
// El app.get() es lo mismo, pero en una ruta especifica
app.use(express.static(path.join(__dirname,'public')));


//  -------------- ROUTES --------------
app.use('/hombres', hombresRouter);
app.use('/mujeres', mujeresRouter);
// Cada vez que alguien llame a /hombres, lo resuelvo con el contenido de hombresRouter


//  ------------------------------------

//  -------------- PUBLIC ---------------
// Cuando este en la pag. principal, el servidor manda el index.html

app.get('/', (req,res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hombres', (req,res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'hombres.html'));
});

app.get('/mujeres', (req,res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'mujeres.html'));
});
//  -------------- END OF PUBLIC --------------



//  -------------- OPEN SERVER IN PORT --------------

app.listen(puerto, () => {
    console.log(`El servidor está trabajando en el puerto ${puerto}`);
});

//  -------------- END OF OPEN SERVER IN PORT --------------

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('public/service-worker.js')
        .then(function() {
            console.log('ServiceWorker registered!');
        }).catch(function (err){
            console.log('ServiceWorker failed',err);
        });
    })
  
}



// MULTER 
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// 

//nodemon: node --watch index.js PARA QUE SE ACTUALICE EL ARCHIVO.
