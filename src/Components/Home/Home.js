import HomeContent from './HomContent/HomeContent'
import NormalQuestion from './NormalQuestion/NormalQuestion'
import Footer from '../Footer/Footer'
import HomeHeader from './HomeHeader/HomeHeader'
import { Fragment } from 'react'

function Home() {
    return (
        <Fragment>
            <HomeHeader />
            <HomeContent />
            <NormalQuestion />
            <Footer />
        </Fragment>
    )
}

export default Home
