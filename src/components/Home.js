import React from 'react'
import styled from "styled-components"

import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Model X"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Solar Panels"
                desc="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Solar Roof"
                desc="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Accessories"
                desc=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                rightBtnText=""
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`