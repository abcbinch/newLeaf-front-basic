import { useForm } from "react-hook-form";

export default function UserInfo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const username = register("username");
  const userage = register("userage");

  const userInfo = (data) =>
    console.log(`이름: ${data.username}, 나이: ${data.userage}`);
  const showAlert = () => console.log("정보를 올바르게 입력해주세요.");

  return (
    <form onSubmit={handleSubmit(userInfo, showAlert)}>
      이름:{" "}
      <input
        type="text"
        {...register("username", {
          required: "이름을 입력해 주세요.",
          message: "이름은 필수항목입니다.",
        })}
      />
      {errors.username?.message}
      <br />
      나이:{" "}
      <input
        type="number"
        {...register("userage", {
          required: "나이를 입력해 주세요.",
          validate: {
            notZero: (value) => {
              return Number(value) >= 0 || "0 이상의 숫자만 입력 가능합니다.";
            },
          },
        })}
      />
      {errors.userage?.message}
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
