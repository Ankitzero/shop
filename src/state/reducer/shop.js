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
            let b1 = state.filter(item => item.area === action.data);
            let b2 = state.filter(item => item.area !== action.data);
            if(b1.length > 0) {                
                return [...b1, ...b2];
            }
            return state;
        case "CATEGORY":
            let c1 = state.filter(item => item.category === action.data);
            let c2 = state.filter(item => item.category !== action.data);
            if(c1.length > 0) {                
                return [...c1, ...c2];
            }
            return state;
        case "SHOW_SHOPS":
            return dublicate;
        default:
            return state;
     }
};
export default shop;
