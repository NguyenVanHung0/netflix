import './HomeContent.css'
import { FaAngleRight } from 'react-icons/fa'
import android from '../../../assets/img/android.jpg'
import { connect } from 'react-redux'

function HomeContent(props) {
    const isVietNam = props.language == 'vietnam'
    return (
        <div className='home__android-content'>
            <div className='home__android-content-text'>
                <div className='home__android-content-header'>
                    {isVietNam ? 'Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới của chúng tôi!' : 'Have an Android Phone? Get our new free plan!'}
                </div>
                <div className='home__android-content-description'>
                    {isVietNam ? 'Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà không cần cung cấp thông tin thanh toán!' : 'Watch a selection of new movies and TV shows without adding any payment details!'}
                </div>
                <div className='hom__content-link'>
                    <a href='https://play.google.com/store/apps/details?id=com.netflix.mediaclient'>
                        {isVietNam ? 'Tải ứng dụng' : 'Get the app'}
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

const mapStateToProps = (state) => {
    return { language: state.language }
}

export default connect(mapStateToProps)(HomeContent)
