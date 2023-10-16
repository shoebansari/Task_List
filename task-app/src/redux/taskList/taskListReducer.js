const initialData = {
    list: [],
  };
  
  const taskReducer = (state = initialData, action) => {
    switch (action.type) {
      case "ADD_LIST":
        const { data } = action;
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: data.id,
              title: data.title,
              desc: data.desc,
              dueDate: data.dueDate,
              isChecked: false,
            },
          ],
        };
      case "DELETE_LIST":
        const newList = state.list.filter((list) => list.id !== action.id);
        return {
          ...state,
          list: newList,
        };
  
      case "UPDATE_LIST":
        const { selectedId, title, desc, dueDate, isChecked } = action.payload;
        const result = state.list.map((item) =>
          item.id === selectedId ? { id: selectedId, title, desc, dueDate, isChecked } : item
        );
        return {
          ...state,
          list: result,
        };
      
      case "ON_CHECKED":
        const checkedList = state.list.map((item) =>
          item.id === action.id ? { ...item, isChecked:!item.isChecked } : item
        );  
        return {
          ...state,
          list: checkedList,
        };
        case "ON_SHORT_UP":
          const sortUpList = state.list.sort((a,b)=>a.id-b.id)
          console.log('sortUpList-->', sortUpList)
          return {
            ...state,
            list: sortUpList,
          };
        case "ON_SHORT_DOWN":
          const sortDownList = state.list.sort((a,b)=>b.id-a.id) 
          console.log('sortDownList-->', sortDownList)
          return {
             ...state,
            list: sortDownList,
          };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  