import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import response from "../data";


const Plans = (props) => {
  const [pageDetails, setPageDetails] = useState([]);
  const [subscribe, setSubscribe] = useState((false , ''));
  useEffect(() => {
    setPageDetails(response);
  }, []);
  const clicked = async (title) => {
    setSubscribe((true , title ) );
    subscribe && props.subscribe(title);
  };

  return (
    <Container>
      {pageDetails &&
        pageDetails.map((singlePlan) => {
          return (
            <Card>
            <H3 style={{color: singlePlan.color}}> {singlePlan.title}</H3>
            <Price><span>$ {singlePlan.price}</span> month</Price>
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
    </Container>
  );
};

export default Plans;

const Container = styled.div`
display:flex;
height: 50vh;
width: 80vw;
margin-top: 5rem;
justify-content:space-between;

`;
const Card = styled.div`
width: 30%;
height: 100%;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius:0.5rem;
`
const H3 = styled.h3`
line-height:5rem;
width:90%;
margin: 0 5%;
border-bottom:1px solid lightgrey;
 
`
const Price = styled.p`
line-height:3rem;
width:90%;
margin: 0 5%;
border-bottom:1px solid lightgrey;
padding: 1rem 0;
span{
    font-size:2rem;
    font-weight:bold;
    color:  #b2b7bf;
}
`;