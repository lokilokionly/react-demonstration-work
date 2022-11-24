import Stas from '../../../assets/img/Specialists/Stas.webp'
import Wilsa from '../../../assets/img/Specialists/Wilsa.webp'
export default function Specialists() {
    return (
        <div className=''>
            <div className=' grid grid-cols-2 container mx-auto'>
                <div className=' flex h-auto justify-between px-8 bg-[#F9F6F1]'>
                    <div className=' my-auto'>
                        <h1 className=' text-2xl pb-7'><b>Стас</b> ай как просто</h1>
                        <p className=' pb-10 text-sm'>Комунист и просто плохой человек.</p>
                        <button className=' bg-[#D7B399] px-4 py-2'>кнопка</button>
                    </div>
                    <div className=''>
                        <img className=' w-80' src={Stas} alt="" />
                    </div>
                </div>
                <div className=' flex h-auto justify-between px-8 bg-[#F4F4F4]'>
                    <div className=' my-auto'>
                        <h1 className=' text-2xl pb-7'>Валентин Валерьевич <b>Петухов</b></h1>
                        <p className=' pb-10 text-sm'>Продал свое мнение как и свою почку.</p>
                        <button className=' bg-[#D7B399] px-4 py-2'>кнопка</button>
                    </div>
                    <div className=''>
                        <img className=' w-80' src={Wilsa} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}