import { createGlobalStyle } from "styled-components/macro";
import Colors from "../constants/Colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        background: ${Colors.secondaryBackground};
        font-size: 112.5%;
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
    
    input, textarea, button {
        font-size: 1em;
    }
`;
