import React, { useState, useEffect } from "react";
import { Typography, Button, notification } from "antd";
import styled from 'styled-components';
import response from "../data";
const { Paragraph } = Typography;

const Plans = () => {
  const [pageDetails, setPageDetails] = useState([]);
  const [subscribe, setSubscribe] = useState((false , ''));
  useEffect(() => {
    setPageDetails(response);
  }, []);
  const clicked = async (title) => {
    setSubscribe((true , title ) );
    subscribe && openNotification(title);
  };
  const openNotification = (title) => {
    notification.open({
      message: "Subscription Successful",
      description: `You have successfully subscribed to the ${title} plan. Enjoy your 30 days trial`,
    });
  };
  return (
    <Container>
      {pageDetails &&
        pageDetails.map((singlePlan) => {
          return (
            <Card>
            <h3 style={{color: singlePlan.color}}> {singlePlan.title}</h3>
              <p>${singlePlan.price}</p>
              <div>
                {singlePlan.inclusions.map((service) => {
                  return <p> {service}</p>;
                })}
              </div>
              <div>
                <button type="primary" onClick={clicked}>
                  Subscribe
                </button>
              </div>
            </Card>
          );
        })}
       {subscribe[0] && openNotification(subscribe[1])}
    </Container>
  );
};

export default Plans;

const Container = styled.div`
display:flex;
height: 50vh;
margin-top: 3rem;
justify-content:center;

`;
const Card = styled.div`
width: 30%;
height: 100%;

`
const H3 = styled.h3`
 
`