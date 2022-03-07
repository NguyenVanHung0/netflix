import { FaGlobe, FaAngleDown, FaFacebookSquare } from 'react-icons/fa'
import './Login.css'
import logoface from '../../assets/img/logoface.png'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import withRouter from '../../router/withRouter'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'


function useOutsideAlerter(ref, setAppear) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setAppear(false)
            }
        }

        function handleScroll() {
            setAppear(false)
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleScroll)
        };
    }, [ref]);
}

function Login(props) {
    const [appear, setAppear] = useState(false)
    const [servicesAppear, setServicesAppear] = useState(false)
    const [accounts, setAccounts] = useState([])
    const homeLanguage = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()
    let isVietNam = props.language == 'vietnam'

    useOutsideAlerter(homeLanguage, setAppear);

    const handleAppear = () => {
        setAppear(!appear)
        if (homeLanguage.current && appear === false) {
            homeLanguage.current.style.borderRadius = '4px'
        }
        else {
            homeLanguage.current.style.borderRadius = '2px'
        }
    }

    useEffect(() => {
        fetch('http://localhost:3000/account')
            .then(res => res.json())
            .then(acc => {
                setAccounts(acc)
            })
    }, [])

    const handleChangeLanguage = (language) => {
        props.changeLanguage(language);
    }

    const handleClickSignIn = () => {
        if (emailInput.current.value == '') {
            toast.error('Invalid email', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (passwordInput.current.value == '') {
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
        if (passwordInput.current.value && emailInput.current.value) {
            const isAcc = accounts.find((account, index) => {
                return account.email == emailInput.current.value && account.passwordAcc == passwordInput.current.value
            })

            if (isAcc) {
                const navigate = props.router.navigate
                navigate('/browser')
            }
            else {
                toast.error('Account does not exist', {
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
    }

    return (
        <div className="login">
            <div className='cover-layer'></div>
            <div className="login__header">
                <Link to='/'>
                    <svg viewBox="0 0 111 30" className='home__logo-img' >
                        <g>
                            <path
                                fill='#e50914'
                                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                                id="Fill-14"
                            ></path>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="login__body">
                <form className="login__form">
                    <h3 className='login__form-heading'>{isVietNam ? 'Đăng nhập' : 'Sign In'}</h3>
                    <div className='login__form-input'>
                        <input ref={emailInput} type="text" placeholder={isVietNam ? 'Email hoặc số điện thoại' : 'Email or phone number'} className='login__form-input-box' />
                        <input ref={passwordInput} type="password" placeholder={isVietNam ? 'Mật khẩu' : 'Password'} className='login__form-input-box' />
                    </div>
                    <div className='login__form-submit'>
                        <button onClick={handleClickSignIn} className='login__form-submit-btn'>{isVietNam ? 'Đăng nhập' : 'Sign In'}</button>
                        <div className='login__form-submit-help'>
                            <div className='login__form-submit-checkbox'>
                                <input type="checkbox" id='password-memory' />
                                <label htmlFor='password-memory'>{isVietNam ? 'Ghi nhớ tôi' : 'Remember me'}</label>
                            </div>
                            <span>{isVietNam ? 'Bạn cần trợ giúp?' : 'Need help?'}</span>
                        </div>
                    </div>
                    <div className='login__form-footer'>
                        <div className='login__form-login-with-face'>
                            <img className='login__form-login-with-face-img' src={logoface} />
                            {isVietNam ? 'Đăng nhập bằng tài khoản Facebook' : 'Login With Facebook'}
                        </div>
                        <div className='login__form-register'>
                            {isVietNam ? 'Bạn mới tham gia Netflix?' : 'New to Netflix?'}
                            <Link to='/'>{isVietNam ? 'Đăng kí ngay' : 'Sign up now'}</Link>
                        </div>
                        <div className='login__form-more-inf'>
                            {isVietNam ? 'Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.' : 'This page is protected by Google reCAPTCHA to ensure you\'re not a bot.'}
                            <span onClick={() => setServicesAppear(!servicesAppear)}>{isVietNam ? 'Tìm hiểu thêm' : 'Learn more.'}</span>
                        </div>
                        {servicesAppear &&
                            <div className='rules-services'>
                                {isVietNam ? 'Thông tin do Google reCAPTCHA thu thập sẽ tuân theo' : 'The information collected by Google reCAPTCHA is subject to the Google'}
                                <a href='https://help.netflix.com/legal/privacy'> {isVietNam ? 'Chính sách Quyền riêng tư' : 'Privacy Policy'} </a> and
                                <a href='https://help.netflix.com/legal/termsofuse'> {isVietNam ? 'Điều khoản dịch vụ' : 'Terms of Service'} </a>
                                {isVietNam ? 'của Google, và được dùng để cung cấp, duy trì và cải thiện dịch vụ reCAPTCHA cũng như các mục đích bảo mật nói chung (thông tin này không được dùng để cá nhân hóa quảng cáo của Google).' : ', and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).'}
                            </div>
                        }

                    </div>
                </form>
            </div>
            <div className="login__footer">
                <div className='footer__header'>
                    <a href='https://help.netflix.com/vi/contactus'>{isVietNam ? 'Bạn có câu hỏi? Liên hệ với chúng tôi.' : 'Questions? Contact us.'}</a>
                </div>
                <div className='footer__content'>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='https://help.netflix.com/vi/node/412' className='footer__list-item-link'>{isVietNam ? 'Câu hỏi thường gặp' : 'FAQ'}</a>
                            </li>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Tùy chọn cookie' : 'Investor Relations'}</a>
                            </li>

                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='https://help.netflix.com/vi/' className='footer__list-item-link'>{isVietNam ? 'Trung tâm trợ giúp' : 'Help Center'}</a>
                            </li>
                            <li className='footer__list-item'>
                                <a href='https://help.netflix.com/legal/corpinfo' className='footer__list-item-link'>{isVietNam ? 'Thông tin doanh nghiệp' : 'Jobs'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='https://help.netflix.com/legal/termsofuse' className='footer__list-item-link'>{isVietNam ? 'Điều khoản sử dụng' : 'Account'}</a>
                            </li>

                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='https://help.netflix.com/legal/privacy' className='footer__list-item-link'>{isVietNam ? 'Quyền riêng tư' : 'Media Center'}</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='footer__language'>
                    <div className='footer__language-selection' ref={homeLanguage}>
                        <button className='footer__language-btn' onClick={handleAppear} >
                            <FaGlobe />
                            <p className='footer__language-btn-text'>{isVietNam ? 'Tiếng Việt' : 'Language'}</p>
                            <FaAngleDown />
                        </button>
                        {appear && <ul className='language-list'>
                            <li className='language__item' onClick={() => handleChangeLanguage('vietnam')}>Tiếng Việt</li>
                            <li className='language__item' onClick={() => handleChangeLanguage('english')}>English</li>
                        </ul>
                        }
                        <p className='footer__name-web'>{isVietNam ? 'Netflix Việt Nam' : 'Netflix VietNam'}</p>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))

