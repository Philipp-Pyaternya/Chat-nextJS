import { asClass } from 'awilix';
import AuthController from './AuthController';

export interface IControllerContainer {
    AuthController: AuthController;
}

export default {
    AuthController: asClass(AuthController).singleton(),
};
