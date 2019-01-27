
// const state = {
//     instances: []
// }


const health = (state={}, action) => {
 switch (action.type) {
     case 'FETCH_HEALTH_DATA' :
       return {}
     default: return state
 }
}

export default health

