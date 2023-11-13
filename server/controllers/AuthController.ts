import { USE, POST, GET, SSR, entity } from 'server/decorators';
import session from 'server/middleware/session';
import { actions, passportAuth } from 'server/middleware/pasport';
import validate from 'server/middleware/validate';
import BaseController from './BaseController';

@USE([session, ...actions])
export default class AuthController extends BaseController {
    guestIdentity: Identity = {
        userId: -1,
        isGuest: true,
        firstName: 'Guest',
    };

    @POST('api/login')
    @USE(
        validate({
            type: 'object',
            properties: {
                password: { type: 'string' },
                email: { type: 'string' },
            },
            required: ['password', 'email'],
            additionalProperties: false,
        }),
    )
    @USE(passportAuth)
    public async login({ query, user, session, fnMessage, fnError }) {
        return true;
    }

    @POST('api/register')
    public async register({
        query,
        user,
        session,
        fnMessage,
        fnError,
        logout,
    }) {
        return true;
    }

    @POST('api/logout')
    public async logout({ query, user, session, fnMessage, fnError, logout }) {
        return true;
    }

    @GET('api/getIdentity')
    public async getIdentity({ session, fnMessage, fnError }) {
        return true;
    }
}
