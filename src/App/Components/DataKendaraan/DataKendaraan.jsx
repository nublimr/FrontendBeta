import React, { Component } from 'react'
// import $ from 'jquery'
import { MDBDataTable } from 'mdbreact';
import {
    // Badge,
    // Button,
    // ButtonDropdown,
    // ButtonGroup,
    // ButtonToolbar,
    Card,
    CardBody,
    // CardFooter,
    // CardHeader,
    CardTitle,
    Col,
    // Dropdown,
    // DropdownItem,
    // DropdownMenu,
    // DropdownToggle,
    // Progress,
    Row,
    // Table,
    // eslint-disable-next-line
    Form,
    // eslint-disable-next-line
    FormGroup,
    // eslint-disable-next-line
    Label,
    // eslint-disable-next-line
    Input,
    // FormText
  } from 'reactstrap';

  const kendaraanapi = "http://localhost/upload-beta/v1/Data_kendaraan_aktif_leasing/index"

export default class DataKendaraan extends Component {

    constructor(props){
        super(props);

        this.state = {
            mydata : [null],
        };
    }

    componentDidMount(){

    //    var searchString = $("#val").val();
    //         $.ajax({
    //             url: "http://localhost/upload-beta/v1/Data_kendaraan_aktif_leasing/index",
    //             dataType: "json",
    //             data:
    //                 {
    //                     searchString: searchString
    //                 },
    //             success: function (data) {
    //                 for(var i in data.data){
    //                     $(".kendaraan").append(
    //                         "<tr>" +
    //                             '<td>'+$.parseJSON(JSON.stringify(data.data[i].tvec_vbrand))+"</td>" +
    //                             '<td>'+$.parseJSON(JSON.stringify(data.data[i].tvec_ptype))+"</td>" +
    //                             '<td>'+$.parseJSON(JSON.stringify(data.data[i].tvec_vyear))+"</td>" +
    //                             '<td>'+$.parseJSON(JSON.stringify(data.data[i].tvec_vcolor))+"</td>" +
    //                             '<td>'+$.parseJSON(JSON.stringify(data.data[i].tvec_status))+"</td>" +
    //                         "</tr>"
    //                     );
    //                 }
    //             }
    //         });

                // $(document).ready(function(){
                //     $("#val").on("keyup", function() {
                //       var value = $(this).val().toLowerCase();
                //       // eslint-disable-next-line
                //       $(".kendaraan tr").filter(function() {
                //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                //       });
                //     });
                //   });

              fetch(kendaraanapi)
              .then(res => res.json())
              .then((data) => {
                  this.setState({ mydata: data })
                  console.log(this.state.mydata.data);
              })
              .catch(console.log)
    }

    render() {
        const data = {
            columns: [
              {
                label: 'ID',
                field: 'tvec_id',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Status',
                field: 'tvec_status',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Plat',
                field: 'tvec_vplate',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Tipe',
                field: 'tvec_vtype',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Brand',
                field: 'tvec_vbrand',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Model',
                field: 'tvec_ptype',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Tahun',
                field: 'tvec_vyear',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Warna',
                field: 'tvec_vcolor',
                sort: 'asc',
                width: 50
              },
            ],
            rows: this.state.mydata.data
        }
        return (
            <div>
                <div className="main">
                    <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                        <div className="kt-subheader__main">
                            <h3 className="kt-subheader__title">Data Kendaraan</h3>
                            <span className="kt-subheader__separator kt-subheader__separator--v" />
                            <div className="kt-input-icon kt-input-icon--right kt-subheader__search kt-hidden">
                                <input type="text" className="form-control" placeholder="Search order..."
                                    id="generalSearch" />
                                <span className="kt-input-icon__icon kt-input-icon__icon--right">
                                    <span><i className="flaticon2-search-1" /></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                        {/* <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="kt-portlet__head-label">
                                            <h5 className="kt-portlet__head-title">Cari Nomor Polisi</h5>
                                        </CardTitle>
                                        <hr />
                                        <Row>
                                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                            <Form>
                                                <FormGroup>
                                                    <Label>Search</Label>
                                                    <Input id="val" placeholder="B1234ABC" />
                                                </FormGroup>
                                            </Form>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row> */}
                        <br />
                        <Row>
                            <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="kt-portlet__head-label">
                                        <h5 className="kt-portlet__head-title">Data Kendaraan Aktif</h5>
                                    </CardTitle>
                                    <hr />
                                    {/* <Table responsive className="mytable">
                                        <thead>
                                            <tr>
                                                <th>Brand</th>
                                                <th>Tipe</th>
                                                <th>Tahun</th>
                                                <th>Warna</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="kendaraan">
                                        </tbody>
                                    </Table> */}
                                    <MDBDataTable striped bordered hover responsive data={data} />
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
