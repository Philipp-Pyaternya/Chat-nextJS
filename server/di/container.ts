import services from 'server/services';
import controllers from 'server/controllers';

import * as awilix from 'awilix';

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
    ...services,
    ...controllers,
});

export default container;
