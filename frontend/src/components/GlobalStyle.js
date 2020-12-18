import { createGlobalStyle } from "styled-components/macro";
import FontSizes from "../constants/FontSizes";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        box-sizing: border-box;
    }
    body{

        background: url("https://cdn.pixabay.com/photo/2019/05/06/19/13/green-4183977_1280.jpg");
        font-size: ${FontSizes.small};
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
    
    input, textarea, button {
        font-size: ${FontSizes.medium};
    }
`;
