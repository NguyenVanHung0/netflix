import './BrowserHome.css'
import BrowserHeader from '../BrowserHeader/BrowserHeader'
import Section from '../BrowserBody/Section/Section'
import Footer from '../../Footer/Footer'
import TVSeries from '../BrowserBody/TVSeries'
import { Routes, Route } from 'react-router-dom'


function BrowserHome() {
    return (
        <div>
            <BrowserHeader indexList='0' />
            <Section category='trending' header='Trending Now' />
            <Section category='rated' header='Top Rated on Fakeflix' />
            <Section category='originals' header='Fakeflix Originals' />
            <Section category='animation' header='Animation' />
            <Footer />
        </div>
    )
}

export default BrowserHome
