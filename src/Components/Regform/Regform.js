import './Regform.css'
import { connect } from 'react-redux'
import withRouter from '../../router/withRouter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'


function Regform(props) {
    let isVietNam = props.language == 'vietnam'
    const [email, setEmail] = useState('')
    const passInput = useRef()


    function handleClickNext() {
        if (passInput.current.value != '') {
            if (passInput.current.value.length > 6) {
                props.setPassword(passInput.current.value)
                const navigate = props.router.navigate;
                navigate('/signup')
            }
            else {
                toast.error('Password must be at least 6 characters', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        else {
            toast.error('Invalid password', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    useEffect(() => {
        setEmail(props.email)
    }, [props.email])

    return (
        <div className='regform'>
            <Header />
            <div className='regform__body'>
                <div className='regform__body-box'>
                    <div className='regform__body-form registration__body-box'>
                        <div className='reg__body-form-header'>
                            <span className='reg__body-form-header-step'>{isVietNam ? 'BƯỚC' : 'STEP'} <b>1</b>/<b>3</b></span>
                            <h3>{isVietNam ? 'Tạo mật khẩu để bắt đầu tư cách thành viên của bạn' : 'Create a password to start your membership'}</h3>
                            <p>{isVietNam ? 'Chỉ cần vài bước nữa là bạn sẽ hoàn tất!' : 'Just a few more steps and you\'re done!'}</p>
                            <p>{isVietNam ? 'Chúng tôi cũng chẳng thích thú gì với các loại giấy tờ.' : 'We hate paperwork, too.'}</p>
                        </div>
                        <div className='reg__body-form-input'>
                            <input className='reg__body-form-input-box' type='email' value={email} readOnly></input>
                            <input ref={passInput} className='reg__body-form-input-box' type='password' placeholder={isVietNam ? 'Thêm mật khẩu' : 'Add a password'}></input>
                            <div className='reg__body-form-input-send-email'>
                                <input className='reg__body-form-input-checkbox' type='checkbox' id='regform-checkbox' />
                                <label htmlFor='regform-checkbox'>{isVietNam ? 'Vui lòng không gửi các ưu đãi đặc biệt của Netflix qua email cho tôi.' : 'Please do not email me Netflix special offers.'}</label>
                            </div>
                        </div>
                        <div className='reg__body-form-btn'>
                            <div className='registration__body-btn reg__body-form-btn-btn'>
                                <button onClick={handleClickNext}>{isVietNam ? 'Tiếp theo' : 'Next'}</button>
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
    return {
        language: state.language,
        email: state.email,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPassword: (pass) => dispatch({ type: 'SET_PASS', payload: pass })
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Regform))
