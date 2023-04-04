// updating the state value using actiontype

export const actionType={   
    // action type is set User

    SET_USER:'SET_USER',

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
            default:
                return state;
    }
}

export default reducer;