import './PlanForm.css'
import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        navigate('/signup/payment')
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
            <div className='planform__body'>
                <div className='planform__body-box'>
                    <div className='planform__body-box-header'>
                        <p className='planform__body-box-step'>
                            BƯỚC <b>2</b>/<b>3</b>
                        </p>
                        <h3 className='planform__body-box-heading'>Chọn gói dịch vụ phù hợp với bạn</h3>
                        <ul className='planform__body-box-list'>
                            <li className='planform__body-box-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__body-box-item-icon" >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className='planform__body-box-item-text'>Xem mọi nội dung bạn muốn. Không có quảng cáo.</p>
                            </li>
                            <li className='planform__body-box-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__body-box-item-icon" >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className='planform__body-box-item-text'>Đề xuất dành riêng cho bạn.</p>
                            </li>
                            <li className='planform__body-box-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__body-box-item-icon" >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className='planform__body-box-item-text'>Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='planform__body-box-package'>
                        <div className='planform__body-box-package-list'>
                            <div className='planform__body-box-package-item planform__body-box-package-item-active'>
                                Di động
                            </div>
                            <div className='planform__body-box-package-item'>
                                Cơ bản
                            </div>
                            <div className='planform__body-box-package-item'>
                                Tiêu chuẩn
                            </div>
                            <div className='planform__body-box-package-item'>
                                Cao cấp
                            </div>
                        </div>
                    </div>
                    <table className='planform__body-box-table'>
                        <tbody>
                            <tr>
                                <td>Giá hàng tháng</td>
                                <td className='planform__body-box-table-active'>70.000đ</td>
                                <td>180.000đ</td>
                                <td>220.000đ</td>
                                <td>260.000đ</td>
                            </tr>
                            <tr>
                                <td>Chất lượng video</td>
                                <td className='planform__body-box-table-active'>Tốt</td>
                                <td>Tốt</td>
                                <td>Tốt hơn</td>
                                <td>Tốt nhất</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải</td>
                                <td className='planform__body-box-table-active'>480p</td>
                                <td>480p</td>
                                <td>1080p</td>
                                <td>4K+HDR</td>
                            </tr>
                            <tr className='planform__body-box-table-lastChild-tr'>
                                <td>Các thiết bị bạn có thể dùng để xem</td>
                                <td>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Điện thoại
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính bảng
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Điện thoại
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính bảng
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon" >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Tivi
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Điện thoại
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính bảng
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon" >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Tivi
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Điện thoại
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính bảng
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon" >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Máy tính
                                        </div>
                                    </div>
                                    <div className='planform__table-device'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planform__table-device-icon">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div className='planform__table-name-device'>
                                            Tivi
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='planform__body-box-content'>
                        Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra HD (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả năng của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi độ phân giải. Xem <a href=''> Điều khoản sử dụng</a> của chúng tôi để biết thêm chi tiết.
                        <br /> <br />Chỉ những người sống cùng bạn mới có thể dùng tài khoản của bạn. Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp, 2 với gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.
                    </div>
                    <div className='registration__body-btn signup__btn planform__btn-next'>
                        <button onClick={handleClickNext}>Tiếp theo</button>
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