import './Regform.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import withRouter from '../../router/withRouter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'




function Regform(props) {
    let isVietNam = props.language == 'vietnam'


    function handleClickNext() {
        const navigate = props.router.navigate;
        navigate('/signup')
    }

    return (
        <div className='regform'>
            <Header />
            <div className='regform__body'>
                <div className='regform__body-box'>
                    <div className='regform__body-form registration__body-box'>
                        <div className='reg__body-form-header'>
                            <span className='reg__body-form-header-step'>BƯỚC <b>1</b>/<b>3</b></span>
                            <h3>Tạo mật khẩu để bắt đầu tư cách thành viên của bạn</h3>
                            <p>Chỉ cần vài bước nữa là bạn sẽ hoàn tất!</p>
                            <p>Chúng tôi cũng chẳng thích thú gì với các loại giấy tờ.</p>
                        </div>
                        <div className='reg__body-form-input'>
                            <input className='reg__body-form-input-box' type='email'></input>
                            <input className='reg__body-form-input-box' type='pasword' placeholder='Thêm mật khẩu'></input>
                            <div className='reg__body-form-input-send-email'>
                                <input className='reg__body-form-input-checkbox' type='checkbox' id='regform-checkbox' />
                                <label htmlFor='regform-checkbox'>Vui lòng không gửi các ưu đãi đặc biệt của Netflix qua email cho tôi.</label>
                            </div>
                        </div>
                        <div className='reg__body-form-btn'>
                            <div className='registration__body-btn reg__body-form-btn-btn'>
                                <button onClick={handleClickNext}>Tiếp theo</button>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Regform))
