import { asClass } from 'awilix';
import UserService from 'server/services/UserService';

export interface IServicesContainer {
    UserService: UserService;
}

export default {
    UserService: asClass(UserService).singleton(),
};
