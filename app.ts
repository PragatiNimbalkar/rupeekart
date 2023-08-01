import express, { urlencoded } from 'express';
import cors from 'cors';
import config from 'config';
import SequelizeConnection from './dbConfig/db.config';
import {productRouter} from './Routes/product.route';
import bodyParser from 'body-parser';


const port = config.get('server.port');
const host = config.get('server.host');
const app = express();


SequelizeConnection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/product', productRouter);

app.listen(port,()=>{
    console.log(`We are running on http://${host}:${port}`)
    
})