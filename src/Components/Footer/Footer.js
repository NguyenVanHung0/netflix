import './Footer.css'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__header'>
                <a href=''>Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
            </div>
            <div className='footer__content'>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Câu hỏi thường gặp</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Quan hệ với nhà đầu tư</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Quyền riêng tư</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Tốc độ</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Trung tâm trợ giúp</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Việc làm</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Tùy chọn cookie</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Thông báo pháp lí</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Tài khoản</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Các cách xem</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Thông tin doanh nghiệp</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Chỉ có trên Netflix</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Trung tâm đa phương tiện</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Điều khoản sử dụng</a>
                        </li>
                        <li className='footer__list-item'>
                            <a href='' className='footer__list-item-link'>Liên hệ với chúng tôi</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__language'>
                <div className='footer__language-selection'>
                    <button className='footer__language-btn'>
                        <FaGlobe />
                        <p className='footer__language-btn-text'>Tiếng Việt</p>
                        <FaAngleDown />
                    </button>
                    <ul className='language-list'>
                        <li className='language__item active--language'>Tiếng Việt</li>
                        <li className='language__item'>English</li>
                    </ul>
                    <p className='footer__name-web'>Netflix Việt Nam</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
