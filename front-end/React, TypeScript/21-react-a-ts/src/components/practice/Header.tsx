import { SetStateAction } from "react";
import styled from "styled-components";

const MHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

interface TextProps {
  isCorrect: boolean;
}

const Div = styled.div<TextProps>`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: pink;
  }

  color: ${(props: TextProps) => (props.isCorrect ? "red" : "black")};
`;

interface Props {
  mapo: boolean;
  gangdong: boolean;
  dobong: boolean;
  setMapo: (isShow: boolean) => void;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
}

export default function Header(props: Props) {
  const { mapo, gangdong, dobong, setDobong, setGangdong, setMapo } = props;

  const setState = (func: (isShow: boolean) => void): void => {
    setDobong(false);
    setGangdong(false);
    setMapo(false);
    func(true);
  };
  return (
    <MHeader>
      <Div onClick={() => setState(setGangdong)} isCorrect={gangdong}>
        강동구
      </Div>
      <Div onClick={() => setState(setMapo)} isCorrect={mapo}>
        마포구
      </Div>
      <Div onClick={() => setState(setDobong)} isCorrect={dobong}>
        도봉구
      </Div>
    </MHeader>
  );
}
