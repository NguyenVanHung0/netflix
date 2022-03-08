import './Creditoption.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import visa from '../../assets/img/visa.svg'
import mastercard from '../../assets/img/mastercard.svg'
import amex from '../../assets/img/amex.svg'
import withRouter from '../../router/withRouter'
import { connect } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

function Creditoption(props) {
    const isVietNam = props.language == 'vietnam'

    const [packages, setPackages] = useState([])
    const [selectPackage, setSelectPackage] = useState({})

    const firstName = useRef()
    const lastName = useRef()
    const cardNumber = useRef()
    const inputCheckBox = useRef()
    const date = useRef()
    const password = useRef()

    useEffect(() => {
        fetch('http://localhost:3000/package')
            .then(res => res.json())
            .then(packagess => {
                setPackages(packagess)
            })
    }, [])

    useEffect(() => {
        if (packages.length > 0) {

            packages.forEach((Item, index) => {
                if (Item.name == props.package) {
                    setSelectPackage(Item)
                }
            })
        }
    }, [packages])


    function handleClickChange() {
        const navigate = props.router.navigate
        navigate('/signup/planform')
    }

    function handleClickCreBtn() {
        if (firstName.current.value == '') {

            isVietNam ? toast.error(`Thiếu ${firstName.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error(`Invalid ${firstName.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
        if (lastName.current.value == '') {
            isVietNam ? toast.error(`Thiếu ${lastName.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error(`Invalid ${lastName.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
        if (cardNumber.current.value == '') {
            isVietNam ? toast.error(`Thiếu ${cardNumber.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error(`Invalid ${cardNumber.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
        if (date.current.value == '') {
            isVietNam ? toast.error(`Thiếu ${date.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error(`Invalid ${date.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
        if (password.current.value == '') {
            isVietNam ? toast.error(`Thiếu ${password.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error(`Invalid ${password.current.placeholder}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
        if (!inputCheckBox.current.checked) {
            isVietNam ? toast.error(`Bạn cần click đồng ý`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error(`you need to click agree`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
        if (firstName.current.value && lastName.current.value && cardNumber.current.value && date.current.value && password.current.value && inputCheckBox.current.checked) {
            const account = {
                language: props.language,
                email: props.email,
                passwordAcc: props.password,
                package: props.package,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                cardNumber: cardNumber.current.value,
                date: date.current.value,
                passwordCard: password.current.value
            }

            fetch('http://localhost:3000/account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            })

            const navigate = props.router.navigate
            navigate('/login')
        }
    }

    return (
        <div className='creditoption'>
            <Header />

            <div className='creditoption__body'>
                <div className='creditoption__body-box'>
                    <div className='creditoption__body-header'>
                        <p>{isVietNam ? 'BƯỚC' : 'STEP'} <b>3</b>/<b>3</b></p>
                        <h3>{isVietNam ? 'Thiết lập thẻ tín dụng hoặc thẻ ghi nợ' : 'Set up your credit or debit card'}</h3>
                    </div>
                    <div className='creditoption__body-content'>
                        <div className='creditoption__body-content-img'>
                            <img src={visa} />
                            <img src={mastercard} />
                            <img src={amex} />
                        </div>
                        <div className='creditoption__body-content-input'>
                            <input ref={firstName} type='text' placeholder={isVietNam ? 'Tên' : 'First Name'} />
                            <input ref={lastName} type='text' placeholder={isVietNam ? 'Họ' : 'Last Name'} />
                            <input ref={cardNumber} type='text' pattern='[0-9]' placeholder={isVietNam ? 'Số thẻ' : 'Card Number'} />
                            <input ref={date} type='text' placeholder={isVietNam ? 'Ngày hết hạn (MM/YY)' : 'Expiration date(MM/YY)'} />
                            <input ref={password} type='password' placeholder={isVietNam ? 'Mã bảo mật (CVV)' : 'Security code (CVV)'} />
                        </div>
                    </div>
                    <div className='creditoption__body-text'>
                        <div className='creditoption__body-text-price'>
                            <div className='creditoption__body-text-price-text'>
                                <p className='creditoption__body-text-price-textdark'>{selectPackage.price} ₫/{isVietNam ? 'tháng' : 'month'}</p>
                                <p className='creditoption__body-text-price-textlight'>{isVietNam ? selectPackage.name : selectPackage.nameEng}</p>
                            </div>
                            <button onClick={handleClickChange} className='creditoption__body-text-price-btn'>
                                {isVietNam ? 'Thay đổi' : 'Change'}
                            </button>
                        </div>
                        <p className='creditoption__body-text-1'>
                            {isVietNam ? 'Các khoản thanh toán của bạn sẽ được xử lý ở nước ngoài. Bạn có thể phải trả thêm phí ngân hàng.' : 'Your payments will be processed internationally. Additional bank fees may apply.'}
                        </p>
                        <p className='creditoption__body-text-2'>
                            {isVietNam ? 'Bằng cách đánh dấu vào hộp kiểm bên dưới, bạn đồng ý với' : 'By checking the checkbox below, you agree to our'} <a href='https://help.netflix.com/legal/termsofuse'>{isVietNam ? 'Điều khoản sử dụng' : 'Terms of User'}</a>, <a href='https://help.netflix.com/legal/privacy'>{isVietNam ? 'Tuyên bố về quyền riêng tư' : 'Privacy Statement'}</a> {isVietNam ? `tư của chúng tôi, đồng thời xác nhận rằng bạn trên 18 tuổi. Netflix sẽ tự động gia hạn tư cách thành viên của bạn và tính phí thành viên (hiện tại là ${selectPackage.price} ₫/tháng) vào phương thức thanh toán của bạn cho đến khi bạn hủy. Bạn có thể hủy bất kỳ lúc nào để tránh bị tính phí về sau.` : `, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ${selectPackage.price} ₫/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.`}
                        </p>
                        <div className='creditoption__body-label'>
                            <input id='checkbox' ref={inputCheckBox} type='checkbox' />
                            <label htmlFor='checkbox'>{isVietNam ? 'Tôi đồng ý' : 'I agree'}</label>
                        </div>
                    </div>
                    <div className='reg__body-form-btn'>
                        <div className='registration__body-btn reg__body-form-btn-btn'>
                            <button onClick={handleClickCreBtn}>{isVietNam ? 'Kích hoạt tư cách thành viên' : 'Start Membership'}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language,
        package: state.package,
        email: state.email,
        password: state.password
    }
}

export default connect(mapStateToProps)(withRouter(Creditoption))
