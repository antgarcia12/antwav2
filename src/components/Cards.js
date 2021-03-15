import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Cards.css';
import Form from './Form';
import './Form.css';
import Ant from './media/images/myselfOcean.jpg'

const Example = (props) => {
    return (
        <div>
            <img className="antWater" src={Ant} alt="Anthony near the ocean"></img>
            <div>
                <Card className="col-md-4 card bg-dark border-light myCards">
                    {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                    <CardBody className="text-center text-color">
                        <CardTitle tag="h5">About Me</CardTitle>
                        <CardText>Hello and welcome! I'm glad you are taking this time to read a little about me. I started my journed into programming in September 2018. I have been through many obstacles trying to make my transition into the tech field. I orginally wanted to become a nurse but I felt like that wasn't the road I should be taking. I found myself at a crossroads: should I continue nursing just for a good paycheck with little to no passion about the field or should I got into a field where I am genuniely interested and passionate about what I am doing, and well that brings us to today. My work has gotten better and I plan to perfect my craft as I want to be making great, functional websites. That's always the goal.</CardText>
                    </CardBody>
                </Card>

                <Card className="col-md-4 card bg-dark border-light myCards">
                    {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                    <CardBody className="text-center text-color">
                        <CardTitle tag="h5">Contact</CardTitle>
                        <CardText>If you would like to work if you have a question, please feel free to fill out the form below and I will get back to you as soon I can. Happy coding!</CardText>
                    </CardBody>
                    <div className="myForm">
                        <Form />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Example;