export const addList=(data)=>{
    return {
      type:"ADD_LIST",
      data
    }
  }
  
  export const deleteList=(id)=>{
    return {
      type:"DELETE_LIST",
      id
    }
  }
  
  export const updateList=(updata)=>{
    return {
      type:"UPDATE_LIST",
      payload:updata
    }
  }

  export const onChecked=(id)=>{
    return {
      type:"ON_CHECKED",
      id
    }
  }

  export const onSortUp=()=>{
    return {
      type:"ON_SHORT_UP",
    }
  }

  
  export const onSortDown=()=>{
    return {
      type:"ON_SHORT_DOWN",
    }
  }