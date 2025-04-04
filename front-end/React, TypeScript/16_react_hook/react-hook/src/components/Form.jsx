import { useForm } from "react-hook-form";

export default function Form() {
  //useForm이 여러 가지 값을 객체 형태로 반환하고 있다.
  const {
    register, //input의 변경 감지
    handleSubmit, //form의 submit 이벤트 발생 시 호출
    watch, //특정 필드의 값을 실시간 관찰
    formState: { errors },
  } = useForm();

  //단축 평가
  //   console.log("단축 평가 || 논리합", true || "hello");
  //   console.log("단축 평가 || 논리합", false || "hello");
  //   console.log("단축 평가 && 논리곱", true && "hi");
  //   console.log("단축 평가 && 논리곱", false && "hi");

  const userNameRegister = register("username");
  console.log(userNameRegister);
  console.log(`errors: ${errors}`);

  const onValid = (data) => {
    console.log("유효한 데이터: ", data);
  };
  const onInValid = (data) => {
    console.log("유효하지 않은 데이터", data);
    //폼 내부에 작성한 유효성 검사가 실패했을 때의 코드 작성
  };
  console.log("watch: ", watch());
  console.log("watch username: ", watch("username"));
  return (
    /* 
    handleSubmit(funcA[, funcB]): 인자로 함수를 두 개 받는다.
    새로고침 자동감지.
    */
    <form
      style={{ border: "2px dashed rosybrown" }}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          //유효성 조건을 지키지 못하면 errors 객체로 메세지가 전달된다.
          //errors.username.message
          required: "이름을 입력해 주세요.",
          minLength: {
            message: "이름은 최소 두 글자 이상으로 입력해 주세요.",
            value: 2, //이름 길이의 최소값. 길이가 value값에 미치지 못하면 저 메시지가 뜨는 것.
          },
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type="email"
        placeholder="email(gmail)"
        {...register("email", {
          required: "이메일을 입력해주세요.",
          validate: {
            useGmail: (value) => {
              //인자로 들어오는 value는 input.value
              return (
                value.includes("gmail.com") || `gmail로만 가입 가능합니다.`
              ); //앞의 연산이 true라면 true 리턴, 앞의 연산이 false라면 뒤의 string 리턴
            },
          },
        })}
      />
      <br />
      <input type="password" placeholder="password" {...register("password")} />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
