
import express, { Application } from 'express';
import charactersRoute from '../routes/characters.routes';
import characterRoute from '../routes/character.routes';
import cors from 'cors';
const { PORT, NODE_ENV } = process.env;
 
interface ApiPath {
    characters: string
    character: string
}

class Server {
    private app: Application;
    private port: string;
    private apiPath: ApiPath = {
        characters: '/api/characters',
        character: '/api/character'
    }
    
    constructor() {
        this.app = express();
        this.port = PORT || '3000'; 
        this.routes();
        this.middleware
    }

    middleware() {
        // CORS
        this.app.use( cors());
    
        // Body Parse
        this.app.use( express.json());

    }

    routes() {
        this.app.use(this.apiPath.characters, charactersRoute)
        this.app.use(this.apiPath.character, characterRoute)
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log("ENVIRONMENT: ", NODE_ENV)
            console.log(`Server running in ${this.port} port.` )
        })
    }
}

export default Server;