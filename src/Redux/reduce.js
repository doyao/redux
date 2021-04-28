import {DELETE,UPDATE,ADD} from './constants'
const defaultState = {
    list:[
        {key:0,name:'tom',age:18},
        {key:1,name:'nae',age:22},
        {key:2,name:'sum',age:88}
    ],
    loading:false,
};
  
const reduce=(state = defaultState, action) =>{
  if(action.type===UPDATE){
    const newState=JSON.parse(JSON.stringify(state));
    newState.user.push(action.value);
    newState.isLogin=true;
    return newState;
  }
  if(action.type===ADD){
      const newState=JSON.parse(JSON.stringify(state));
      newState.list.push(action.value)
      return newState;
  }
  if(action.type===DELETE){
      const newState=JSON.parse(JSON.stringify(state));
      newState.list.splice(action.value,1)
      return newState;
  }
  return state;
}
export default reduce