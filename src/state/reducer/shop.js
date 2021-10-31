const initialState = [];
let dublicate = [];
const shop = (state = initialState, action) => {
     switch(action.type) {
        case "ADD_SHOP":
            dublicate = [ ...state, action.data];
            return [ ...state, action.data];
        case "DELETE_SHOP":
            let a = state.filter((item, index) => index !== action.data);
            dublicate = a;
            return a;
        case "AREA":
            let b = state.filter(item => item.area === action.data);
            return b;
        case "CATEGORY":
            let c = state.filter(item => item.category === action.data);
            return c;
        case "SHOW_SHOPS":
            return dublicate;
        default:
            return state;
     }
};
export default shop;