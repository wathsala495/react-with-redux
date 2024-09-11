const initialState={
    amount:100000
}
const reducer=( state=initialState,action)=>{
    const newState ={...state}
    switch(action.type){
        case 'DEPOSIT':
            newState.amount+=action.value;
            break;
        case 'WITHDRAWAL':
            newState.amount-=action.value;
            break;
        default:
            // newState.amount=state.amount;
            break;
    }
    return newState;

}
export default reducer;