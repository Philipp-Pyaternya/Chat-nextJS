import { Action } from 'redux';

export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}

export function pageFetching(pageName, page, isFetching, force = false) {
    return action(PAGE_FETCHING, { pageName, page, isFetching, force });
}

export function pageSetFilter(pageName, filter, sort) {
    return action(PAGE_SET_FILTER, { pageName, filter, sort });
}

export function pageClear(pageName) {
    return action(PAGE_CLEAR, { pageName });
}

export const PAGE_FETCHING = 'PAGE_FETCHING';
export const PAGE_SET_FILTER = 'PAGE_SET_FILTER';
export const PAGE_CLEAR = 'PAGE_CLEAR';

export const ERROR = 'ERROR';

export const SELECT_PAGE = 'SELECT_PAGE';

export const SELECT_USER = 'SELECT_USER';

export const USER_REQUESTED = 'USER_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const GET = 'GET';
export const DELETE = 'DELETE';

export const UPDATE_VALUE = 'UPDATE_VALUE';

export const UPDATE_IDENTITY = 'UPDATE_IDENTITY';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
