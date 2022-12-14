import Kazax from '../../../assets/img/Sponsors/kazakhturism.webp'
import Turizm from '../../../assets/img/Sponsors/turizm.webp'
import Kazaktelecom from '../../../assets/img/Sponsors/kazaktelecom.webp'
import Unnamed from '../../../assets/img/Sponsors/unnamed.webp' 
export default function SponsorPage() {
    return (
        <div className=" container mx-auto my-12">
            <div className='flex'>
                <div className=" my-auto mx-auto w-max">
                    <h1 className=' text-3xl'>Наши спонсоры:</h1>
                </div>
                <div className=' mx-auto'>
                <div className=" grid grid-cols-4 gap-12">
                    <div className=''>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100 top-8' src={Kazax} alt="" />
                    </div>
                    <div>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100' src={Turizm} alt="" />
                        
                    </div>
                    <div>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100' src={Kazaktelecom} alt="" />
                    </div>
                    <div>
                    <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100 bottom-8' src={Unnamed} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}