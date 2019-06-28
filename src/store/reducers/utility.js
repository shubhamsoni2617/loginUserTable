export  default (oldObject, updatedProperties)=>{
    return {
        ...oldObject, ...updatedProperties
    }
}