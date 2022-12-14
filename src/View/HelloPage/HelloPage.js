import StartGaleryPage from "../StartGaleryPage/StartGaleryPage"
import SponsorPage from "./PageInPage/SponsorPage"
export default function HelloPage () {
    return(
        <div className=' w-full bg-gray-200'>
            <StartGaleryPage/>    
            <SponsorPage/>    
        </div>
    )
}