const loggerMiddleware=(store)=>(next)=>(action)=>{   //next helps to control the flow of dispatched actions which ultimate reaches the reducer
console.log("Current State",store.getState())
console.log("Action",action)
next(action)
console.log("New State: ",store.getState())
}
export default loggerMiddleware;