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
            <Section category='trending' header='Trending Now' headerVien='Xu hướng' />
            <Section category='rated' header='Top Rated on Fakeflix' headerVien='Xếp hạng cao nhất trên Netflix' />
            <Section category='originals' header='Fakeflix Originals' headerVien='Nguyên bản Netflix' />
            <Section category='animation' header='Animation' headerVien='Hoạt hình' />
            <Footer />
        </div>
    )
}

export default BrowserHome
