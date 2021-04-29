import {DELETE,UPDATE,ADD} from './constants'
const defaultState = {
    list:[
        {key:1,name:'tom',age:18},
        {key:2,name:'nae',age:22},
        {key:3,name:'sum',age:88}
    ],
};
  
const reduce=(state = defaultState, action) =>{
  if(action.type===UPDATE){
    const newState=JSON.parse(JSON.stringify(state));
    newState.list=newState.list.filter(item=> item.key !==action.value.key);
    newState.list.push(action.value);
    return newState;
  }
  if(action.type===ADD){
      const newState=JSON.parse(JSON.stringify(state));
      newState.list.push(action.value)
      return newState;
  }
  if(action.type===DELETE){
      const newState=JSON.parse(JSON.stringify(state));
      newState.list=newState.list.filter(item=> item.key !==action.value);
      return newState;
  }
  return state;
}
export default reduce