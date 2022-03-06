import './HomeFooter.css'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import withRouter from '../../../router/withRouter';
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

    const handleAppear = () => {
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
        console.log(language)
    }


    return (
        <div className='footer'>
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
                            <a href='https://ir.netflix.net/ir-overview/profile/default.aspx' className='footer__list-item-link'>{isVietNam ? 'Quan hệ với nhà đầu tư' : 'Privacy'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://help.netflix.com/legal/privacy' className='footer__list-item-link'>{isVietNam ? 'Quyền riêng tư' : 'Media Center'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://fast.com/' className='footer__list-item-link'>{isVietNam ? 'Tốc độ' : 'Speed Test'}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='https://help.netflix.com/vi/' className='footer__list-item-link'>{isVietNam ? 'Trung tâm trợ giúp' : 'Help Center'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://jobs.netflix.com/' className='footer__list-item-link'>{isVietNam ? 'Việc làm' : 'Jobs'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>{isVietNam ? 'Tùy chọn cookie' : 'Investor Relations'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://help.netflix.com/legal/notices' className='footer__list-item-link'>{isVietNam ? 'Thông báo pháp lí' : 'Legal Notices'}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='https://www.netflix.com/youraccount' className='footer__list-item-link'>{isVietNam ? 'Tài khoản' : 'Account'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://devices.netflix.com/fr/' className='footer__list-item-link'>{isVietNam ? 'Các cách xem' : 'Ways to Watch'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://help.netflix.com/legal/corpinfo' className='footer__list-item-link'>{isVietNam ? 'Thông tin doanh nghiệp' : 'Corporate Information'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://www.netflix.com/vn/browse/genre/839338' className='footer__list-item-link'>{isVietNam ? 'Chỉ có trên Netflix' : 'Only on Netflix'}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='https://media.netflix.com/fr/' className='footer__list-item-link'>{isVietNam ? 'Trung tâm đa phương tiện' : 'Media Center'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://help.netflix.com/legal/termsofuse' className='footer__list-item-link'>{isVietNam ? 'Điều khoản sử dụng' : 'Terms of Use'}</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='https://help.netflix.com/vi/contactus' className='footer__list-item-link'>{isVietNam ? 'Liên hệ với chúng tôi' : 'Contact Us'}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__language'>
                <div className='footer__language-selection' ref={homeLanguage} >
                    <button className='footer__language-btn' onClick={handleAppear} >
                        <FaGlobe />
                        <p className='footer__language-btn-text'>{isVietNam ? 'Tiếng Việt' : 'English'}</p>
                        <FaAngleDown />
                    </button>
                    {appear && <ul className='language-list'>
                        <li className='language__item' onClick={() => handleChangeLanguage('vietnam')}>Tiếng Việt</li>
                        <li className='language__item' onClick={() => handleChangeLanguage('english')}>English</li>
                    </ul>
                    }
                    <p className='footer__name-web'>Netflix Việt Nam</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer))
