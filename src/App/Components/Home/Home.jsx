import React, { Component } from 'react'
import './Home.css'
// import $ from 'jquery'

const dateapi = "http://localhost/upload-beta/v1/dashboard/dateApprover/4";
const tpnmapi  = "http://localhost/founding-beta/v1/dashboard/totalTpnmSuccess/4";
const tvecapi = "http://localhost/upload-beta/v1/dashboard/totalVehicle/4";
const taltpnmapi = "http://localhost/founding-beta/v1/dashboard/totalTpnmPerDay/1";

export default class Home extends Component {


    constructor(props){
        super(props);

        this.state = {
          tpnm: [],
          tvec: [],
          date: [],
          taltpnm : []
        }
    }

    componentDidMount() {
        // $.ajax({
        //   url: 'http://localhost/founding-beta/v1/dashboard/totalTpnmPerDay/1',
        //   dataType: 'json',
        //   success: function(data) {
        //     $(".penemuan").append($.parseJSON(data.data.total_tpnm));
        //   }
        // });

        // $.ajax({
        //     url: 'http://localhost/founding-beta/v1/dashboard/totalTpnmSuccess/4',
        //     dataType: 'json',
        //     success: function(data) {
        //         $(".penemuanberhasil").append($.parseJSON(data.data.total_tpnm));
        //     }
        // });

        // $.ajax({
        //   url: 'http://localhost/upload-beta/v1/dashboard/dateApprover/4',
        //   dataType: 'json',
        //   success: function(data) {
        //     $(".tanggal").append($.parseJSON(data.data));
        // }
        // });

        // $.ajax({
        //   url: 'http://localhost/upload-beta/v1/dashboard/totalVehicle/4',
        //   dataType: 'json',
        //   success: function(data) {
        //       $(".jumlah").append($.parseJSON(data.data.total_tvec));
        //   }
        // });

        fetch(dateapi)
        .then(res => res.json())
        .then((data) => {
            this.setState({ date: data.data })
        });

        fetch(tpnmapi)
        .then(res => res.json())
        .then((data) => {
            this.setState({ taltpnm: data.data.total_tpnm })
        });

        fetch(tvecapi)
        .then(res => res.json())
        .then((data) => {
            this.setState({ tvec: data.data.total_tvec })
        });

        fetch(taltpnmapi)
        .then(res => res.json())
        .then((data) => {
            this.setState({ tpnm: data.data.total_tpnm })
        });
    }

    thedate = () => {
        const date = this.state.date;
        if (date == null) {
            return(
               new Date().toString()
            )
        }else{
            return(
                date
            )
        }
    }

