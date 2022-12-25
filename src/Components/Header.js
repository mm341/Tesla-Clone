import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../imags/logo.svg'
function Header() {
  const[burgerStatus,setBurgerStatus]=useState(false);
  return (
    <Container>
   <Link to='/Tesla-Clone'>
    <img src={logoImg} alt=""/>
   </Link>
   <Menu>
   <Link to='/ModelS'>Model S</Link>
   <Link to='/Model3'>Model 3</Link>
   <Link to='/ModelX'>Model X</Link>
   <Link to='/ModelY'>Model Y</Link>
   </Menu>
   <RightMenu>
   <Link to='/Contact'>Contact</Link>
    
    <Link to='/login'>Tesla Acount</Link>
    <CustomMenu onClick={()=>setBurgerStatus(true)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></CustomMenu>
   </RightMenu>
   <BurgerNav show={burgerStatus}>
    <CloseWrapper><CustomClose onClick={()=>setBurgerStatus(false)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></CustomClose></CloseWrapper>
    <li><Link to='/ModelS'>Model S</Link></li>
    <li> <Link to='/Model3'>Model 3</Link></li>
     <li><Link to='/ModelX'>Model X</Link></li>
      <li><Link to='/ModelY'>Model Y</Link></li>
    <li><a href='#'>Existing Inventory</a></li>
    <li><a href='#'>Used Inventory</a></li>
    <li><a href='#'>Trade-in Inventory</a></li>
    <li><a href='#'>Cybertruck Inventory</a></li>
    <li><a href='#'>Roadasear Inventory</a></li>
   </BurgerNav>
    </Container>
  )
}

export default Header
 const Container=styled.div`
 min-height:60px;
 position:fixed;
 top:0;
 left:0;
 right:0;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 20px;
 z-index:1;
 `


 const Menu=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width:870px){
    display:none;
  }
 `

const RightMenu=styled.div`
display:flex;
align-items:center;
 a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap: nowrap;
 }
`
const CustomMenu=styled.div`
cursor:pointer;
@media(min-width:870.5px){
  display:none;
}
`;
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
zindex:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show? 'translateX(0)':'translateX(100%)'};
transition: transform 0.3s; 
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);

  a{
    font-weight:600;
  }
 }
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`
const CustomClose=styled.div`
cursor:pointer;
`