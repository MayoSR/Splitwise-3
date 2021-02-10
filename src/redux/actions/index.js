export function bookmark(id){
    return {type:"BOOKMARK_GROUP",id:id}
}
export function removeBookmark(id){
    return {type:"REMOVE_BOOKMARK_GROUP",id:id}
}
export function createGroup(groupName){
    return {type:"CREATE_GROUP",groupName:groupName}
}