    render() {
        return (
            <div>
              <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                <div className="kt-subheader__main">
                  <h3 className="kt-subheader__title">Dashboard</h3>
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
                <div className="row main">
                  <div className="col">
                    <div className="kt-portlet kt-portlet--fit kt-portlet--head-lg kt-portlet--head-overlay kt-portlet--skin-solid kt-portlet--height-fluid">
                      <div className="kt-portlet__head kt-portlet__head--noborder kt-portlet__space-x">
                        <div className="kt-portlet__head-label">
                          <h3 className="kt-portlet__head-title">
                            Activity
                          </h3>
                        </div>
                        <div className="kt-portlet__head-toolbar">
                          <a href="/" className="btn btn-label-light btn-sm btn-bold dropdown-toggle"
                            data-toggle="dropdown">
                            Export
                          </a>
                          <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                            <ul className="kt-nav">
                              <li className="kt-nav__section kt-nav__section--first">
                                <span className="kt-nav__section-text">Finance</span>
                              </li>
                              <li className="kt-nav__item">
                                <a href="/" className="kt-nav__link">
                                  <i className="kt-nav__link-icon flaticon2-graph-1" />
                                  <span className="kt-nav__link-text">Statistics</span>
                                </a>
                              </li>
                              <li className="kt-nav__item">
                                <a href="/" className="kt-nav__link">
                                  <i className="kt-nav__link-icon flaticon2-calendar-4" />
                                  <span className="kt-nav__link-text">Events</span>
                                </a>
                              </li>
                              <li className="kt-nav__item">
                                <a href="/" className="kt-nav__link">
                                  <i className="kt-nav__link-icon flaticon2-layers-1" />
                                  <span className="kt-nav__link-text">Reports</span>
                                </a>
                              </li>
                              <li className="kt-nav__section kt-nav__section--first">
                                <span className="kt-nav__section-text">HR</span>
                              </li>
                              <li className="kt-nav__item">
                                <a href="/" className="kt-nav__link">
                                  <i className="kt-nav__link-icon flaticon2-calendar-4" />
                                  <span className="kt-nav__link-text">Notifications</span>
                                </a>
                              </li>
                              <li className="kt-nav__item">
                                <a href="/" className="kt-nav__link">
                                  <i className="kt-nav__link-icon flaticon2-file-1" />
                                  <span className="kt-nav__link-text">Files</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kt-portlet__body kt-portlet__body--fit">
                        <div className="kt-widget17">
                          <div
                            className="kt-widget17__visual kt-widget17__visual--chart kt-portlet-fit--top kt-portlet-fit--sides"
                            style={{backgroundColor: '#2a446c'}}>
                            <div className="kt-widget17__chart" style={{height: 300}}>
                              <canvas id="kt_chart_activities" />
                              {/* <canvas id="kt_chart_activities" /> */}
                            </div>
                          </div>
                          <div className="kt-widget17__stats">
                            <div className="kt-widget17__items">
                              <div className="kt-widget17__item">
                                <span className="kt-widget17__icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon kt-svg-icon--brand">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect id="bound" x={0} y={0} width={24} height={24} />
                                      <path
                                        d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                        id="Combined-Shape" fill="/000000" />
                                      <rect id="Rectangle-Copy-2" fill="/000000" opacity="0.3"
                                        transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                                        x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                                    </g>
                                  </svg> </span>
                                <span className="kt-widget17__subtitle">
                                  Data Terbaru
                                </span>
                                <span className="kt-widget17__subtitle tanggal">
                                  {this.thedate()}
                                </span>
                              </div>
                              <div className="kt-widget17__item">
                                <span className="kt-widget17__icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon kt-svg-icon--success">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <polygon id="Bound" points="0 0 24 0 24 24 0 24" />
                                      <path
                                        d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                        id="Shape" fill="/000000" fillRule="nonzero" />
                                      <path
                                        d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                        id="Path" fill="/000000" opacity="0.3" />
                                    </g>
                                  </svg> </span>
                                <span className="kt-widget17__subtitle">
                                  Jumlah Data Bulan Ini
                                </span>
                                <span className="kt-widget17__subtitle jumlah">
                                  {this.state.tvec}
                                </span>
                              </div>
                            </div>
                            <div className="kt-widget17__items">
                              <div className="kt-widget17__item">
                                <span className="kt-widget17__icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon kt-svg-icon--warning">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect id="bound" x={0} y={0} width={24} height={24} />
                                      <path
                                        d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                                        id="Combined-Shape" fill="/000000" opacity="0.3" />
                                      <path
                                        d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                                        id="Combined-Shape" fill="/000000" />
                                    </g>
                                  </svg> </span>
                                <span className="kt-widget17__subtitle">
                                  Jumlah Penemuan Bulan Ini
                                </span>
                                <span className="kt-widget17__subtitle  penemuan">
                                  {this.state.tpnm}
                                </span>
                              </div>
                              <div className="kt-widget17__item">
                                <span className="kt-widget17__icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon kt-svg-icon--danger">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <rect id="bound" x={0} y={0} width={24} height={24} />
                                      <path
                                        d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                                        id="Combined-Shape" fill="/000000" opacity="0.3" />
                                      <path
                                        d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                                        id="Rectangle-102-Copy" fill="/000000" />
                                    </g>
                                  </svg> </span>
                                <span className="kt-widget17__subtitle">
                                  Penemuan Berhasil Bulan Ini
                                </span>
                                <span className="kt-widget17__subtitle  penemuanberhasil">
                                  {this.state.taltpnm}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
    }
}