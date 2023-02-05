const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { create, engine } = require('express-handlebars');
const hbs = create({
    extname: '.hbs',
});
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            test() {
                return 'Helper';
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('test', {
        pageTitle: 'test',
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port at: http://127.0.0.1:${port}`);
});
