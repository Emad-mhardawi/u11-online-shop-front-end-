import * as actionTypes from '../actions/actionTypes';

const initialState = {products: []};

const productListReducer =(state = initialState, action)=>{
switch(action.type){
    case actionTypes.PRODUCT_LIST_REQUEST:
        return {loading: true, products:[]}
    
    case actionTypes.PRODUCT_LIST_SUCCESS:
        return{ loading: false, products:action.payload}

    case actionTypes.PRODUCT_LIST_FAIL:
        return { ...state, loading: false, error: action.payload}
    
    default:
        return state;
}
}


export default productListReducer