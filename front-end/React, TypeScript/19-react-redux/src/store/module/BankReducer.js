//BankPrac의 dispatch를 통해 받은 type을 처리하는 곳이다.
//dispatch의 type을 여기서 정의하는 것도 가능하다.

export const withdraw = (payload) => {
  return { type: "WITHDRAW", payload: payload };
};

export const BankReducer = (moneyState = 0, action) => {
  //state(여기서는 moneyState)는 내가 바꾸고 싶은 값
  //action은 dispatch를 통해 전달받은 type. 즉, 지시.

  if (action.type === "DEPOSIT") {
    return moneyState + action.payload;
  } else if (action.type === "WITHDRAW") {
    return moneyState - action.payload;
  } else {
    return moneyState;
  }
};
