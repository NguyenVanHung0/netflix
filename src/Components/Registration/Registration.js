import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import './Registration.css'
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

function Registration(props) {
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
        const navigate = props.router.navigate;
        navigate('/signup/regform')
    }

    return (
        <div className="registration">
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
                    <Link to=''>????ng nh???p</Link>
                </div>
            </div>
            <div className='registration__body'>
                <div className='registration__body-box'>
                    <div className='registration__body-device-img'>

                    </div>
                    <div className='registration__body-content'>
                        <span className='registration__body-content-step'>B?????C <b>1</b>/<b>3</b></span>
                        <div className='registration__body-content-header'>
                            Ho??n th??nh vi???c c??i ?????t t??i kho???n c???a b???n
                        </div>
                        <p className='registration__body-content-text'>
                            Netflix ???????c c?? nh??n h??a cho ri??ng b???n. T???o m???t kh???u ????? xem Netflix tr??n b???t k??? thi???t b??? n??o, v??o b???t c??? l??c n??o.
                        </p>
                    </div>
                    <div className='registration__body-btn'>
                        <button onClick={handleClickNext}>Ti???p theo</button>
                    </div>
                </div>
            </div>
            <div className='registration__footer'>
                <div className='footer__header'>
                    <a href=''>{isVietNam ? 'B???n c?? c??u h???i? Li??n h??? v???i ch??ng t??i.' : 'Questions? Contact us.'}</a>
                </div>
                <div className='footer__content register__footer-content'>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'C??u h???i th?????ng g???p' : 'FAQ'}</a>
                            </li>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'T??y ch???n cookie' : 'Investor Relations'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Trung t??m tr??? gi??p' : 'Help Center'}</a>
                            </li>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Th??ng tin doanh nghi???p' : 'Jobs'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? '??i???u kho???n s??? d???ng' : 'Account'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>
                                <a href='' className='footer__list-item-link'>{isVietNam ? 'Quy???n ri??ng t??' : 'Media Center'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='registration__footer-language'>
                    <button className='footer__language-btn registration__footer-language-btn' onClick={handleAppear} ref={homeLanguage}>
                        <FaGlobe />
                        <p className='footer__language-btn-text registration__footer-language-btn-text'>Ti???ng Vi???t</p>
                        <FaAngleDown />
                    </button>
                    {appear &&
                        <ul className='language-list registration__language-list'>
                            <li className='language__item registration__language-item' >Ti???ng Vi???t</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Registration))
