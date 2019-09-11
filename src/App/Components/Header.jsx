import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed ">
                {/* begin:: Header Menu */}
                <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i
                        className="la la-close" /></button>
                <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                    <div id="kt_header_menu"
                        className="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
                    </div>
                </div>

                {/* end:: Header Menu */}
                {/* begin:: Header Topbar */}
                <div className="kt-header__topbar">
                    {/*begin: User Bar */}
                    <div className="kt-header__topbar-item kt-header__topbar-item--user">
                        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                            <div className="kt-header__topbar-user">
                                <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                                <span className="kt-header__topbar-username kt-hidden-mobile">Admin</span>
                                <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />
                                {/*use below badge element instead the user avatar to display username's first
                                letter(remove kt-hidden class to display it) */}
                                <span
                                    className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">A</span>
                            </div>
                        </div>
                        <div
                            className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                            {/*begin: Head */}
                            <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
                                style={{backgroundImage: 'url(./assets/media/misc/bg-1.jpg)'}}>
                                <div className="kt-user-card__avatar">
                                    <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />
                                    {/*use below badge element instead the user avatar to display username's first
                                    letter(remove kt-hidden class to display it) */}
                                    <span
                                        className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">A</span>
                                </div>
                                <div className="kt-user-card__name">
                                    Admin
                                </div>
                            </div>
                            {/*end: Head */}
                            {/*begin: Navigation */}
                            <div className="kt-notification">
                                <div className="kt-notification__custom kt-space-between">
                                    <Link to="/account" className="btn btn-label btn-label-brand btn-sm btn-bold"><i className="fas fa-user-circle"></i>Profile</Link>
                                    <Link to="/" className="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out<i className="fas fa-sign-out-alt ml-2"></i></Link>
                                </div>
                            </div>
                            {/*end: Navigation */}
                        </div>
                    </div>
                    {/*end: User Bar */}
                </div>
                {/* end:: Header Topbar */}
            </div>

        )
    }
}
