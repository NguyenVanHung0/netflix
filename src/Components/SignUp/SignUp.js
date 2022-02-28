import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown, FaRegCheckCircle } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import withRouter from '../../router/withRouter'


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

function SignUp(props) {
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
        navigate('/signup/planform')
    }

    return (
        <div>
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
            <div className='signup__body'>
                <div className='signup__body-box'>
                    <div className='signup__body-content'>
                        <div className='signup__body-icon'>
                            <FaRegCheckCircle className='signup__body-icon-icon' />
                        </div>
                        <div className='signup__body-header'>
                            <p className='signup__body-header-step'>BƯỚC <b>1</b>/<b>3</b></p>
                            <h3>Chọn gói dịch vụ của bạn.</h3>
                        </div>
                        <ul className='signup__body-list'>
                            <li className='signup__body-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup__body-item-icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Không yêu cầu cam kết, hủy bất kỳ lúc nào.
                            </li>
                            <li className='signup__body-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup__body-item-icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Mọi thứ trên Netflix chỉ với mức giá thấp.
                            </li>
                            <li className='signup__body-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup__body-item-icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Không quảng cáo, không phụ phí. Luôn luôn như vậy.
                            </li>
                        </ul>
                        <div className='registration__body-btn signup__btn'>
                            <button onClick={handleClickNext}>Tiếp theo</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))