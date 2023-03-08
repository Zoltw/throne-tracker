import app from './app';

const port = 8080;

fun();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

async function fun() {
    try {
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
