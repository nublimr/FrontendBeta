import React, { Component } from 'react'
// import $ from 'jquery'
// import DataTable from 'react-data-table-component';
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
    // Form,
    // FormGroup,
    // Label,
    // Input,
    // FormText
  } from 'reactstrap';

  // const columns = [
  //   {
  //     name: 'Tanggal Diupload',
  //     selector: 'thbd_created_date',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Jam Diupload',
  //     selector: 'thbd_created_time',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Total Data Diupload',
  //     selector: 'thbd_count',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Approver',
  //     selector: 'mmle_pic_name1',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Approver',
  //     selector: 'mmle_name',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Uploader',
  //     selector: 'thbd_type',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Tipe Upload',
  //     selector: 'thbd_status',
  //     sortable: true,
  //   },
  // ];

  const listapi = "http://localhost/upload-beta/v1/Hasil_data_terupload/listTerupload"

export default class DataTerupload extends Component {

    constructor(props) {
      super(props);
      this.state = {
        mydata: [],
      };
    }

    componentDidMount(){

        fetch(listapi)
        .then(res => res.json())
        .then((data) => {
          this.setState({ mydata: data })
        })
        .catch(console.log)
        console.log(this.state.mydata);

        // $.ajax({
        //     url: 'http://localhost/upload-beta/v1/Hasil_data_terupload/listTerupload',
        //     dataType: 'json',
        //     success: function(data) {
        //         for(var i in data.data){
        //             console.log(data.data[i].thbd_created_date);
        //             console.log(data.data[i].thbd_created_time);
        //             console.log(data.data[i].thbd_count);
        //             console.log(data.data[i].mmle_pic_name1);
        //             console.log(data.data[i].mmle_name);
        //             console.log(data.data[i].thbd_type);
        //             console.log(data.data[i].thbd_status);
        //             $(".dataterupload").append(
        //                 "<tr>" +
        //                     '<td className="kode">'+$.parseJSON(JSON.stringify(data.data[i].thbd_created_date))+"</td>" +
        //                     '<td className="nama">'+$.parseJSON(JSON.stringify(data.data[i].thbd_created_time)) +"</td>" +
        //                     '<td className="kode">'+$.parseJSON(JSON.stringify(data.data[i].thbd_count))        +"</td>" +
        //                     '<td className="nama">'+$.parseJSON(JSON.stringify(data.data[i].mmle_pic_name1))    +"</td>" +
        //                     '<td className="kode">'+$.parseJSON(JSON.stringify(data.data[i].mmle_name))         +"</td>" +
        //                     '<td className="nama">'+$.parseJSON(JSON.stringify(data.data[i].thbd_type))         +"</td>" +
        //                     '<td className="kode">'+$.parseJSON(JSON.stringify(data.data[i].thbd_type))         +"</td>" +
        //                 "</tr>"
        //             );
        //         }
        //     }
        //   });
    }

    render() {
          const data = {
            columns: [
              {
                label: 'Tanggal Diupload',
                field: 'thbd_created_date',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Jam Diupload',
                field: 'thbd_created_time',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Total Data Diupload',
                field: 'thbd_count',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Approver',
                field: 'mmle_pic_name1',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Uploader',
                field: 'mmle_name',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Tipe Upload',
                field: 'thbd_type',
                sort: 'asc',
                width: 50
              },
              {
                label: 'Status',
                field: 'thbd_status',
                sort: 'asc',
                width: 50
              }
            ],
            rows: this.state.mydata.data
        }
        return (
            <div>
                <div className="main">
                <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                    <div className="kt-subheader__main">
                        <h3 className="kt-subheader__title">Data Terupload</h3>
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
                                    <h5 className="kt-portlet__head-title">List Data Terupload</h5>
                                </CardTitle>
                                <hr/>
                                {/* <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Tanggal Diupload</th>
                                        <th>Jam Diupload</th>
                                        <th>Total Data Diupload</th>
                                        <th>Approver</th>
                                        <th>Uploader</th>
                                        <th>Tipe Upload</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody className="dataterupload">
                                    </tbody>
                                </Table> */}
                                {/* <DataTable title="List Data Terupload" columns={columns} data={this.state.mydata.data} pagination/> */}
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
                </div>
                </div>
            </div>
        )
    }
}
