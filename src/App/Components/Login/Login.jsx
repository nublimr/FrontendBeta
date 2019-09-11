import React, { Component } from 'react'
import './Login.css'
// import Img1 from '../Assets/BETA1.jpg'
// import Img2 from '../Assets/image2.jpg'
import Img3 from '../Assets/logobeta.png'
import {
    // Alert,
    // Badge,
    Button,
    // ButtonDropdown,
    // ButtonGroup,
    // ButtonToolbar,
    // Card,
    // CardBody,
    // CardFooter,
    // CardHeader,
    // CardTitle,
    // CardText,
    // Container,
    // NavLink,
    // NavItem,
    // Nav,
    Col,
    // Dropdown,
    // DropdownItem,
    // DropdownMenu,
    // DropdownToggle,
    // Progress,
    Row,
    // Table,
    Form,
    FormGroup,
    Label,
    Input,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    // FormText,
    // TabContent,
    // TabPane
  } from 'reactstrap';

export default class Login extends Component {
    render() {
        return (
                <Row className="row">
                    <Col md="4" className="p-5">
                        <div className="text-center">
                            <img src={Img3} alt="" width="100vw" className="mb-4"/>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input>Username</Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password">Password</Input>
                            </FormGroup>
                            <div className="text-center">
                                <Button className="btn btn-outline-brand w-100 text-center mb-4">Log In</Button>
                            </div>
                            <a href="/" className="forgot">Forgot Password</a>
                        </Form>
                    </Col>
                    <Col>
                        <div className="crossfade">
                            <figure></figure>
                            <figure></figure>
                            <figure></figure>
                            <figure></figure>
                            <figure></figure>
                        </div>
                    </Col>
                </Row>
        )
    }
}
