import React from 'react';
import Plans from '../components/plans' ;
import styled from 'styled-components';
import {notification} from 'antd';
const openNotification = (title) => {
    notification.open({
      message: "Subscription Successful",
      description: `You have successfully subscribed to the ${title} plan. Enjoy your 30 days trial`,
    });
  };
const PlanPage = () => {
    
    return (
        <Div>

            <H2 > Find a plan that rights for you </H2>
            <H3 > Every plan comes with a 30-day free trial.</H3>
            <div>
            < Plans subscribe = {openNotification} />
            </div>
      
        </Div>
    )
}
export default PlanPage

const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:2rem;
justify-content:flex-start;
line-height: 1rem;
height: 100vh;
background-color:#f1f4f7;
width:100%;

`;

const H2 = styled.h1`
 color: #b2b7bf;
 line-height:0.5rem;

`

const H3= styled.h3`
color: lightgrey;
line-height:0.5rem;
font-size: 0.8rem;

`