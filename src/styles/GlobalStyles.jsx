import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;

}
    body{
    color:white;
    font-family: spotify-circular,spotify-circular-cyrillic,spotify-circular-arabic,spotify-circular-hebrew,Helvetica Neue,helvetica,arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic,sans-serif;
    text-transform: none;
       
    font-size: 16px;
    line-height: 1.5;
    }
    td,th,tr,thead,tbody,table{
        border: none;
    }

    a{
        text-decoration: none;
 cursor: pointer;
    }

    li,ul{
        list-style-type: none;
        cursor: pointer;
    }
    


`;
