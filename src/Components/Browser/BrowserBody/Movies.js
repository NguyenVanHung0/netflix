import Section from "./Section/Section";
import BrowserHeader from '../BrowserHeader/BrowserHeader'
import Footer from "../../Footer/Footer";

function Movies() {
    return (
        <>
            <BrowserHeader indexList='2' />
            <Section category='trending' header='Trending Now' />
            <Section category='rated' header='Top Rated on Fakeflix' />
            <Section category='originals' header='Fakeflix Originals' />
            <Section category='animation' header='Animation' />
            <Footer />
        </>
    )
}

export default Movies