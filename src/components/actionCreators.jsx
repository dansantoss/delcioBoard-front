import axios from 'axios';
import { GETDASH } from '../reducerTypes'

export const getAllDashAtributtes = () => {
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    return dispatch => {
        axios
            .get(`http://localhost:3001/v1/api/read`, headers)
            .then(response => {
                let payload = response.data;
                dispatch({ type: GETDASH, payload });
            });
    };
};
