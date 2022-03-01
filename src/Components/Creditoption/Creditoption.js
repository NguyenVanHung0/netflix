import './Creditoption.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import visa from '../../assets/img/visa.svg'
import mastercard from '../../assets/img/mastercard.svg'
import amex from '../../assets/img/amex.svg'
import withRouter from '../../router/withRouter'

function Creditoption(props) {

    function handleClickChange() {
        const navigate = props.router.navigate
        navigate('/signup/planform')
    }

    return (
        <div className='creditoption'>
            <Header />

            <div className='creditoption__body'>
                <div className='creditoption__body-box'>
                    <div className='creditoption__body-header'>
                        <p>BƯỚC <b>3</b>/<b>3</b></p>
                        <h3>Thiết lập thẻ tín dụng hoặc thẻ ghi nợ</h3>
                    </div>
                    <div className='creditoption__body-content'>
                        <div className='creditoption__body-content-img'>
                            <img src={visa} />
                            <img src={mastercard} />
                            <img src={amex} />
                        </div>
                        <div className='creditoption__body-content-input'>
                            <input type='text' placeholder='Tên' />
                            <input type='text' placeholder='Họ' />
                            <input type='text' placeholder='Số thẻ' />
                            <input type='text' placeholder='Ngày hết hạn (MM/YY)' />
                            <input type='password' placeholder='Mã bảo mật (CVV)' />
                        </div>
                    </div>
                    <div className='creditoption__body-text'>
                        <div className='creditoption__body-text-price'>
                            <div className='creditoption__body-text-price-text'>
                                <p className='creditoption__body-text-price-textdark'>260.000 ₫/tháng</p>
                                <p className='creditoption__body-text-price-textlight'>Gói Cao cấp</p>
                            </div>
                            <button onClick={handleClickChange} className='creditoption__body-text-price-btn'>
                                Thay đổi
                            </button>
                        </div>
                        <p className='creditoption__body-text-1'>
                            Các khoản thanh toán của bạn sẽ được xử lý ở nước ngoài. Bạn có thể phải trả thêm phí ngân hàng.
                        </p>
                        <p className='creditoption__body-text-2'>
                            Bằng cách đánh dấu vào hộp kiểm bên dưới, bạn đồng ý với <a href=''>Điều khoản sử dụng</a>, <a href=''>Tuyên bố về quyền riêng tư</a> tư của chúng tôi, đồng thời xác nhận rằng bạn trên 18 tuổi. Netflix sẽ tự động gia hạn tư cách thành viên của bạn và tính phí thành viên (hiện tại là 260.000 ₫/tháng) vào phương thức thanh toán của bạn cho đến khi bạn hủy. Bạn có thể hủy bất kỳ lúc nào để tránh bị tính phí về sau.
                        </p>
                        <div className='creditoption__body-label'>
                            <input id='checkbox' type='checkbox' />
                            <label htmlFor='checkbox'>Tôi đồng ý</label>
                        </div>
                    </div>
                    <div className='reg__body-form-btn'>
                        <div className='registration__body-btn reg__body-form-btn-btn'>
                            <button>Kích hoạt tư cách thành viên</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default withRouter(Creditoption)
