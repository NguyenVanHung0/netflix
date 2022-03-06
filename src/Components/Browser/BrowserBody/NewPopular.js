import Section from "./Section/Section";
import BrowserHeader from '../BrowserHeader/BrowserHeader'
import Footer from "../../Footer/Footer";

function NewPopular() {
    return (
        <>
            <BrowserHeader indexList='3' />
            <Section category='trending' header='Trending Now' />
            <Section category='rated' header='Top Rated on Fakeflix' />
            <Section category='originals' header='Fakeflix Originals' />
            <Section category='animation' header='Animation' />
            <Footer />
        </>
    )
}

export default NewPopular