import React, { Component } from 'react'
import './UploadData.css'
import axios from 'axios'
// import $ from 'jquery'
import classnames from 'classnames'
// import DataTable from 'react-data-table-component';
import { MDBDataTable } from 'mdbreact';
// import { DragDrop } from '@uppy/react'
// import '@uppy/core/dist/style.css'
// import '@uppy/dashboard/dist/style.css'
// import Dropzone from 'react-dropzone'
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
    NavLink,
    NavItem,
    Nav,
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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormText,
    TabContent,
    TabPane
  } from 'reactstrap';
  import ReactExport from "react-export-excel";

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const dpapi = "http://localhost/user-beta/v1/Droppoint/dpTerdaftar"
  const tambahapi = "http://localhost/upload-beta/v1/UploadFile/tambahkanData"
  const gantiapi = "http://localhost/upload-beta/v1/UploadFile/gantikanData"
  const hapusapi = "http://localhost/upload-beta/v1/UploadFile/hapusData"

  export default class UploadData extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          activeTab: '1',
          mydata: [],
          selectedFile: null
        };

        this.toggle = this.toggle.bind(this);
      }


      onChangeHandler=event=>{
          this.setState({
              selectedFile: event.target.files[0],
              loaded: 0,
            })
        }
                              onClickHandler1 = () => {
                                const data = new FormData()
                                data.append('file', this.state.selectedFile)
                                axios.post(tambahapi,data,{
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                      }
                                })
                                .then(res => { // then print response status
                                    console.log(res.statusText)
                                  })
                            }

                              onClickHandler2 = () => {
                                const data = new FormData()
                                data.append('file', this.state.selectedFile)
                                axios.post(gantiapi,data,{
                                })
                                .then(res => { // then print response status
                                    console.log(res.statusText)
                                  })
                            }

                              onClickHandler3 = () => {
                                const data = new FormData()
                                data.append('file', this.state.selectedFile)
                                axios.post(hapusapi,data,{

                                })
                                .then(res => { // then print response status
                                    console.log(res.statusText)
                                  })
                            }

      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      toggle1(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      state = {
          mydata: []
        };

        componentDidMount(){

            fetch(dpapi)
            .then(res => res.json())
            .then((data) => {
                this.setState({ mydata: data })
            })
            .catch(console.log)

            // $.ajax({
                //     url: 'http://localhost/user-beta/v1/Droppoint/dpTerdaftar',
                //     dataType: 'json',
                //     success: function(data) {
        //         for(var i in data.data){
        //             $(".droppoint").append(
        //                 "<tr>" +
        //                 '<td>'+$.parseJSON(JSON.stringify(data.data[i].tadp_code))+"</td>" +
        //                 '<td>'+$.parseJSON(JSON.stringify(data.data[i].tadp_name))+"</td>" +
        //                 "</tr>"
        //             );
        //         }
        //     }
        //   });
    }

    render() {
        console.log(this.state.mydata.data);

        const data = {
            columns: [
              {
                label: 'Kode Drop Point',
                field: 'tadp_code',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Status',
                field: 'tadp_status',
                sort: 'asc',
                width: 50
              },
              {
                label: 'ID',
                field: 'tadp_id',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Nama Drop Point',
                field: 'tadp_name',
                sort: 'asc',
                width: 50
              }
            ],
            rows: this.state.mydata.data
        }

        console.log(data.rows);

        return (
            <div className="main">
                <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                    <div className="kt-subheader__main">
                        <h3 className="kt-subheader__title">Upload Data</h3>
                        <span className="kt-subheader__separator kt-subheader__separator--v" />
                        <div className="kt-input-icon kt-input-icon--right kt-subheader__search kt-hidden">
                            <input type="text" className="form-control" placeholder="Search order..." id="generalSearch" />
                            <span className="kt-input-icon__icon kt-input-icon__icon--right">
                                <span><i className="flaticon2-search-1" /></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <CardTitle className="kt-portlet__head-label">
                                <h5 className="kt-portlet__head-title">Drop Point Terdaftar</h5>
                            </CardTitle>
                            <hr/>
                                {/* <Table responsive className="table">
                                    <thead>
                                        <tr>
                                            <th>Kode Drop Point</th>
                                            <th>Nama Drop Point</th>
                                        </tr>
                                    </thead>
                                    <tbody className="droppoint">
                                    </tbody>
                                </Table> */}
                                <MDBDataTable
                                    striped
                                    bordered
                                    hover
                                    data={data}
                                    responsive
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Card>
                            <CardBody>
                                <ExcelFile element={<Button color="warning" className="m-3"><i className="fas fa-file-download"></i>Download Data</Button>}>
                                    <ExcelSheet data={data.rows} name="Employees">
                                        <ExcelColumn label="Nama Drop Point" value="tadp_name"/>
                                        <ExcelColumn label="Status" value="tadp_status"/>
                                        <ExcelColumn label="ID" value="tadp_id"/>
                                        <ExcelColumn label="Kode Drop Point" value="tadp_code"/>
                                    </ExcelSheet>
                                </ExcelFile>
                                <Button color="primary" className="m-3" onClick={this.toggle}><i className="fas fa-file-upload"></i>Upload Data</Button>
                                <div className="result"></div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Upload Data</ModalHeader>
                    <ModalBody>
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab==='1' })}
                                        onClick={()=> { this.toggle1('1'); }}
                                        >
                                        <i className="fas fa-plus"></i>
                                        Tambahkan Data
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab==='2' })}
                                        onClick={()=> { this.toggle1('2'); }}
                                        >
                                        <i className="fas fa-retweet"></i>
                                        Ganti Data
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab==='3' })}
                                        onClick={()=> { this.toggle1('3'); }}
                                        >
                                        <i className="fas fa-trash-alt"></i>
                                        Hapus Data
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col>
                                        <Form className="tambahkan">
                                            <FormGroup>
                                                <Label for="exampleFile">File</Label>
                                                <Input type="file" name="file" id="exampleFile" className="btn btn-outline-primary" onChange={this.onChangeHandler} required/>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
                                                    It's a bit lighter and easily wraps to a new line.
                                                </FormText>
                                            </FormGroup>
                                            <Button type="button" className="btn btn-label-primary" onClick={this.onClickHandler1}><i className="fas fa-upload"></i>Upload</Button>
                                        </Form>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleFile">File</Label>
                                                <Input type="file" name="file" id="exampleFile" className="btn btn-outline-primary" onChange={this.onChangeHandler} required/>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
                                                    It's a bit lighter and easily wraps to a new line.
                                                </FormText>
                                            </FormGroup>
                                            <Button type="button" className="btn btn-label-primary" onClick={this.onClickHandler2}><i className="fas fa-upload"></i>Upload</Button>
                                        </Form>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleFile">File</Label>
                                                <Input type="file" name="file" id="exampleFile" className="btn btn-outline-primary" onChange={this.onChangeHandler} required/>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
                                                    It's a bit lighter and easily wraps to a new line.
                                                </FormText>
                                            </FormGroup>
                                            <Button type="button" className="btn btn-label-primary" onClick={this.onClickHandler3}><i className="fas fa-upload"></i>Upload</Button>
                                        </Form>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" className="btn btn-default btn-bold btn-upper" onClick={this.toggle}><i className="fas fa-times-circle"></i>Close</Button>
                    </ModalFooter>
                </Modal>

                </div>
        </div>
        )
    }
}
