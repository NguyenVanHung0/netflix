import './HomeContent.css'
import { FaAngleRight } from 'react-icons/fa'
import android from '../../../assets/img/android.jpg'

function HomeContent() {
    return (
        <div className='home__android-content'>
            <div className='home__android-content-text'>
                <div className='home__android-content-header'>
                    Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới của chúng tôi!
                </div>
                <div className='home__android-content-description'>
                    Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà không cần cung cấp thông tin thanh toán!
                </div>
                <div className='hom__content-link'>
                    <a href=''>
                        Tải ứng dụng
                        <FaAngleRight className='home__icon-right2' />
                    </a>
                </div>
            </div>
            <div className='home__android-content-img'>
                <img src={android} />
            </div>
        </div>
    )
}

export default HomeContent
