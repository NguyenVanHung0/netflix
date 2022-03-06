import './Footer.css'
import { Link } from 'react-router-dom'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import withRouter from '../../router/withRouter'
import { connect } from 'react-redux'

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

function Footer(props) {

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

    const handleChangeLanguage = (language) => {
        props.changeLanguage(language);
    }

    return (
        <div className='footer registration__footer'>
            <div className='footer__header'>
                <a href='https://help.netflix.com/vi/contactus'>{isVietNam ? 'Bạn có câu hỏi? Liên hệ với chúng tôi.' : 'Questions? Contact us.'}</a>
            </div>
            <div className='footer__content register__footer-content'>
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
            <div className='registration__footer-language' ref={homeLanguage}>
                <button className='footer__language-btn registration__footer-language-btn' onClick={handleAppear}>
                    <FaGlobe />
                    <p className='footer__language-btn-text registration__footer-language-btn-text'>{isVietNam ? 'Tiếng Việt' : 'English'}</p>
                    <FaAngleDown />
                </button>
                {appear &&
                    <ul className='language-list registration__language-list'>
                        <li className='language__item registration__language-item' onClick={() => handleChangeLanguage('vietnam')}>Tiếng Việt</li>
                        <li className='language__item registration__language-item' onClick={() => handleChangeLanguage('english')}>English</li>
                    </ul>
                }

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer))
