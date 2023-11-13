import BaseContext from 'server/di/BaseContext';

export default class UserService extends BaseContext {
    /**
     * findUserInfo
     */
    public findUserInfo(userId: string) {
        return true;
    }

    /**
     * findUserWithEmailAndPassword
     */
    public findUserWithEmailAndPassword(email: string, password: string) {
        return true;
    }

    /**
     * addUser
     */
    public addUser(data: IUserPostData) {
        return true;
    }
}
