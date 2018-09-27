export const SET_ENTRYS = 'SET_ENTRYS';
export const REQUEST_ENTRYS = 'REQUEST_ENTRYS';

export const setEntrys = items => ({
    type: SET_ENTRYS,
    payload: items,
});

export  const requestEntrys = () => ({
    type: REQUEST_ENTRYS,
});