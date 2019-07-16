import styled from 'styled-components';
import HeadNavPic from './statics/head.png';


export const HeadWrapper = styled.div`
    z-index:1;
    height:56px;
    border-bottom:1px solid #f0f0f0; 
    position:relative;
    top:0;
    border-top:0;
`

export const HeadNav = styled.div`
    width:100px;
    height:56px;
    float:left;
    display:inline-block;
    top:0;
    left:0;
    background:url(${HeadNavPic});
    background-size:contain;
`

export const Nav = styled.div `
    position:relative;
    min-width: 768px;
    max-width: 1440px;
    width:1440px;
    height:100%;
    margin: 0 auto;
`

export const NavMiddle = styled.div`
    width:945px;
    margin:0 auto;
    height:100%;
    display:block;
    
`

export const NavItem = styled.a`
     font-size:17px;
     line-height:56px;
     display:inline-block;
     padding:0 15px;
     cursor:point;
     
     &.active {
     color:#ea6f5a;
     }
     &.left {
     float:left;
     }
     &.right {
     float:right;
     color:#969696;
     }  
     
`

export const SearchWapper = styled.div`
    position:relative
    float:left;
    .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:50%;
    text-align:center;
    
    &.focused {
    background:#777;
    color:#fff;
    }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    height:38px;
    width:200px;
    border-radius:19px;
    padding:0 30px 0 20px;
    outline:0
    border:0
    margin-top:9px;
    margin-left:20px;
    font-size:14px;
    cursor: text;
    box-sizing:border-box;
    background:#eee;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focused{
    width:300px;
    }
     &.slide-enter {
        width:200px;
         transition:all .5s ease-out;
    }
    &.slide-enter-active{
        width:300px;   
    }
    &.slide-exit {
        width:200px;
        transition:all .5s ease-out;
    }
    &.slide-exit-active {
         width:200px;
    }
`

export const SearchTips = styled.div `
    position:absolute;
    top:56px;
    left:20px;
    width:210px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background-color: #fff;
    padding: 20px 20px 10px;
    visibility:hidden;
    
    ::before{
        content:'';
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        top: -7px;
        z-index: -1;
        position:absolute;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
    }
    
    ::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
    
    &.visiable {
    visibility:visible;
    }
`

export const SearchTipsHeader = styled.div`
    width:210px;
    height:20px;
     
    
`

export const SearchTipsHeaderTips = styled.div`
    width:56px;
    line-height:20px;
    font-size:14px;
    color:#777;
    &.left{
    float:left;
    }
    
    &.right{
    float:right;
    width:60px;
    }
    
    &.right:hover {
    cursor:pointer;
    color:#333;
    }
    
    .spin {
    font-size:12px;
    margin-right:2px;
    float:left;
    display : block;
    transition : all .2s ease-in;
    transform-origin : center center;
    }
   
`
export const SeatchBottom = styled.div`
    width:210px;
    margin-top:10px;
    float:left;
`

export const SeatchTipsContents = styled.a`
    display:inline-block;
    line-height:20px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right:10px;
    margin-top:5px;
    :hover{
    color:#333;
    cursor:pointer;
     text-decoration:none;
    }
`

export const Addition = styled.div`
    float:right;
    height:56px;
    position:absolute;
    top:0;
    right:0;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border:1px solid #ea6f5a;
    box-sizing:border-box;
    font-size: 15px;
    
    &.zhuce{
    color: #ea6f5a;
    
    }
    &.write{
    color:white;
    background-color:#ea6f5a;
    cursor:pointer;
    
    }
    
`