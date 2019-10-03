import { Express } from "express";
import { UserController, HomeController } from './controllers';

class Routing {

    private app: Express;
    private userController: UserController;
    private homeController: HomeController;

    constructor(application: Express) {
        this.app = application;
        this.userController = new UserController();
        this.homeController = new HomeController();
    }

    public defineRoutes = (): void => {
        this.defineHomeRoutes();
        this.defineUserRoutes();
    }

    private defineHomeRoutes = (): void => {
        this.app.get("/", this.homeController.indexAction)
    }

    private defineUserRoutes = (): void => {
        this.app.get("/user", this.userController.indexAction)
    }
}

export default Routing;