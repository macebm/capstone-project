import { createGlobalStyle } from "styled-components/macro";
import FontSizes from "../constants/FontSizes";
import ImgSrc from "../img/Background.jpg";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        box-sizing: border-box;
    }
    body{

        background: url(${ImgSrc});
        font-size: ${FontSizes.small};
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
    
    input, textarea, button {
        font-size: ${FontSizes.medium};
    }
`;
