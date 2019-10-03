import { Express } from "express";
import { UserController } from './controllers';

class Routing {

    private app: Express;
    private userController: UserController;

    constructor(application: Express) {
        this.app = application;
    }

    public defineRoutes = (): void => {

    }
}

export default Routing;