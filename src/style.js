import { createGlobalStyle } from 'styled-components';


export const GlobalStyled= createGlobalStyle`
body {

    body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;}
    body{background:#fff;color:#333;font-size:12px; margin-top:5px;font-family:"SimSun","宋体","Arial Narrow";}

    ul,ol{list-style-type:none;}
    select,input,img,select{vertical-align:middle;}

    a{text-decoration:none;}
    a:link{color:#009;}
    a:visited{color:#800080;}
    a:hover,a:active,a:focus{color:#c00;text-decoration:underline;}
}
    `