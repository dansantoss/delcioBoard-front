import axios from 'axios';
import { GETDASH } from '../reducerTypes'

export const getAllDashAtributtes = () => {
    
    return dispatch => {
        axios
            .get(`http://localhost:3001/v1/api/read`)
            .then(response => {
                let payload = response.data;
                dispatch({ type: GETDASH, payload });
            });
    };
};
