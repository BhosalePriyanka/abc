export const addItem = (state = [], action) => {
switch(action.type)
{
    case "Addition": 
    return [...state,action.payload]

    case "Delete":
    return state.filter((item) => item.id !== action.payload.id )
    
     
    case "Remove":
    return state = []

    case "Edit":

    return state.map((i)=> 
    { if(i.id===action.payload.id)
    { 
        return {id:i.id, item:action.payload.item} 
    }
    return i

})
    

    default: return state

}
} 

