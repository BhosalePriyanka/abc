export const add = (item)=>{
    return{
    type:"Addition",
    payload:{
        item:item,
        id:Date.now()
    }         
    }
}

export const del = (id) => {
    return{
        type:"Delete",
        payload:{
            id:id
        }
    }
}

export const remove = (id) =>{
    return{
        type:"Remove",
        payload:{id:id}
    }
}
export const editItem = (id,item)=> {
    return{
        type:"Edit",
        payload: {id:id, item:item}
    }
}