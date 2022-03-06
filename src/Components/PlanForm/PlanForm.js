import './PlanForm.css'
import { connect } from 'react-redux'
import { FaGlobe, FaAngleDown } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withRouter from '../../router/withRouter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'




function SignUp(props) {
    let isVietNam = props.language == 'vietnam'
    const [active, setActive] = useState(0)
    const packageArray = ['Di động', 'Cơ bản', 'Tiêu chuẩn', 'Cao cấp']
    const packageArrayEng = ['Mobile', 'Basic', 'Standard', 'Premium']

    function handleClickNext() {
        props.setPackage(packageArray[active])
        const navigate = props.router.navigate
        navigate('/signup/payment')
    }

    const handleClickSelect = (index) => {
        setActive(index)
    }

    const allTdArray = document.querySelectorAll('tr td');
    allTdArray.forEach((td, index) => {
        td.classList.remove('planform__body-box-table-active')
    })

    useEffect(() => {
        const tdArray = document.querySelectorAll(`tr td:nth-child(${active + 2})`);
        tdArray.forEach((td, index) => {
            td.classList.add('planform__body-box-table-active')
        })
    }, [active])


    return (
        <div>
            <Header />
            <div className='planform__body'>
                <div className='planform__body-box'>
                    <div className='planform__body-box-header'>
                        <p className='planform__body-box-step'>
                            {isVietNam ? 'BƯỚC' : 'STEP'} <b>2</b>/<b>3</b>
                        </p>
                        <h3 className='planform__body-box-heading'>{isVietNam ? 'Chọn gói dịch vụ phù hợp với bạn' : 'Choose the plan that’s right for you'}</h3>
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
                                <p className='planform__body-box-item-text'>{isVietNam ? 'Xem mọi nội dung bạn muốn. Không có quảng cáo.' : 'Watch all you want. Ad-free.'}</p>
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
                                <p className='planform__body-box-item-text'>{isVietNam ? 'Đề xuất dành riêng cho bạn.' : 'Recommendations just for you.'}</p>
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
                                <p className='planform__body-box-item-text'>{isVietNam ? 'Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.' : 'Change or cancel your plan anytime.'}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='planform__body-box-package'>
                        <div className='planform__body-box-package-list'>
                            {
                                packageArray.map((pac, index) => {
                                    return (
                                        <div key={index} onClick={() => handleClickSelect(index)} className={active == index ? 'planform__body-box-package-item planform__body-box-package-item-active' : 'planform__body-box-package-item'}>
                                            {isVietNam ? pac : packageArrayEng[index]}
                                        </div>
                                    )
                                })
                            }

                            {/* <div className='planform__body-box-package-item'>
                                {isVietNam ? 'Cơ bản' : 'Basic'}
                            </div>
                            <div className='planform__body-box-package-item'>
                                {isVietNam ? 'Tiêu chuẩn' : 'Standard'}
                            </div>
                            <div className='planform__body-box-package-item'>
                                {isVietNam ? 'Cao cấp' : 'Premium'}
                            </div> */}
                        </div>
                    </div>
                    <table className='planform__body-box-table'>
                        <tbody>
                            <tr>
                                <td>{isVietNam ? 'Giá hàng tháng' : 'Monthly price'}</td>
                                <td>70.000đ</td>
                                <td>180.000đ</td>
                                <td>220.000đ</td>
                                <td>260.000đ</td>
                            </tr>
                            <tr>
                                <td>{isVietNam ? 'Chất lượng video' : 'Video quality'}</td>
                                <td>{isVietNam ? 'Tốt' : 'Good'}</td>
                                <td>{isVietNam ? 'Tốt' : 'Good'}</td>
                                <td>{isVietNam ? 'Tốt hơn' : 'Better'}</td>
                                <td>{isVietNam ? 'Tốt nhất' : 'Best'}</td>
                            </tr>
                            <tr>
                                <td>{isVietNam ? 'Độ phân giải' : 'Resolution'}</td>
                                <td>480p</td>
                                <td>480p</td>
                                <td>1080p</td>
                                <td>4K+HDR</td>
                            </tr>
                            <tr className='planform__body-box-table-lastChild-tr'>
                                <td>{isVietNam ? 'Các thiết bị bạn có thể dùng để xem' : 'Devices you can use to watch'}</td>
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
                                            {isVietNam ? 'Điện thoại' : 'Mobile'}
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
                                            {isVietNam ? 'Máy tính bảng' : 'Tablet'}
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
                                            {isVietNam ? 'Điện thoại' : 'Mobile'}
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
                                            {isVietNam ? 'Máy tính bảng' : 'Tablet'}
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
                                            {isVietNam ? 'Máy tính' : 'Computer'}
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
                                            {isVietNam ? 'Tivi' : 'TV'}
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
                                            {isVietNam ? 'Điện thoại' : 'Mobile'}
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
                                            {isVietNam ? 'Máy tính bảng' : 'Tablet'}
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
                                            {isVietNam ? 'Máy tính' : 'Computer'}
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
                                            {isVietNam ? 'Tivi' : 'TV'}
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
                                            {isVietNam ? 'Điện thoại' : 'Mobile'}
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
                                            {isVietNam ? 'Máy tính bảng' : 'Tablet'}
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
                                            {isVietNam ? 'Máy tính' : 'Computer'}
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
                                            {isVietNam ? 'Tivi' : 'TV'}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='planform__body-box-content'>
                        {isVietNam ? 'Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra HD (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả năng của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi độ phân giải. Xem' : 'HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our'} <a href='https://help.netflix.com/legal/termsofuse'> {isVietNam ? 'Điều khoản sử dụng' : 'Terms of User'}</a> {isVietNam ? 'của chúng tôi để biết thêm chi tiết.' : ' for more details.'}
                        <br /> <br />{isVietNam ? 'Chỉ những người sống cùng bạn mới có thể dùng tài khoản của bạn. Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp, 2 với gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.' : 'Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.'}
                    </div>
                    <div className='registration__body-btn signup__btn planform__btn-next'>
                        <button onClick={handleClickNext}>{isVietNam ? 'Tiếp theo' : 'Next'}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPackage: (packageSelect) => dispatch({ type: 'SET_PACKAGE', payload: packageSelect })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))