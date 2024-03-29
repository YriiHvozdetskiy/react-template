export const BASE_URL = process.env.REACT_APP_URL;
export const SORT_TESTS = (flag, page) => `${BASE_URL}tests/${flag ? `?ordering=${flag}&page=${page}` : ''}`;
export const UPDATE_QUESTIONS = (id) => `${BASE_URL}tests/question/${id}/`;
export const REGISTER = `${BASE_URL}auth/register/`;
export const LOGIN = `${BASE_URL}auth/login/`;
export const LOGOUT = `${BASE_URL}auth/logout/`;
export const USER = `${BASE_URL}auth/users/me/`;
export const USER_TEST = (userID, testID) => `${BASE_URL}tests/answer/by-user/${userID}/${testID}`;
export const COMPANY = `${BASE_URL}organizations/`;
export const UPDATE_COMPANY = (slug) => `${BASE_URL}organizations/${slug}/`;
export const SORT_COMPANY = (flag, page) => `${BASE_URL}organizations/${flag ? `?ordering=${flag}&page=${page}` : ''}`;
export const EVALUATE = (id) => `${BASE_URL}${id ? `tests/answer/evaluate/${id}/` : 'tests/answer/evaluate/'}`;
export const COMMENTS = (id) => `${BASE_URL}${id ? `tests/comments/${id}/` : 'tests/comments/'}`;
