import './NormalQuestion.css'
import { FaPlus, FaAngleRight } from 'react-icons/fa'
import { connect } from 'react-redux'
import withRouter from '../../../router/withRouter'
import { useRef, useState, useEffect } from 'react'
import { toast } from 'react-toastify'


function NormalQuestion(props) {
    const [accounts, setAccounts] = useState([])
    const isVietNam = props.language == 'vietnam'
    const inputElement = useRef()

    useEffect(() => {
        fetch('http://localhost:3000/account')
            .then(res => res.json())
            .then(accounts => {
                setAccounts(accounts)
            })
    }, [])

    function handleClickItem(e) {
        var supportItem = e.target.parentElement.querySelector('.home__question-item-support')
        var plusIcon = e.target.querySelector('.plus-icon')
        if (supportItem) {

            if (supportItem.style.display === 'none') {
                supportItem.style.display = 'block'
                plusIcon.style.transform = 'rotate(45deg)'
            }
            else {
                supportItem.style.display = 'none'
                plusIcon.style.transform = 'rotate(90deg)'
            }
        }
    }

    function handleClickChilren(e) {
        var supportItem = e.target.parentElement.parentElement.querySelector('.home__question-item-support')
        var plusIcon = e.target.parentElement.querySelector('.plus-icon')
        if (supportItem.style.display === 'none') {
            supportItem.style.display = 'block'
            plusIcon.style.transform = 'rotate(45deg)'
        }
        else {
            supportItem.style.display = 'none'
            plusIcon.style.transform = 'rotate(90deg)'
        }
    }

    function validateEmail(emailAdress) {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailAdress.match(regexEmail)) {
            return true;
        } else {
            return false;
        }
    }

    function handleClickGetStart() {
        if (inputElement.current.value != '') {
            if (validateEmail(inputElement.current.value)) {
                const isExist = accounts.find((account, index) => {
                    return account.email == inputElement.current.value
                })
                if (!isExist) {
                    const email = inputElement.current.value;
                    props.setEmail(email)
                    const navigate = props.router.navigate;
                    navigate('/signup/registration')
                }
                else {
                    toast.error('This email is already taken', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
            else {
                toast.error('Not an email', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        else {
            toast.error('Invalid email', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return (
        <div className='home__question'>
            <div className='home__question-header'>
                {isVietNam ? 'Câu hỏi thường gặp' : 'Frequently Asked Questions'}
            </div>
            <ul className='home__question-list'>
                <li className='home__question-item'>
                    <div className='home__question-item-main' onClick={(e) => handleClickItem(e)}>
                        <p className='home__question-item-content' onClick={(e) => handleClickChilren(e)}>{isVietNam ? 'Netflix là gì?' : 'What is Netflix?'}</p>
                        <FaPlus className='plus-icon' />
                    </div>
                    <div className='home__question-item-support' style={{ display: "none" }}>
                        {isVietNam ? 'Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.' : 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'}
                        <br /> <br />
                        {isVietNam ? 'Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!' : 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!'}
                    </div>
                </li>
                <li className='home__question-item'>
                    <div className='home__question-item-main' onClick={(e) => handleClickItem(e)}>
                        <p className='home__question-item-content' onClick={(e) => handleClickChilren(e)}>{isVietNam ? 'Tôi phải trả bao nhiêu tiền đễ xem Netflix?' : 'How much does Netflix cost?'}</p>
                        <FaPlus className='plus-icon' />
                    </div>
                    <div className='home__question-item-support' style={{ display: "none" }}>
                        {isVietNam ? 'Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.' : 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.'}
                    </div>
                </li>
                <li className='home__question-item'>
                    <div className='home__question-item-main' onClick={(e) => handleClickItem(e)}>
                        <p className='home__question-item-content' onClick={(e) => handleClickChilren(e)}>{isVietNam ? 'Tôi có thể xem ở đâu?' : 'Where can I watch?'}</p>
                        <FaPlus className='plus-icon' />
                    </div>
                    <div className='home__question-item-support' style={{ display: "none" }}>
                        {isVietNam ? 'Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.' : 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'}
                        <br /> <br />
                        {isVietNam ? 'Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.' : 'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'}
                    </div>
                </li>
                <li className='home__question-item'>
                    <div className='home__question-item-main' onClick={(e) => handleClickItem(e)}>

                        <p className='home__question-item-content' onClick={(e) => handleClickChilren(e)}>{isVietNam ? 'Làm thế nào để hủy?' : 'How do I cancel?'}</p>
                        <FaPlus className='plus-icon' />
                    </div>
                    <div className='home__question-item-support' style={{ display: "none" }}>
                        {isVietNam ? 'Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.' : 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'}
                    </div>
                </li>
                <li className='home__question-item'>
                    <div className='home__question-item-main' onClick={(e) => handleClickItem(e)}>
                        <p className='home__question-item-content' onClick={(e) => handleClickChilren(e)}>{isVietNam ? 'Tôi có thể xem gì trên Netflix?' : 'What can I watch on Netflix?'}</p>
                        <FaPlus className='plus-icon' />
                    </div>
                    <div className='home__question-item-support' style={{ display: "none" }}>
                        {isVietNam ? 'Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.' : 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'}
                    </div>
                </li>
                <li className='home__question-item'>
                    <div className='home__question-item-main' onClick={(e) => handleClickItem(e)}>
                        <p className='home__question-item-content' onClick={(e) => handleClickChilren(e)}>{isVietNam ? 'Netflix có phù hợp cho trẻ em không?' : 'Is Netflix good for kids?'}</p>
                        <FaPlus className='plus-icon' />
                    </div>
                    <div className='home__question-item-support' style={{ display: "none" }}>
                        {isVietNam ? 'Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng.' : 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'}
                        <br /> <br />
                        {isVietNam ? 'Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như chặn những phim hoặc chương trình mà bạn không muốn các em nhìn thấy.' : 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'}
                    </div>
                </li>
            </ul>
            <div className='home__question-input'>
                <p className='home__question-content-text'>{isVietNam ? 'Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.' : 'Ready to watch? Enter your email to create or restart your membership.'}</p>
                <div className='home__question-content-input'>
                    <input ref={inputElement} className='home__question-content-boxinput' type='email' placeholder={isVietNam ? 'Địa chỉ email' : 'Email address'} />
                    <div className='home__question-content-boxbtn'>
                        <span onClick={handleClickGetStart}>{isVietNam ? 'Bắt đầu' : 'Get Started'}</span>
                        <FaAngleRight className='home__question-icon-right' />
                    </div>
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
        setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NormalQuestion))
