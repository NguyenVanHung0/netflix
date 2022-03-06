import './Section.css'
import { useState, useEffect, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'
import { connect } from 'react-redux'

function Section({ header, category, ...props }) {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState('')
    const [k, setK] = useState(1)
    const ulElement = useRef()
    const overlayRef = useRef()
    const detailBox = useRef()
    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(res => {
                return res.json()
            })
            .then(movies => {
                setMovies(movies)
            })
    }, [])

    const handleClickNext = () => {
        const liElements = document.querySelectorAll(`.section__body-item-${category}`)
        if (ulElement.current.getBoundingClientRect().x > -308 * (liElements.length - 4)) {
            ulElement.current.setAttribute('style', `transform: translateX(${-308 * k}px);`)
            setK(k + 1)
        }

    }

    const handleClickPrev = () => {
        if (ulElement.current.getBoundingClientRect().x < 0) {
            ulElement.current.setAttribute('style', `transform: translateX(${-308 * (k - 2)}px);`)
            setK(k - 1)
        }
    }

    const handleClickImg = (movie) => {
        setMovie(movie)
        overlayRef.current.style.display = 'flex'
    }

    const handleClickClose = () => {
        overlayRef.current.style.display = 'none'
    }

    const handleClickAddMovie = (e, movie) => {
        e.stopPropagation()
        fetch('http://localhost:3000/myList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(movie)
        })
        alert('Successful add movie')

    }


    return (
        <div className='section'>
            <div className='section__header'>
                <h3>
                    {header}
                </h3>
            </div>
            <div className='section__body'>
                <ul className='section__body-list' ref={ulElement}>
                    {movies.map((movie, index) => {
                        if (movie.category == category) {
                            return (
                                <li className={'section__body-item section__body-item-' + category} key={movie.id} onClick={() => handleClickImg(movie)}>
                                    <div className='section__body-item-overlay'></div>
                                    <img src={'https://image.tmdb.org/t/p/original//' + movie.img} />
                                    <div className='section__body-item-content'>
                                        <div className='section__body-item-btn'>
                                            <div className='section__body-item-btn-play'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                                </svg>
                                            </div>
                                            <div onClick={(e) => handleClickAddMovie(e, movie)} className='section__body-item-btn-add'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className='section__body-item-btn-down'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='section__body-item-name'>
                                            {movie.nameMovie}
                                        </div>
                                        <div className='section__body-item-category'>
                                            {movie.category}
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
                <svg onClick={handleClickNext} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="browser__icon right" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
                <svg onClick={handleClickPrev} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="browser__icon left" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                </svg>
            </div>
            <div className='window__overlay' ref={overlayRef}>
                <div className='detail__box' ref={detailBox}>
                    <div className='detail__box-img'>
                        <img src={'https://image.tmdb.org/t/p/original//' + movie.img} />
                        <div className='detail__box-play-btn'>
                            <button>
                                <FaPlay className='detail__box-play-btn-btn' />
                                Play
                            </button>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='plus-svg'>
                                <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                                ></path>
                            </svg>
                        </div>
                        <div className='detail__box-close-btn'>
                            <svg onClick={handleClickClose} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path>
                            </svg>
                        </div>
                        <div className='img-shadow'></div>
                    </div>
                    <div className='detail__box-content'>
                        <div className='detail__box-header'>
                            <div className='detail__box-name'>
                                {movie.nameMovie}
                            </div>
                            <div className='detail__box-description'>
                                {movie.description}
                            </div>
                        </div>
                        <hr />
                        <div className='detail__box-info'>
                            <div className='detail__box-info-header'>
                                Info on {movie.nameMovie}
                            </div>
                            <div className='detail__box-info-content'>

                                <div className='detail__box-info-row'>
                                    <span className='detail__box-info-colum1'>
                                        Genres:
                                    </span>
                                    <span className='detail__box-info-colum2'>
                                        Action, Adventure, Thriller
                                    </span>
                                </div>
                                <div className='detail__box-info-row'>
                                    <span className='detail__box-info-colum1'>
                                        Release date::
                                    </span>
                                    <span className='detail__box-info-colum2'>
                                        2021
                                    </span>
                                </div>
                                <div className='detail__box-info-row'>
                                    <span className='detail__box-info-colum1'>
                                        Average vote:
                                    </span>
                                    <span className='detail__box-info-colum2'>
                                        7.1
                                    </span>
                                </div>
                                <div className='detail__box-info-row'>
                                    <span className='detail__box-info-colum1'>
                                        Original language:
                                    </span>
                                    <span className='detail__box-info-colum2'>
                                        en
                                    </span>
                                </div>
                                <div className='detail__box-info-row'>
                                    <span className='detail__box-info-colum1'>
                                        Age classification:
                                    </span>
                                    <span className='detail__box-info-colum2'>
                                        Suitable for all ages
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section)
