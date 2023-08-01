import { Sequelize} from 'sequelize';
import config from 'config';
const database = config.get('db.name') as string;
const username = config.get('db.username') as string;
const password = config.get('db.password') as string;
const host = config.get('db.host') as string;
const port = config.get('db.port') as number;

const SequelizeConnection = new Sequelize(
    database, 
    username,
    password,
    {
        dialect: 'postgres',
        host: host,
        port: port,
    }
        

    
);

export default SequelizeConnection;