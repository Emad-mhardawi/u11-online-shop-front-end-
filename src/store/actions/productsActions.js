import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';




export const fetchProducts = ()=>{
    return async(dispatch)=>{
        try{
            dispatch ({type: actionTypes.PRODUCT_LIST_REQUEST})
            const {data} = await axios.get('http://localhost:5000/products');

            dispatch({type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data})


        }catch(err){
            dispatch({
                type: actionTypes.PRODUCT_LIST_FAIL,
                payload: err.response && err.response.data.message ?
                err.response.data.message : err.message
            })
        }

    }
}