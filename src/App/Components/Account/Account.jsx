import React, { Component } from 'react'
import {
    // Alert,
    // Badge,
    Button,
    // ButtonDropdown,
    // ButtonGroup,
    // ButtonToolbar,
    Card,
    CardBody,
    // CardFooter,
    // CardHeader,
    CardTitle,
    // CardText,
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

export default class Account extends Component {
    render() {
        return (
            <div className="main">
                <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                    <div className="kt-subheader__main">
                        <h3 className="kt-subheader__title"><i className="fas fa-user mr-2"></i>Account Setting</h3>
                        <span className="kt-subheader__separator kt-subheader__separator--v" />
                        <div className="kt-input-icon kt-input-icon--right kt-subheader__search kt-hidden">
                            <input type="text" className="form-control" placeholder="Search order..." id="generalSearch" />
                            <span className="kt-input-icon__icon kt-input-icon__icon--right">
                                <span><i className="flaticon2-search-1" /></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div  className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="kt-portlet__head-label">
                                            <h5 className="kt-portlet__head-title">Change Password</h5>
                                        </CardTitle>
                                        <hr/>
                                        <Form>
                                            <FormGroup>
                                                <Label>Current Password</Label>
                                                <Input type="password" placeholder="Password"></Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>New Password</Label>
                                                <Input type="password" placeholder="Password"></Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Confirm New Password</Label>
                                                <Input type="password" placeholder="Password"></Input>
                                            </FormGroup>
                                            <Button color="primary">Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                </div>
            </div>
        )
    }
}
