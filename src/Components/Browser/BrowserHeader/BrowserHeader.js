import './BrowserHeader.css'
import HeaderNavbar from './HeaderNavbar'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import withRouter from '../../../router/withRouter'
import DetailMovie from '../../DetailMovie/DetailMovie'


function BrowserHeader({ indexList, ...props }) {
    const isVietNam = props.language == 'vietnam'
    const [movies, setMovies] = useState([])
    const overlayRef = useRef()
    const random = Math.floor(Math.random() * 80)
    const [a, setA] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then((res) => {
                return res.json();
            })
            .then((movies) => {
                setMovies(movies)
            })
    }, [])

    const handleClickPlay = (moviePlay) => {
        if (moviePlay) {
            props.setMoviePlay(moviePlay)
            const navigate = props.router.navigate
            navigate('/movie')
        }
    }

    const handleClickImg = () => {
        overlayRef.current.style.display = 'flex'
    }



    return (
        <div className='header-banner' style={movies.length > 0 ? { background: `url("https://image.tmdb.org/t/p/original//${movies[random].img}") top left / cover no-repeat` } : {}}>
            <div className='header-banner-overlay'>

                <HeaderNavbar indexList={indexList} />

                <div className='banner'>
                    <div className='banner__header'>
                        {movies.length > 0 &&
                            <h3>{movies[random].nameMovie}</h3>
                        }

                    </div>
                    <div className='banner__btn'>
                        <button onClick={() => handleClickPlay(movies[random])} className='banner__btn-play'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                            </svg>
                            {isVietNam ? 'Phát' : 'Play'}
                        </button>
                        <button className='banner__btn-inf' onClick={handleClickImg}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                            </svg>
                            {isVietNam ? 'Thêm thông tin' : 'More info'}
                        </button>
                    </div>
                    {movies.length > 0 &&
                        <div className='banner__text'>
                            {movies[random].description}
                        </div>
                    }

                    <div className='banner__shadow'></div>
                </div>
            </div>
            <DetailMovie movie={movies.length > 0 && movies[random]} overlayRef={overlayRef} btn='plus' setA={setA} />
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMoviePlay: (movie) => dispatch({ type: 'SET_MOVIEPLAY', payload: movie })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BrowserHeader))
