
import StartGalery from "./PageInPage/StartGalery"
import StartGaleryPage from "../StartGaleryPage/StartGaleryPage"
import FlexBoxStart from "./PageInPage/StartFlexBox"
import SponsorPage from "./PageInPage/SponsorPage"
export default function HelloPage () {
    return(
        <div className=' w-full bg-gray-200'>

            <StartGaleryPage/>
            
            <SponsorPage/>
            <FlexBoxStart/>
            
        </div>
    )
}