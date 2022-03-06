import './MyList.css'
import HeaderNavbar from "../BrowserHeader/HeaderNavbar";
import { useEffect, useState } from 'react'

function MyList() {
    const [myList, setMyList] = useState([])
    const [a, setA] = useState(0)
    useEffect(() => {
        fetch('http://localhost:3000/myList')
            .then(res => res.json())
            .then(mylist => {
                setMyList(mylist)
            })

    }, [a])

    const handleClickMinus = (movie) => {
        fetch(`http://localhost:3000/myList/${movie.id}`, {
            method: 'DELETE',
            body: JSON.stringify(movie)
        })
        setA(prev => prev + 1)
    }


    return (
        <div className="mylist">
            <HeaderNavbar indexList='4' />
            <div className='mylist__body'>
                <div className='mylist__header'>
                    <h3>My List</h3>
                </div>
                <ul className='mylist__list'>
                    {myList.length > 0 ? myList.map((movie) => {
                        return (
                            <li key={movie.id} className='mylist__item'>
                                <img src={'https://image.tmdb.org/t/p/original//' + movie.img} />
                                <div className='mylist-item-content'>
                                    <div className='mylist-item-btn'>
                                        <div className='mylist-item-btn-play'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                            </svg>
                                        </div>
                                        <div className='mylist-item-btn-minus'>
                                            <svg onClick={() => handleClickMinus(movie)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                            </svg>

                                        </div>
                                        <div className='mylist-item-btn-down'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='mylist-item-name'>
                                        {movie.nameMovie}
                                    </div>
                                    <div className='mylist-item-category'>
                                        {movie.category}
                                    </div>
                                </div>
                            </li>
                        )
                    }) : <li className='message'>Sorry, you don't have a favourite movie or tv-show yet.</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default MyList