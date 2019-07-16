import styled from 'styled-components';
export const Loginwapper = styled.div`
    z-index:0;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:57px;
    background-color:#f1f1f1;
`;

export const Logincontent = styled.div`
    width:400px;
    margin:60px auto;
    padding-bottom:30px;
    background-color:#fff;
    border-radius:4px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    vertical-align:middle;
    
    
    .input_content{
    color: #c8c8c8;
    height:50px;
    border:1px solid  #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align:middle;
    font-size:inherit;
    width:300px;
    box-sizing:border-box;
    display:block;
    margin:auto;
    padding: 0 10px;
    border-radius:4px 4px 0 0;
    }
`;

export const Logincontentforthefirstsidearea = styled.div`
    width:300px;
    padding-top:30px;
    margin:30px auto;
    cursor: pointer;
    text-align:center;
`;

export const Label = styled.div`
    width:56px;
    height:42px;
    padding:0 10px;
    margin:10px;
    background-color:#fff;
    color:#ea6f5a;
    font-weight:700;
    font-size:large;
    border-bottom:2px solid #ea6f5a;
    box-sizing:border-box;
    display:inline;
    `;

export const Logincontentforthebottomofcenter = styled.div`
    width:300px;
    margin:30px auto;
    color:#969696;
    
    .problem {
        float:right;
    };
    
    .choice{
    height:13px;
    width:13px;
    };
`;

export const Bottom = styled.div`
    width:300px;
    margin 30px auto;
    box-sizing:border-box;
    background-color:#3194d0;
    text-align:center;
    color:white;
    cursor:pointer;
    font-size:18px;
    border-radius:30px;
    padding:10px 0 10px 0;
`;