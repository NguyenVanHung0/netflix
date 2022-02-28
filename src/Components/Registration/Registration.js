import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import './Registration.css'
import withRouter from '../../router/withRouter'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'




function Registration(props) {
    let isVietNam = props.language == 'vietnam'

    function handleClickNext() {
        const navigate = props.router.navigate;
        navigate('/signup/regform')
    }

    return (
        <div className="registration">
            <Header />
            <div className='registration__body'>
                <div className='registration__body-box'>
                    <div className='registration__body-device-img'>

                    </div>
                    <div className='registration__body-content'>
                        <span className='registration__body-content-step'>BƯỚC <b>1</b>/<b>3</b></span>
                        <div className='registration__body-content-header'>
                            Hoàn thành việc cài đặt tài khoản của bạn
                        </div>
                        <p className='registration__body-content-text'>
                            Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
                        </p>
                    </div>
                    <div className='registration__body-btn'>
                        <button onClick={handleClickNext}>Tiếp theo</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Registration))
