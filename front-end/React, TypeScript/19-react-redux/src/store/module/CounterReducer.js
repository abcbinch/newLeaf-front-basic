//1.src/store/module에 개별적인 전역 state를 선언한다.
//즉, reducer를 생성해야 한다.

const initialState = 1;

//이렇게도 쓸 수 있다.
//Box.jsx에 가서 dispatch끼리 비교해보자.
export const countPlus = () => {
  return { type: "count/INCREMENT" };
};

//index가 아니라 여기에 추가해야 하는 거였구나.
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/INCREMENT":
      return state + 1;
    case "count/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
