import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        Leftbtn= 'Custom Button'
        Rightbtn= 'Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        Leftbtn= 'Custom Button'
        Rightbtn= 'Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        Leftbtn= 'Custom Button'
        Rightbtn= 'Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        Leftbtn= 'Custom Button'
        Rightbtn= 'Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        Leftbtn= 'Order now'
        Rightbtn= 'Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        Leftbtn= 'Order now'
        Rightbtn= 'Learn more'
      />
      <Section
        title='Accessoires'
        description=''
        backgroundImg='accessories.jpg'
        Leftbtn= 'Shop now'
        Rightbtn= ''
      />
      

    </Container>
  )
}
 
export default Home

const Container = styled.div`
  height = 100vh;
`