import React from 'react';
import {Typography } from 'antd';
import Plans from '../components/plan' ;

const {Text} = Typography

const PlanPage = () => {
    return (
        <div>
            <Text>Find a plan that rights for you</Text>
            <Text type='secondary'>Everyplan comes with a 30-day free trial.</Text>
            < Plans />
        </div>
    )
}
export default PlanPage