import jwtFetch from "./jwt";

export const RECEIVE_LISTS = "lists/RECEIVE_LISTS"
export const RECEIVE_LIST = "lists/RECEIVE_LIST"
export const REMOVE_LIST = "lists/REMOVE_LIST"

const receiveLists = lists =>({
    type: RECEIVE_LISTS,
    lists 
})

const receiveList = list =>({
    type:RECEIVE_LIST,
    list
})

const removeList = listId =>({
    type:REMOVE_LIST,
    listId
})

export const getLists = state =>{
    if (state.lists){
        return Object.values(state.lists)
    }else{
        return []
    }
}
//list id is list._id
export const getList = listId => state =>{
    if (state.lists){
        return state.lists[listId]
    }else{
        return null 
    }
}

export const fetchUserLists = (userId) => async(dispatch)=>{
    const response = await jwtFetch(`/api/lists/all/${userId}`)
    if(response.ok){
        const lists = await response.json()
        dispatch(receiveLists(lists))
    }

}

export const fetchList = (listId) => async(dispatch)=>{
    const response = await jwtFetch(`/api/lists/${listId}`)
    if(response.ok){
        const list = await response.json()
        dispatch(receiveList(list))
    }
}

export const createList = list =>async(dispatch)=>{
    const {hairColor,clothingAccessory,gender,background,artStyle,websiteStyle} = list
    const response = await jwtFetch(`/api/lists/`,{
        method: 'POST',
        body: JSON.stringify(
            {
                hairColor,
                clothingAccessory,
                gender,
                background,
                artStyle,
                websiteStyle
            }
        )
    })
    if (response.ok){
        const list = await response.json()
        dispatch(receiveList(list))
    }
}

export const updateList = list =>async(dispatch)=>{
    const {hairColor,clothingAccessory,gender,background,artStyle,websiteStyle} = list
    const response = await jwtFetch(`/api/lists/${list.id}`,{
        method: 'PATCH',
        body: JSON.stringify(
            {
                hairColor,
                clothingAccessory,
                gender,
                background,
                artStyle,
                websiteStyle
            }
        )
    })
    if (response.ok){
        const list = await response.json()
        dispatch(receiveList(list))
    }
}

export const deleteList = listId => async(dispatch)=>{
    const response = await jwtFetch(`api/lists/${listId}`,{
        method: 'DELETE'
    })
    if(response.ok){
        dispatch(removeList(listId))
    }
}

const listsReducer = (state={},action)=>{
    let nextState = {...state}
    switch(action.type){
        case RECEIVE_LISTS:
            // return{...action.lists}
            action.lists.lists.forEach((list)=>{
                nextState[list._id] = list 
            })
            return nextState 

        case RECEIVE_LIST:
            return{...state,[action.list._id]:action.list}
        case REMOVE_LIST: 
            delete nextState[action.listId]
            return nextState 
        default:
            return state 
    }
}

export default listsReducer 
