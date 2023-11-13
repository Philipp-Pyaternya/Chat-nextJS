import { asClass } from 'awilix';

import Identity from './Identity';

export interface IEntityContainer {
    Identity: Identity;
}

export default { Identity: asClass(Identity).singleton() };
