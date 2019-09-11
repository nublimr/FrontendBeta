import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="kt-grid kt-grid--hor kt-grid--root">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                        <div className="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop" id="kt_footer">
                            <div className="kt-footer__copyright">
                                2019&nbsp;©&nbsp;<a href="http://keenthemes.com/metronic" target="_blank"
                                    className="kt-link">Keenthemes</a>
                            </div>
                            <div className="kt-footer__menu">
                                <a href="http://keenthemes.com/metronic" target="_blank"
                                    className="kt-footer__menu-link kt-link">About</a>
                                <a href="http://keenthemes.com/metronic" target="_blank"
                                    className="kt-footer__menu-link kt-link">Team</a>
                                <a href="http://keenthemes.com/metronic" target="_blank"
                                    className="kt-footer__menu-link kt-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
