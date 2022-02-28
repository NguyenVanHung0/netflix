import HomeContent from './HomContent/HomeContent'
import NormalQuestion from './NormalQuestion/NormalQuestion'
import HomeFooter from './HomeFooter/HomeFooter'
import HomeHeader from './HomeHeader/HomeHeader'
import { Fragment } from 'react'

function Home() {
    return (
        <Fragment>
            <HomeHeader />
            <HomeContent />
            <NormalQuestion />
            <HomeFooter />
        </Fragment>
    )
}

export default Home
