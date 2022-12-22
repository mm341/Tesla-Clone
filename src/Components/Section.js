import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import arrow from '../imags/down-arrow.svg';
function Section({title, describtion, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
    <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{ describtion}</p>
      </ItemText>
      </Fade>
      <ButtonsBig>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
       {leftBtnText}
       </LeftButton>
        {rightBtnText&&<RightButton>{ rightBtnText}</RightButton>}
      </ButtonGroup>
      </Fade>
      <DownArrow src={arrow}/>
      
      </ButtonsBig>
      
    </Wrap>
  )
}

export default Section;
const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:center;
background-image:${props=>`url(${props.bgImage})`}

`

const ButtonsBig=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
`;

const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
}
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`

const RightButton=styled(LeftButton)`
background:white;
opacity:0.5;
color:black;
`

const DownArrow=styled.img`
height:40px;
animation-name:animateDown;
animation-duration:1.5s;
animation-iteration-count: infinite;
overflow-x:hidden;
`

