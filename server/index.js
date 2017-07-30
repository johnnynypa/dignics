import express from 'express';

const app = express();

app.set('port', (process.env.PORT || 3001));

// express solo servira esa carpeta si esta en produccion
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
    console.log(`EL servidor escucha en: http://localhost:${app.get('port')}/`);
});