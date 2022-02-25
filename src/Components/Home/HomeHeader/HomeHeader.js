import './HomeHeader.css'
import { FaGlobe, FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

function Home() {
    const [appear, setAppear] = useState(false)
    const homeLanguage = useRef()

    useOutsideAlerter(homeLanguage, setAppear);
    function handleAppear() {
        setAppear(!appear)
        if (homeLanguage.current && appear === false) {
            console.log('hi')
            homeLanguage.current.style.borderRadius = '4px'
        }
        else {
            homeLanguage.current.style.borderRadius = '2px'
        }
    }

    // function handleClickOutSide() {
    //     console.log('click on window')
    //     setAppear(false)
    //     homeLanguage.current.prevenDefault()
    // }

    return (
        <div className="home">
            <div className='cover-layer'></div>
            <div className="home__header">
                <div className="home__logo">
                    <svg viewBox="0 0 111 30" className='home__logo-img' >
                        <g>
                            <path
                                fill='#e50914'
                                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                                id="Fill-14"
                            ></path>
                        </g>
                    </svg>
                </div>
                <div className='home__language-login'>
                    <div className='home__language' ref={homeLanguage}>
                        <FaGlobe onClick={handleAppear} />
                        <p className='home__language-text' onClick={handleAppear}>Tiếng Việt</p>
                        <FaAngleDown className='home-icon-down' onClick={handleAppear} />
                        {appear && <ul className='language-list language-position'>
                            <li className='language__item active--language'>Tiếng Việt</li>
                            <li className='language__item'>English</li>
                        </ul>
                        }

                    </div>
                    <div className='home__login'>
                        <Link to='/login'>Đăng nhập</Link>
                    </div>
                </div>
            </div>
            <div className='home__content'>
                <h2 className='home__content-heading'>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h2>
                <p className='home__content-description'>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
                <p className='home__content-text'>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</p>
                <div className='home__content-input'>
                    <input className='home__content-boxinput' type='email' placeholder='Địa chỉ email' />
                    <div className='home__content-boxbtn'>
                        <span>Bắt đầu</span>
                        <FaAngleRight className='home__icon-right' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home