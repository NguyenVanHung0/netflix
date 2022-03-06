import './Registration.css'
import withRouter from '../../router/withRouter'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { connect } from 'react-redux'

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
                        <span className='registration__body-content-step'>{isVietNam ? 'BƯỚC' : 'STEP'} <b>1</b>/<b>3</b></span>
                        <div className='registration__body-content-header'>
                            {isVietNam ? 'Hoàn thành việc cài đặt tài khoản của bạn' : 'Finish setting up your account'}
                        </div>
                        <p className='registration__body-content-text'>
                            {isVietNam ? 'Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.' : 'Netflix is personalized for you. Create a password to watch on any device at any time.'}
                        </p>
                    </div>
                    <div className='registration__body-btn'>
                        <button onClick={handleClickNext}>{isVietNam ? 'Tiếp theo' : 'Next'}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language,
        email: state.email
    }
}


export default connect(mapStateToProps)(withRouter(Registration))
