import { useRef } from 'react'
import { toast } from 'react-toastify'
import { FaPlay } from 'react-icons/fa'
import withRouter from '../../router/withRouter'
import { connect } from 'react-redux'

function DetailMovie({ movie, overlayRef, btn, setA, ...props }) {
    const detailBox = useRef()

    const handleClickPlay = (moviePlay) => {
        if (moviePlay) {
            props.setMoviePlay(moviePlay)
            const navigate = props.router.navigate
            navigate('/movie')
            overlayRef.current.style.display = 'none'
        }
    }

    const handleClickAddMyList = () => {
        fetch('http://localhost:3000/myList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
        toast.success('successful add movie', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleClickClose = () => {
        overlayRef.current.style.display = 'none'
    }

    const handleClickMinus = () => {
        fetch(`http://localhost:3000/myList/${movie.id}`, {
            method: 'DELETE',
            body: JSON.stringify(movie)
        })
        toast.success('successful delete movie', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setA(prev => prev + 1)
        overlayRef.current.style.display = 'none'
    }

    return (
        <div className='window__overlay' ref={overlayRef}>
            <div className='detail__box'>
                <div className='detail__box-img'>
                    <img src={'https://image.tmdb.org/t/p/original//' + movie.img} />
                    <div className='detail__box-play-btn'>
                        <button onClick={() => handleClickPlay(movie)}>
                            <FaPlay className='detail__box-play-btn-btn' />
                            Play
                        </button>
                        {btn == 'plus' ?
                            <svg onClick={handleClickAddMyList} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='plus-svg'>
                                <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                                ></path>
                            </svg> : <div className='mylist-item-btn-minus'>
                                <svg onClick={handleClickMinus} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>

                            </div>
                        }

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailMovie))
