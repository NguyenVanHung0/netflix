import Section from "./Section/Section";
import BrowserHeader from '../BrowserHeader/BrowserHeader'
import Footer from "../../Footer/Footer";

function TVSeries() {
    return (
        <>
            <BrowserHeader indexList='1' />
            <Section category='trending' header='Trending Now' />
            <Section category='rated' header='Top Rated on Fakeflix' />
            <Section category='originals' header='Fakeflix Originals' />
            <Section category='animation' header='Animation' />
            <Footer />
        </>
    )
}

export default TVSeries
