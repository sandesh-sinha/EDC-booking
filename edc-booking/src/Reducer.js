export const initialState = {
    user : null,
    admin : false
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER' :
            return {
                ...state, user: action.user
            }
        case 'SET_ADMIN' : 
            return {
                ...state, admin : true
            }
        case 'SET_ADMIN_FALSE'  :
            return {
                ...state, admin : false
            }
        default :
            return state;
    }
};
export default reducer;