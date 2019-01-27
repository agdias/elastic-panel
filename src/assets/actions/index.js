export const ADD_INSTANCE = "ADD_INSTANCE"

export const addInstanceAction = (name, ip, port) => (
  {
    type: ADD_INSTANCE,
    name,
    ip,
    port
  }
)




