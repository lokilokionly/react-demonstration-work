import LogoH from '../assets/img/Logo/logo.svg'
import Vk from '../assets/img/Logo/vk.svg'
import Facebook from '../assets/img/Logo/Facebook.svg'
import Instagram from '../assets/img/Logo/instagram.svg'
export default function FooterComp() {
    return (
        <div className=" bg-[#212121] w-full">
            <div className='flex justify-between py-16 container mx-auto'>

                <div className=' w-[350px]'>
                    <div className="flex py-5">
                        <img className=' w-10 h-10' src={LogoH} alt="" />
                        <h1 className=" uppercase my-auto pl-5 font-bold text-2xl text-white">THE ALPACA</h1>
                    </div>
                    <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ad fugiat vel reiciendis eum blanditiis deleniti minima non.</p>
                </div>

                <div className=' grid grid-cols-4'>
                    <div className=' grid gap-2'>
                        <h1 className=' text-sm font-bold text-white'>Основные ссылки</h1>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>О компании</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Каталог</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Доставка</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Оплата</a>
                    </div>
                    <div className=' grid gap-2'>
                        <h1 className=' text-sm font-bold text-white'>Категории</h1>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Готовые ПК</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Ноутбуки</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Комплектующие</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Для животных</a>
                    </div>
                    <div className=' grid gap-2'>
                        <h1 className=' text-sm font-bold text-white'>ПОЛЕЗНЫЕ ССЫЛКИ</h1>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Блог о Технологиях</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Калькулярор Комплектующих</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>Наша миссия</a>
                    </div>
                    <div className=' grid gap-2 ml-8'>
                        <h1 className=' text-sm font-bold text-white'>СОЦ СЕТИ</h1>
                        <div className=' flex container'>
                            <img src={Vk} alt=""  className='w-6'/>
                            <p className='text-[#CBCFD4] font-normal my-auto pl-2'>VK.com</p>
                        </div>
                        <div className=' flex container'>
                            <img src={Facebook} alt=""  className='w-6'/>
                            <p className='text-[#CBCFD4] font-normal my-auto pl-2'>Facebook</p>
                        </div>
                        <div className=' flex container'>
                            <img src={Instagram} alt=""  className='w-6'/>
                            <p className='text-[#CBCFD4] font-normal my-auto pl-2'>Instagram</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-slate-200 w-full'>
                <div className=' container mx-auto flex justify-between'>
                    <p className=' text-xl py-6 font-normal'>Copyright © 2019. Все права защищены</p>
                    <p className=' text-xl py-6 font-normal'>Политика приватности</p>
                </div>
            </div>
        </div>
    )
}