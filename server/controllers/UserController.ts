import BaseController from './BaseController';
import { GET, POST, SSR, USE } from 'server/decorators';
import validate, { validateProps } from 'server/middleware/validate';
import entity from 'server/decorators/entity';

@entity('UserEntity')
export default class UserController extends BaseController {
    /**
     * findUserInfo
     */
    @USE(
        validate({
            type: 'object',
            properties: {
                id: validateProps.queryId,
            },
            required: ['id'],
            additionalProperties: false,
        }),
    )
    @GET('api/users/:id')
    @SSR('users/:id')
    public findUserInfo({ query, fnMessage, fnError }) {
        return true;
    }
}
