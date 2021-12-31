const redux = require('redux')
// 1.create a store --> need reducer--> reducer needs {initialstate}not mandatory and action
// 2.dispatch an action --> need actions
// 3.obseerve for state changes
// const initialState ={
//     hi:[
//         {content:"im",title:"novel"},
//         {content:"i2m",title:"book"},
//     ]
// }
const reducer=(state,action)=>{
    switch(action.type)
    {
        case'RED':
        {
   return ("hi im reducer with no initial state");
        }
        case 'BLACK':
            {
            return("im action 2");
        }
default:

}
}
const store=redux.createStore(reducer);
store.subscribe(()=> console.log(store.getState()));
const action={type:'RED'}
const action2={type:'BLACK'}
store.dispatch(action2);

