import { connect } from 'react-redux'
import { FaRegCheckCircle } from 'react-icons/fa'
import './SignUp.css'
import withRouter from '../../router/withRouter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function SignUp(props) {
    let isVietNam = props.language == 'vietnam'

    function handleClickNext() {
        const navigate = props.router.navigate
        navigate('/signup/planform')
    }

    return (
        <div>
            <Header />
            <div className='signup__body'>
                <div className='signup__body-box'>
                    <div className='signup__body-content'>
                        <div className='signup__body-icon'>
                            <FaRegCheckCircle className='signup__body-icon-icon' />
                        </div>
                        <div className='signup__body-header'>
                            <p className='signup__body-header-step'>{isVietNam ? 'BƯỚC' : 'STEP'} <b>1</b>/<b>3</b></p>
                            <h3>{isVietNam ? 'Chọn gói dịch vụ của bạn.' : 'Choose your plan.'}</h3>
                        </div>
                        <ul className='signup__body-list'>
                            <li className='signup__body-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup__body-item-icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                {isVietNam ? 'Không yêu cầu cam kết, hủy bất kỳ lúc nào.' : 'No commitments, cancel anytime.'}
                            </li>
                            <li className='signup__body-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup__body-item-icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                {isVietNam ? 'Mọi thứ trên Netflix chỉ với mức giá thấp.' : 'Everything on Netflix for one low price.'}
                            </li>
                            <li className='signup__body-item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup__body-item-icon">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                {isVietNam ? 'Không quảng cáo, không phụ phí. Luôn luôn như vậy.' : 'No ads and no extra fees. Ever.'}
                            </li>
                        </ul>
                        <div className='registration__body-btn signup__btn'>
                            <button onClick={handleClickNext}>{isVietNam ? 'Tiếp theo' : 'Next'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { language: state.language }
}



export default connect(mapStateToProps)(withRouter(SignUp))