// data layer logic 
export const initialState ={
    basket:[],
    user: null,
};
export const getBasketTotal=(basket)=>
    basket?.reduce((amount, item)=> item.price+amount,0);
const reducer= (state, action )=>{
    console.log(action);
    // Check against cases
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            // return what the new data layer looks like 
            return {
                ...state,
                // include the hold state basket and the action's item
                // Return the state and overwrite the basket value with a new basket
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            // Make a new basket that is the old basket 
           let newBasket =[...state.basket];
        //    If 
           const index= state.basket.findIndex((basketItem)=>basketItem.id ===action.id);
           if (index>=0){
            //    Means we have found the item in the basket so cut it out from the idnex
            newBasket.splice(index,1);
           }
           else{
               console.warn(`Can't remove product (id: ${action.id} as its not in the basket`);
           }
           return {
               ...state, 
               basket:newBasket
            };
        default: 
            return state; 
    }
}

export default reducer; 
// This is a pattern 