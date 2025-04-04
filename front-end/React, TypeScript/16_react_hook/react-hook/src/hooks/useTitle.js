import { useEffect } from "react";

//기존의 훅을 사용해서 커스텀 훅을 만든다.
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log(prevTitle);
    document.title = title; //실제로 title이 변경된다.

    //unmount 될 때
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
