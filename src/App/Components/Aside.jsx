import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Aside extends Component {
    render() {
        return (
        <div>
            <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed ">
                <div className="kt-header-mobile__logo">
                    <Link to="/">
                            <img alt="Logo" src="./assets/media/logos/Logo.png" />
                    </Link>
                </div>
                <div className="kt-header-mobile__toolbar">
                    <button className="kt-header-mobile__toggler kt-header-mobile__toggler--left"
                        id="kt_aside_mobile_toggler"><span /></button>
                </div>
            </div>
            {/* end:: Header Mobile */}
            <div className="kt-grid kt-grid--hor kt-grid--root">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                    {/* begin:: Aside */}
                    <button className="kt-aside-close " id="kt_aside_close_btn"><i className="la la-close" /></button>
                    <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
                        id="kt_aside">
                        {/* begin:: Aside */}
                        <div className="kt-aside__brand kt-grid__item " id="kt_aside_brand">
                            <div className="kt-aside__brand-logo">
                            <Link to="/" className="text-center justify-content-center">
                                <img alt="Logo" src="./assets/media/logos/Logo1.png" width="50vw"/>
                            </Link>
                            </div>
                            <div className="kt-aside__brand-tools">
                                <button className="kt-aside__brand-aside-toggler" id="kt_aside_toggler">
                                    <span><svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                            viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                                <path
                                                    d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                                                    id="Path-94" fill="/000000" fillRule="nonzero"
                                                    transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) " />
                                                <path
                                                    d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                                                    id="Path-94" fill="/000000" fillRule="nonzero" opacity="0.3"
                                                    transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) " />
                                            </g>
                                        </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                            viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                                <path
                                                    d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
                                                    id="Path-94" fill="/000000" fillRule="nonzero" />
                                                <path
                                                    d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
                                                    id="Path-94" fill="/000000" fillRule="nonzero" opacity="0.3"
                                                    transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) " />
                                            </g>
                                        </svg></span>
                                </button>
                                {/*
                                <button class="kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left"
                                    id="kt_aside_toggler"><span></span></button>
                                */}
                            </div>
                        </div>
                        {/* end:: Aside */}
                        {/* begin:: Aside Menu */}
                        <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
                            id="kt_aside_menu_wrapper">
                            <div id="kt_aside_menu" className="kt-aside-menu " data-ktmenu-vertical={1}
                                data-ktmenu-scroll={1} data-ktmenu-dropdown-timeout={500}>
                                <ul className="kt-menu__nav ">
                                    <li className="kt-menu__item" aria-haspopup="true"><Link
                                            exact="true" to="/" className="kt-menu__link"><span
                                                className="kt-menu__link-icon">
                                                    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        {/* Generator: Sketch 52.5 (67469) -
                                                        http://www.bohemiancoding.com/sketch */}
                                                        <title>dashboard</title>
                                                        <desc>Created with Sketch.</desc>
                                                        <g id="Icons" stroke="none" strokeWidth={1} fill="none"
                                                            fillRule="evenodd">
                                                            <g id="Rounded"
                                                                transform="translate(-341.000000, -245.000000)">
                                                                <g id="Action"
                                                                    transform="translate(100.000000, 100.000000)">
                                                                    <g id="-Round-/-Action-/-dashboard"
                                                                        transform="translate(238.000000, 142.000000)">
                                                                        <g>
                                                                            <polygon id="Path"
                                                                                points="0 0 24 0 24 24 0 24" />
                                                                            <path
                                                                                d="M4,13 L10,13 C10.55,13 11,12.55 11,12 L11,4 C11,3.45 10.55,3 10,3 L4,3 C3.45,3 3,3.45 3,4 L3,12 C3,12.55 3.45,13 4,13 Z M4,21 L10,21 C10.55,21 11,20.55 11,20 L11,16 C11,15.45 10.55,15 10,15 L4,15 C3.45,15 3,15.45 3,16 L3,20 C3,20.55 3.45,21 4,21 Z M14,21 L20,21 C20.55,21 21,20.55 21,20 L21,12 C21,11.45 20.55,11 20,11 L14,11 C13.45,11 13,11.45 13,12 L13,20 C13,20.55 13.45,21 14,21 Z M13,4 L13,8 C13,8.55 13.45,9 14,9 L20,9 C20.55,9 21,8.55 21,8 L21,4 C21,3.45 20.55,3 20,3 L14,3 C13.45,3 13,3.45 13,4 Z"
                                                                                id="🔹Icon-Color" fill="#1D1D1D" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </span><span className="kt-menu__link-text">Dashboard</span></Link>
                                    </li>
                                    <li className="kt-menu__item" aria-haspopup="true">
                                        <Link to="/upload" className="kt-menu__link "><span
                                            className="kt-menu__link-icon">
                                           <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1"
                                               xmlns="http://www.w3.org/2000/svg"
                                               xmlnsXlink="http://www.w3.org/1999/xlink"
                                               xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
                                               {/* Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch
                                               */}
                                               <title>icon 98 folder upload</title>
                                               <desc>Created with Sketch.</desc>
                                               <defs />
                                               <g id="Page-1" stroke="none" strokeWidth={1} fill="none"
                                                   fillRule="evenodd" sketchtype="MSPage">
                                                   <g id="icon-98-folder-upload" sketchtype="MSArtboardGroup"
                                                       fill="#000000">
                                                       <path
                                                           d="M16,27 L3.99328744,27 C2.89971268,27 2,26.1085295 2,25.008845 L2,14 L31,14 L31,25.0049107 C31,26.1073772 30.1075748,27 29.0067126,27 L17,27 L17,18 L20.25,21.25 L21,20.5 L16.5,16 L12,20.5 L12.75,21.25 L16,18 L16,27 L16,27 Z M2,13 L2,6.991155 C2,5.88967395 2.89666625,5 4.00276013,5 L15,5 L17,9 L28.9941413,9 C30.1029399,9 31,9.8932319 31,10.9950893 L31,13 L2,13 L2,13 L2,13 Z"
                                                           id="folder-upload" sketchtype="MSShapeGroup" />
                                                   </g>
                                               </g>
                                           </svg>
                                        </span><span className="kt-menu__link-text">Upload Data</span></Link>
                                    </li>
                                    <li className="kt-menu__item " aria-haspopup="true">
                                        <Link to="/terupload" className="kt-menu__link "><span
                                            className="kt-menu__link-icon"><svg width="32px" height="32px"
                                                viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
                                                {/* Generator: Sketch 3.0.3 (7891) -
                                                http://www.bohemiancoding.com/sketch */}
                                                <title>icon 92 inbox download</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs />
                                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none"
                                                    fillRule="evenodd" sketchtype="MSPage">
                                                    <g id="icon-92-inbox-download" sketchtype="MSArtboardGroup"
                                                        fill="#000000">
                                                        <path
                                                            d="M16,16 L12.75,12.75 L12,13.5 L16.5,18 L21,13.5 L20.25,12.75 L17,16 L17,5 L16,5 L16,16 L16,16 L16,16 Z M21,18 L27.7750244,18 L27.7750244,18 L23.4000244,11 L18,11 L18,10 L24,10 L29,18 L29,19 L29,27 L4,27 L4,18 L9,10 L15,10 L15,11 L9.59997559,11 L5.22497559,18 L12,18 L12,20 C12,21.1045695 12.8958578,22 13.9973917,22 L19.0026083,22 C20.1057373,22 21,21.1122704 21,20 L21,18 L21,18 Z"
                                                            id="inbox-download" sketchtype="MSShapeGroup" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span><span className="kt-menu__link-text">Data Terupload</span></Link>
                                    </li>

                                    <li className="kt-menu__item" aria-haspopup="true">
                                        <Link to="/kendaraan" className="kt-menu__link "><span
                                            className="kt-menu__link-icon">
                                            <svg width="24px" height="14px" viewBox="0 0 24 14" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                {/* Generator: Sketch 52.5 (67469) -
                                                http://www.bohemiancoding.com/sketch */}
                                                <title>motorcycle</title>
                                                <desc>Created with Sketch.</desc>
                                                <g id="Icons" stroke="none" strokeWidth={1} fill="none"
                                                    fillRule="evenodd">
                                                    <g id="Rounded" transform="translate(-270.000000, -335.000000)">
                                                        <g id="Action" transform="translate(100.000000, 100.000000)">
                                                            <g id="-Round-/-Action-/-motorcycle"
                                                                transform="translate(170.000000, 230.000000)">
                                                                <g>
                                                                    <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                                                                    <path
                                                                        d="M19.44,9.03 L17.31,6.9 L15.71,5.3 C15.52,5.11 15.26,5 15,5 L12,5 C11.45,5 11,5.45 11,6 C11,6.55 11.45,7 12,7 L14.59,7 L16.59,9 L5,9 C2.2,9 0,11.2 0,14 C0,16.8 2.2,19 5,19 C7.46,19 9.45,17.31 9.9,15 L10.72,15 C11.25,15 11.76,14.79 12.13,14.41 L14.31,12.23 C14.11,12.77 14,13.37 14,14 C14,16.8 16.2,19 19,19 C21.8,19 24,16.8 24,14 C24,11.35 22.03,9.23 19.44,9.03 Z M5,15 L7.82,15 C7.4,16.15 6.28,17 5,17 C3.37,17 2,15.63 2,14 C2,12.37 3.37,11 5,11 C6.28,11 7.4,11.85 7.82,13 L5,13 C4.45,13 4,13.45 4,14 C4,14.55 4.45,15 5,15 Z M19,17 C17.34,17 16,15.66 16,14 C16,12.34 17.34,11 19,11 C20.66,11 22,12.34 22,14 C22,15.66 20.66,17 19,17 Z"
                                                                        id="🔹Icon-Color" fill="#1D1D1D" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span><span className="kt-menu__link-text">Data Kendaraan
                                            Aktif</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* end:: Aside Menu */}
                    </div>
                    {/* end:: Aside */}
                </div>
            </div>
        </div>
        )
    }
}
