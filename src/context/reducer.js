// updating the state value using actiontype

export const actionType={   
    // action type is set User

    SET_USER:'SET_USER',
    SET_FOOD_ITEMS:'SET_FOOD_ITEMS',
    SET_CART_SHOW:"SET_CART_SHOW",
    SET_CARTITEMS:'SET_CARTITEMS',

}


// this wil take state parameter and action you want to perform
const reducer=(state,action)=>{
    // console.log(action)
    switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,   //using spread operator we are keeping the state value as it is
                    user:action.user //updating userinformation to the state

            }

            case actionType.SET_FOOD_ITEMS:
                return {
                    ...state,   
                        foodItems:action.foodItems 
    
                }


                case actionType.SET_CART_SHOW:
                    return {
                        ...state,   
                            cartShow:action.cartShow 
        
                    }

                    case actionType.SET_CARTITEMS:
                        return {
                            ...state,   
                                cartItems:action.cartItems, 
            
                        }
            default:
                return state;
    }
}

export default reducer;