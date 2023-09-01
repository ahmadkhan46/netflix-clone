export const initialState = {
    basket: [],
    user:null
  };
  
const reducer=(state,action)=>{
  switch(action.type){
  case "SET_USER":
    return{
      ...state,
      user:action.user
    }
  case "LOGOUT":(state)=>{
    state.user=null
  }
    default:
      return state;
  }
}

export default reducer;