import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import back1 from '../imags/model-s.jpg'
import back2 from '../imags/model-y.jpg'
import back3 from '../imags/model-3.jpg'
import back4 from '../imags/model-x.jpg'
import back5 from '../imags/solar-panel.jpg'
import back6 from '../imags/solar-roof.jpg'
import back7 from '../imags/accessories.jpg'


function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back1}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />
       <Section
      title="Model Y"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back2}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />
       <Section
      title="Model 3"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back3}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />
       <Section
      title="Model X"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back4}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />
       <Section
      title="Lowest Cost Solar Panel in America"
      describtion="Money-back guarantee"
      backgroundImg={back5}
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
       <Section
      title="Solar for New Roofs"
      describtion="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImg={back6}
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
       <Section
      title="Accessories"
      describtion=""
      backgroundImg={back7}
      leftBtnText="shop now"
      rightBtnText=""
      />
    </Container>
  )
}

export default Home;
const Container=styled.div`
height:100vh;
`
