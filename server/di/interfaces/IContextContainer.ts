import { IServicesContainer } from 'server/services';
import { IControllerContainer } from 'server/controllers';

export default interface IContextContainer
    extends IServicesContainer,
        IControllerContainer {
    config: any;
}
