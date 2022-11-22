import StartGallery from "./PageInPage/StartGallery"
import FreeShipping from "./PageInPage/freeshipping"
import Specialists from "./PageInPage/specialists"
import PopularModel from "./PageInPage/PopularModel"
import NewModel from "./PageInPage/NewModel"
import ButtonModels from "./PageInPage/ButtonModels"
import PresentFoU from "./PageInPage/PresentFoU"
export default function HelloPage () {
    return(
        <div className=''>
            <StartGallery/>
            <FreeShipping/>
            <Specialists/>
            <PopularModel/>
            <NewModel/>
            <ButtonModels/>
            <PresentFoU/>
        </div>
    )
}