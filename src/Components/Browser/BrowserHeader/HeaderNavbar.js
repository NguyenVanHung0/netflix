import { Link } from 'react-router-dom'
import account from '../../../assets/img/account.png'
import { useEffect, useRef, useState } from 'react'
import withRouter from '../../../router/withRouter'
import { connect } from 'react-redux'

function HeaderNavbar({ indexList, ...props }) {
    const isVietNam = props.language == 'vietnam'
    const [isInput, setIsInput] = useState(false)
    const [isSignOut, setIsSignOut] = useState(false)
    const header = useRef()
    const [isActive, setIsActive] = useState(0)
    const [linkHeader, setLinkHeader] = useState([])
    const linkEng = ['Home', 'TV Series', 'Movies', 'New & Popular', 'My List']

    useEffect(() => {
        if (isVietNam) {
            setLinkHeader(['Trang chủ', 'Truyền hình', 'Phim', 'Mới và phổ biến', 'Danh sách của tôi'])
        }
        else {
            setLinkHeader(['Home', 'TV Series', 'Movies', 'New & Popular', 'My List'])
        }
    }, [isVietNam])

    useEffect(() => {
        const handleScrollWindow = () => {
            if (window.scrollY > 100) {
                header.current ? header.current.style.backgroundColor = '#141414' : header.current.style.backgroundColor = '#141414'
            }
            else {
                header.current ? header.current.style.backgroundColor = 'transparent' : header.current.style.backgroundColor = 'transparent'
            }
        }

        window.addEventListener('scroll', handleScrollWindow)
        return () => {
            window.removeEventListener('scroll', handleScrollWindow)

        }
    })

    function handleClickSearch() {
        setIsInput(!isInput)
    }

    function handleClickAccount() {
        setIsSignOut(!isSignOut)
    }
    useEffect(() => {
        setIsActive(indexList)
    }, [])

    const handleSignOut = () => {
        const navigate = props.router.navigate
        navigate('/')
    }

    return (
        <div className='header-browser' ref={header}>
            <div className='header__logo--list'>
                <div className='header__logo-svg'>
                    <Link to='/'>
                        <svg viewBox="0 0 111 30" className='header__logo-img' >
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
                <ul className='header__logo-list'>
                    {linkHeader.map((link, index) => {
                        return (
                            <li key={index} className={isActive == index ? 'header__logo-item header__logo-item-active' : 'header__logo-item'}>
                                <Link to={'/' + linkEng[index].toLocaleLowerCase().replace(/\s+/g, '')}>
                                    {link}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='header__account'>
                <div className='header__account-search'>
                    {isInput &&
                        <div className='header__account-input'>
                            <input type='text' placeholder='Search titles, people' />
                        </div>
                    }
                    <svg onClick={handleClickSearch} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <div className='header__account-box'>
                    <div className='header__account-img' onClick={handleClickAccount}>
                        <img src={account} />
                    </div>
                    <div className='header__account-icon' onClick={handleClickAccount}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </div>
                    {isSignOut &&
                        <div onClick={handleSignOut} className='sign-out'>
                            Sign Out
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
}


export default connect(mapStateToProps)(withRouter(HeaderNavbar))
