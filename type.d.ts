type ValuesState = {};

type StoreAction = {
    type: string;
    payload: any;
    entityReducer?: string;
};

type DispatchType = (args: StoreAction) => StoreAction;

type Identity = {
    userId?: number;
    isGuest: boolean;
    firstName?: string;
    lastName?: string;
    role?: string;
};

interface IUserPostData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}
