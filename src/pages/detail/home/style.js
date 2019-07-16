import styled from 'styled-components';

export const HomeWrapper = styled.div `
    width:960px;
    min-width:960px;
    margin: 0 auto;
    overflow:hidden;
    box-sizing:border-box;
`

export const HomeLeft = styled.div `
    margin: 30px 0 auto;
    float:left;
    width:625px;
   .banner-img {
    width:625px;
    height:270px;
   }
`

export const HomeRight = styled.div `
    width:240px;
    float:right;
`

export const TopicWrapper = styled.div `
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
`

export const TopicItem = styled.div `
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic {
        display:block;
        margin-right:10px;
        float:left
        width:32px;
        height:32px
    }
`

export const More = styled.a.attrs({
    href:'/',
}) `
    color:grey;
    font-size:14px;
    margin-left:18px;
    text-decoration: none;
    
    :visited{
    color:grey;
    text-decoration: none;
    }
    
    :link{
    color:grey;
    text-decoration: none;
    }
    
`

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .list-pic{
    width:150px;
    height:100px;
    float:right;
    }
`
export const ListInfo = styled.div`
   .title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin: -7px 0 4px;
    color:#333;
    }
    
    .desc{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    }
`

export const Loadmore = styled.div `
    width:625px;
    height:40px;
    margin:30px auto 60px;
    padding:10px 15px;
    text-align:center;
    font-size:15px;
    color:#fff;
    cursor:pointer;
    box-sizing:border-box;
    background-color:#a5a5a5;
    border-radius:20px;
`

export const RecommentsWrapper = styled.div `
    width:280px;
    height:320px;
    float:right;
    margin-top:30px;
    padding-bottom:4px;
    min-height:228px;
    box-sizing:border-box
    
    
    .rec-pic {
        width:280px;
        height:50px;
        min-height:50px;
        margin-bottom:6px;
        border-radius:4px;
    }
`

export const Morecode = styled.div`
    width:280px;
    height:82px;
    display:inline-block;
    text-align:center;
    border:1px solid #f0f0f0;
    border-radius:6px;
    background-color:#fff;
    padding:10px 22px;
    margin-bottom:30px;
    box-sizing:border-box;
    
    .code-pic{
    width:60px;
    height:60px;
    }
    
    .right {
    display:inline-block;
    vertical-align:middle;
    margin:0 5px;
    box-sizing:border-box;
    }
    .one {
    font-size:15px;
    color:#333;
    display:block;
    }
    
    .two { 
    margin-top:4px;
    font-size:13px;
    color:#999;
    display:block;
    
    }
`
export  const RecommentsItem = styled.div`
    background:url(${(props) => props.imgUrl});
    width:280px;
    height:50px;
    background-size:contain;
    margin-bottom:6px;
`
export const Writersize = styled.div`
    margin: 20px 0 20px;
    text-align:left;
    width:280px;
    height:295px;
    box-sizing:border-box;
    float:right;
`
export const Writerbanner = styled.div`
    margin-bottom:20px;
    padding-top:0;
    font-size:13px;
    box-sizing:border-box;
    .left{
    font-size:14px;
    color:#969696;
    float:left;
    display:inline-block;
    }
    
    .right{
    float:right;
    font-size:14px;
    color:#969696;
    cursor:pointer;
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

export const Writercontent = styled.div`
    width:280px;
    height:47px;
    font-size:13px;
    margin-top:30px;
    
    .writer-pic {
        width:48px;
        height:48px;
        float:left;
        border-radius:50%;
        border:1px solid #ddd;
    }
    
    .writer-name {
        padding-top:5px;
        margin-right:60px;
        font-size:14px;
        cursor:pointer;
    }
    
    .writer-content {
        margin-top:2px;
        font-size:12px;
        color:#969696;
        margin:0 0 10px;
        cursor:pointer;
    }
    
    .guanzhu {
        float:right;
        font-weight:400;
        line-height:normal;
        padding:0;
        font-size:13px;
        color:#42c02e;
        cursor:pointer;
    }
`

export const Writerall = styled.a`
    display:block;
    text-align:center;
    position: absolute;
    padding: 7px 7px 7px 12px;
    margin-top:30px;
    width: 280px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    
    :hover {
    color:#787878;
    text-decoration:none;
    cursor:pointer;
    }
}
`

export const Top = styled.div`
    position:fixed;
    right:25px;
    bottom:50px;
    cursor:pointer;
    width:50px;
    height:50px;
    text-align:center;
    color:#333;
    border:1px solid;
    box-sizing:border-box;
    padding-top:15px;
    font-size:20px;
    
`

export const DetailHead = styled.div`
    font-size:34px;
    font-weight:700;
    line-height:1.3;
    word-break:break-word;
    margin:40px auto;
    width:620px;
`

export const DetailContent = styled.div`
    font-size:16px;
    font-weight:400px;
    line-height:1.7;
    color:#2f2f2f;
    width:620px;
    margin:20px auto;
    
    .DetailPic{
    margin:auto;
    }
`

