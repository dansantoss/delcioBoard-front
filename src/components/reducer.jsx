import { GETDASH } from '../reducerTypes';

const INITIAL_STATE = {
    dados: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GETDASH:
            return {...state, dados: action.payload };
    default:
        return state;        

    }
}
