import React from 'react';
import Plans from '../components/plans' ;
import styled from 'styled-components';


const PlanPage = () => {
    return (
        <Div>
            <H2 > Find a plan that rights for you </H2>
            <H3 > Every plan comes with a 30-day free trial.</H3>
            <div>
            < Plans />
            </div>
      
        </Div>
    )
}
export default PlanPage

const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
line-height: 1rem;
height: 100vh;

`;

const H2 = styled.h1`
 color: darkgrey;
 line-height:0.5rem;

`

const H3= styled.h3`
color: lightgrey;
line-height:0.5rem;
font-size: 0.8rem;

`