import Section from "./Section/Section";
import BrowserHeader from '../BrowserHeader/BrowserHeader'
import Footer from "../../Footer/Footer";

function Movies() {
    return (
        <>
            <BrowserHeader indexList='2' />
            <Section category='trending' header='Trending Now' headerVien='Xu hướng' />
            <Section category='rated' header='Top Rated on Fakeflix' headerVien='Xếp hạng cao nhất trên Netflix' />
            <Section category='originals' header='Fakeflix Originals' headerVien='Nguyên bản Netflix' />
            <Section category='animation' header='Animation' headerVien='Hoạt hình' />
            <Footer />
        </>
    )
}

export default Movies