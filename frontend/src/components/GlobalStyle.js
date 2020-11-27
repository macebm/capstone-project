import { createGlobalStyle } from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        background: ${Colors.secondaryBackground};
        font-size: ${FontSizes.small};
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
    
    input, textarea, button {
        font-size: ${FontSizes.medium};
    }
`;
