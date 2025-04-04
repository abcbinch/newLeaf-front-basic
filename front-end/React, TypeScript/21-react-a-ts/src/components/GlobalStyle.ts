import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Gyeonggi_Batang_Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-3@1.0/Batang_Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gyeonggi_Batang_Regular';
}

html{
    font-size: 20px;
}

a{
    text-decoration: none;
}

ul, ol{
    list-style: none;
}
`;
