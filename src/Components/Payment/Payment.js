import './Payment.css'
import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withRouter from '../../router/withRouter'
import visa from '../../assets/img/visa.svg'
import mastercard from '../../assets/img/mastercard.svg'
import amex from '../../assets/img/amex.svg'
import right from '../../assets/img/right.svg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



function Payment(props) {
    let isVietNam = props.language == 'vietnam'

    function handleClickNext() {
        const navigate = props.router.navigate
        navigate('/signup/payment')
    }


    return (
        <div className="payment">
            <Header />

            <div className='payment__body'>
                <div className='payment__body-box'>
                    <div className='payment__body-content'>
                        <div className='payment__body-content-icon'>

                        </div>
                        <div className='payment__body-content-text'>
                            <p className='payment__body-content-step'>
                                BƯỚC <b>3</b>/<b>3</b>
                            </p>
                            <h3 className='payment__body-content-header'>
                                Thiết lập phương thức thanh toán
                            </h3>
                            <p className='payment__body-content-light'>
                                Tư cách thành viên của bạn sẽ bắt đầu ngay khi bạn thiết lập thanh toán.
                            </p>
                            <p className='payment__body-content-dark'>
                                Không yêu cầu cam kết.
                                Hủy trực tuyến bất kỳ lúc nào.
                            </p>
                        </div>
                        <div className='payment__body-content-method'>
                            <div className='payment__body-content-method-security'>
                                Máy chủ bảo mật
                                <svg viewBox="0 0 12 16" className="payment__body-content-method-svg">
                                    <g fill="none">
                                        <g fill="#FFB53F">
                                            <path
                                                d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <Link to='/signup/creditoption' className='payment-link'>
                                <div className='payment__body-content-method-link'>

                                    <div className='payment__body-content-method-select'>
                                        <div className='payment__body-content-method-select-text'>
                                            Thẻ ghi nợ hoặc thẻ tín dụng
                                        </div>
                                        <div className='payment__body-content-method-select-img'>
                                            <img src={visa} />
                                            <img src={mastercard} />
                                            <img src={amex} />
                                        </div>
                                    </div>
                                    <div className='payment__body-content-method-icon'>
                                        <img src={right} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}



const mapStateToProps = (state) => {
    return { language: state.language }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))
