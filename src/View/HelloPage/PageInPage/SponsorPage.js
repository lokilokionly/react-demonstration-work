import Kazax from '../../../assets/img/Sponsors/kazakhturism.webp'
import Turizm from '../../../assets/img/Sponsors/turizm.webp'
import Kazaktelecom from '../../../assets/img/Sponsors/kazaktelecom.webp'
import Unnamed from '../../../assets/img/Sponsors/unnamed.webp' 
export default function SponsorPage() {
    return (
        <div className=" container mx-auto py-12">
                            <div className=" my-auto mx-auto w-max pb-8">
                    <h1 className=' text-3xl'>При поддержке</h1>
                </div>
            <div className='flex'>

                <div className=' mx-auto'>
                <div className=" grid grid-cols-4 gap-12 border border-black p-8 rounded-3xl">
                    <a href="https://kazaktur.com.tr/">
                        <div>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100 top-8' src={Kazax} alt="" />
                    </div>
                    </a>
                    <a href="">
                        <div>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100' src={Turizm} alt="" /> 
                    </div>
                    </a>
                    <a href="https://telecom.kz/ru/">
                        <div>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100' src={Kazaktelecom} alt="" />
                    </div>
                    </a>
                    <a href="https://www.acbk.kz/">
                        <div>
                        <img className='relative my-auto transition  w-[240px] opacity-40 brightness-0 hover:opacity-100 hover:brightness-100 bottom-8' src={Unnamed} alt="" />
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}