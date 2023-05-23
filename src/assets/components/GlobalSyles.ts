import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background: #F7FAFD;
    display: flex;
    justify-content: center;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');
    font-style: normal;
}
`;
