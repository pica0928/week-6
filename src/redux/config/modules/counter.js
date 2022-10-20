
const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  console.log('payload',payload)
    return { type: ADD_TODO, payload }; // payload가 받는 값이 id랑 title
    };
// 초기 상태값
const initialState = {
    list: [
    {
    id: 1,
    title: "공부를 열심히 하자",
    },
    {
    id: 2,
    title: "진도를 빨리 따라잡자",
    },
    ],
    };

  // 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      console.log(action)  
      console.log(state)
      return {
          list: [...state.list, action.payload]
        };
     
      default:
        return state;
    }
  };
  


  
  
  export default counter;