//import {Style} from "styled-components";
 const Global = Style`*{
    margin:0;
    padding:0;
box-sizing:border-box;
font-family: 'Cinzel Decorative', cursive;
font-family: 'Dancing Script', cursive;
font-family: 'Lobster', cursive;
font-family: 'Niconne', cursive;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Rubik', sans-serif;
font-family: 'STIX Two Text', serif;
}
html{
    font-size:60%;
    overflow-x:hidden;
}
h1{
    font-size:5rem;
    font-weight:800;
    color:${({theme})=>theme.colors.heading};
}
h2{font-size:5rem;
    font-weight:800;
    color:${({theme})=>theme.colors.heading};
}
p{
    font-size:1rem;
    font-weight:400;
    color:${({theme})=>theme.colors.text};
    line-height:1.5;
    margin-top:1rem;
    opacity:.7;
}
a{
    text-decoration:none;
}
li{
    list-style:none;
}
`;

export default Global