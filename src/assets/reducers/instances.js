

export const  instances = ( state = {}, action ) => {
    switch ( action.type ) {

        case "ADD_INSTANCE":
         const { name,ip, port } = action

          return {
              ...state,
              [name]: {
                  ip,
                  port
              }
     
          }

        default:
            return state
        
    }

}

