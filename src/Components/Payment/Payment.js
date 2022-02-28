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

function Payment(props) {
    let isVietNam = props.language == 'vietnam'
    const homeLanguage = useRef()
    const [appear, setAppear] = useState(false)

    useOutsideAlerter(homeLanguage, setAppear);

    function handleAppear() {
        setAppear(!appear)
        if (homeLanguage.current && appear === false) {
            homeLanguage.current.style.borderRadius = '4px'
        }
        else {
            homeLanguage.current.style.borderRadius = '2px'
        }
    }

    function handleClickNext() {
        const navigate = props.router.navigate
        navigate('/signup/payment')
    }


    return (
        <div className="payment">
            <div className="registration__header">

                <div className="home__logo regiatration__header-logo">
                    <Link to='/netflix'>
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

                <div className="registration__header-login">
                    <Link to=''>Đăng nhập</Link>
                </div>
            </div>

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
                            <Link to='' className='payment-link'>
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

            <div className='registration__footer'>
                <div className='footer__header'>
                    <a href=''>{isVietNam ? 'Bạn có câu hỏi? Liên hệ với chúng tôi.' : 'Questions? Contact us.'}</a>
                </div>
                <div className='footer__content register__footer-content'>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Câu hỏi thường gặp' : 'FAQ'}</a>
                            </li>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Tùy chọn cookie' : 'Investor Relations'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Trung tâm trợ giúp' : 'Help Center'}</a>
                            </li>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Thông tin doanh nghiệp' : 'Jobs'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Điều khoản sử dụng' : 'Account'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Quyền riêng tư' : 'Media Center'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='registration__footer-language'>
                    <button className='footer__language-btn registration__footer-language-btn' onClick={handleAppear} ref={homeLanguage}>
                        <FaGlobe />
                        <p className='footer__language-btn-text registration__footer-language-btn-text'>Tiếng Việt</p>
                        <FaAngleDown />
                    </button>
                    {appear &&
                        <ul className='language-list registration__language-list'>
                            <li className='language__item registration__language-item' >Tiếng Việt</li>
                            <li className='language__item registration__language-item' >English</li>
                        </ul>
                    }

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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))
