import './Footer.css'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
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
    const [appear, setAppear] = useState(false)
    const homeLanguage = useRef()
    let isVietNam = props.language == 'vietnam'

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

    function handleChangeVietNam() {
        let language = 'vietnam'
        props.changeLanguage(language);
    }

    function handleChangeEnglish() {
        let language = 'english'
        props.changeLanguage(language);
    }



    return (
        <div className='footer'>
            <div className='footer__header'>
                <a href=''>{isVietNam ? 'Bạn có câu hỏi? Liên hệ với chúng tôi.' : 'Questions? Contact us.'}</a>
            </div>
            <div className='footer__content'>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Câu hỏi thường gặp' : 'FAQ'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Quan hệ với nhà đầu tư' : 'Investor Relations'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Quyền riêng tư' : 'Privacy'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Tốc độ' : 'Speed Test'}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Trung tâm trợ giúp' : 'Help Center'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Việc làm' : 'Jobs'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Tùy chọn cookie' : 'Cookie Preferences'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Thông báo pháp lí' : 'Legal Notices'}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Tài khoản' : 'Account'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Các cách xem' : 'Ways to Watch'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Thông tin doanh nghiệp' : 'Corporate Information'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Chỉ có trên Netflix' : 'Only on Netflix'}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Trung tâm đa phương tiện' : 'Media Center'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Điều khoản sử dụng' : 'Media Center'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Liên hệ với chúng tôi' : 'Contact Us'}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__language'>
                <div className='footer__language-selection'>
                    <button className='footer__language-btn' onClick={handleAppear} ref={homeLanguage}>
                        <FaGlobe />
                        <p className='footer__language-btn-text'>Tiếng Việt</p>
                        <FaAngleDown />
                    </button>
                    {appear && <ul className='language-list'>
                        <li className='language__item' onClick={handleChangeVietNam}>Tiếng Việt</li>
                        <li className='language__item' onClick={handleChangeEnglish}>English</li>
                    </ul>
                    }
                    <p className='footer__name-web'>{isVietNam ? 'Netflix Việt Nam' : 'Netflix Vietnam'}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Footer)
