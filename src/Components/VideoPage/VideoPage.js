import './VideoPage.css'
import { connect } from 'react-redux'
import HeaderNavbar from '../Browser/BrowserHeader/HeaderNavbar'
import { useEffect, useState, useRef } from 'react'
import account from '../../assets/img/account.png'
import Footer from '../Footer/Footer'
import DetailMovie from '../DetailMovie/DetailMovie'
import { toast } from 'react-toastify'

function VideoPage(props) {
    const [k, setK] = useState(0)
    const [listMovies, setListMovie] = useState([])
    const [publishBox, setPublishBox] = useState(false)
    const [accounts, setAccounts] = useState([])
    const inputComment = useRef()
    const [comments, setComments] = useState([])
    const overlayRef = useRef()
    const [movie, setMovie] = useState('')


    useEffect(() => {
        fetch('http://localhost:3000/comment')
            .then(res => res.json())
            .then(comments => {
                const commentSuitable = comments.filter((comment) => {
                    return comment.idMovie == props.moviePlay.id
                })
                setComments(commentSuitable)
            })
    }, [k])

    useEffect(() => {
        fetch('http://localhost:3000/account')
            .then(res => res.json())
            .then(accounts => {
                setAccounts(accounts)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(movies => {
                const listMV = movies.filter((item, index) => {
                    return item.nameMovie != props.moviePlay.nameMovie && item.category == props.moviePlay.category
                })
                setListMovie(listMV)
            })
    }, [props.moviePlay])

    const handleClickPlay = (e, moviePlay) => {
        if (moviePlay) {
            props.setMoviePlay(moviePlay)
            e.stopPropagation()
        }
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


    const handleClickImg = (movie) => {
        setMovie(movie)
        overlayRef.current.style.display = 'flex'
    }

    const handleClickInput = (e) => {
        e.stopPropagation()
        setPublishBox(true)
    }

    const handleClickPublishBox = (e) => {
        e.stopPropagation()
    }

    const handleClickOutInput = () => {
        setPublishBox(false)
    }

    const handleClickPublish = () => {
        if (inputComment.current.value) {
            const data = {
                idMovie: props.moviePlay.id,
                name: accounts[accounts.length - 1].firstName + ' ' + accounts[accounts.length - 1].lastName,
                comment: inputComment.current.value
            }
            fetch('http://localhost:3000/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        inputComment.current.value = ''
        inputComment.current.focus()
        setK(prev => prev + 1)
    }


    return (
        <div className='video__page'>
            <HeaderNavbar />
            <div className='video__page-video-header'>
                <div className='video__page-vieo'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Yq4n0upxFVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='video__page-header'>
                    <h3>{props.moviePlay.nameMovie}</h3>
                    <p className='video__page-header-secription'>
                        {props.moviePlay.description}
                    </p>
                </div>
            </div>
            <div className='video__page-list'>
                <h3>Có thể bạn thích xem</h3>
                <ul className='video__page-list-movie'>
                    {listMovies && listMovies.map((movie, index) => {
                        return (
                            <li key={movie.id} className='video__page-item' onClick={() => handleClickImg(movie)}>
                                <img src={'https://image.tmdb.org/t/p/original//' + movie.img} />
                                <div className='video__page-item-content'>
                                    <div className='video__page-item-btn'>
                                        <div onClick={(e) => handleClickPlay(e, movie)} className='video__page-item-btn-play'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                            </svg>
                                        </div>
                                        <div onClick={(e) => handleClickAddMovie(e, movie)} className='video__page-item-btn-add'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                                                ></path>
                                            </svg>

                                        </div>
                                        <div className='video__page-item-btn-down'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='video__page-item-name'>
                                        {movie.nameMovie}
                                    </div>
                                    <div className='video__page-item-category'>
                                        {movie.category}
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
            <div className='video__page-comment' onClick={handleClickOutInput}>
                <div className='video__page-comment-header'>
                    Thêm bình luận
                </div>
                <div className='video__page-comment-body'>
                    <div className='video__page-comment-entry'>
                        <div className='video__page-comment-entry-up'>
                            <img src={account} />
                            <input onClick={(e) => handleClickInput(e)} ref={inputComment} type='text' placeholder='Thêm bình luận' />
                        </div>
                        {publishBox &&
                            <div className='publish' onClick={handleClickPublishBox}>
                                <button onClick={handleClickPublish}>Đăng</button>
                            </div>
                        }

                    </div>
                    <ul className='video__page-comment-list'>
                        {comments && comments.map((comment, index) => {
                            return (
                                <li key={index} className='video__page-comment-item'>
                                    <img src={account} />
                                    <div className='video__page-comment-item-content'>
                                        <h3>{comment.name}</h3>
                                        <p className='video__page-comment-item-text'>
                                            {comment.comment}
                                        </p>
                                        <div className='video__page-comment-item-like'>
                                            <p className='like'>Thích</p>
                                            <p className='feedback'>Phản hồi</p>
                                            <p className='time'>2 ngày</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <Footer />
            <DetailMovie movie={movie} overlayRef={overlayRef} btn='plus' />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language,
        moviePlay: state.moviePlay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMoviePlay: (movie) => dispatch({ type: 'SET_MOVIEPLAY', payload: movie })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)
