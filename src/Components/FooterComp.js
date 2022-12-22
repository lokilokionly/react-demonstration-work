import LogoH from '../assets/img/Logo/logo.svg'
import Vk from '../assets/img/Logo/vk.svg'
import Facebook from '../assets/img/Logo/Facebook.svg'
import Instagram from '../assets/img/Logo/instagram.svg'
import { Link } from 'react-router-dom'
export default function FooterComp() {
    return (
        <div className=" bg-[#212121] w-full">
            <div className='flex justify-between py-16 container mx-auto'>

                <div className=' w-[350px]'>
                    <div className="flex py-5">
                        <img className=' w-10 h-10' src={LogoH} alt="" />
                        <h1 className=" uppercase my-auto pl-5 font-bold text-2xl text-white">АЛЬПАКА</h1>
                    </div>
                    <p className=' text-[#CBCFD4] hover:visible active:visible'>АЛЬПАКА - туристический сервис по <br /> горной системе Тянь-Шань </p>
                </div>

                <div className=' grid grid-cols-4'>
                    <div className=' grid gap-2'>
                        <h1 className=' text-sm font-bold text-white'>Основные ссылки</h1>
                        <Link to={'/about'} className='  font-normal text-[#CBCFD4]'>О компании </Link>
                        <Link to={'/routespage'} className='  font-normal text-[#CBCFD4]'>Маршруты</Link>
                        <Link to={'/auth'} className='  font-normal text-[#CBCFD4]'>Аунтификация</Link>
                        <Link to={'/useragreement'} className='  font-normal text-[#CBCFD4]'>Пользовательское <br /> соглашение</Link>
                    </div>
                    <div className=' grid gap-2'>
                        <h1 className=' text-sm font-bold text-white'>Категории</h1>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>BETA</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>BETA</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>BETA</a>
                        <a href='youtube.com' className='  font-normal text-[#CBCFD4]'>BETA</a>
                    </div>
                    <div className=' grid gap-2'>
                        <h1 className=' text-sm font-bold text-white'>Полезные ссылки</h1>
                        <a href='https://wwf.org/' className='  font-normal text-[#CBCFD4]'>Наша миссия</a>
                        <a href='https://ecogosfond.kz/kz/' className='  font-normal text-[#CBCFD4]'>Защита окружающей среды</a>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className='  font-normal text-[#CBCFD4]'>Хорошая музыка</a>

                    </div>
                    <div className=' grid gap-2 ml-8'>
                        <h1 className=' text-sm font-bold text-white'>СОЦ СЕТИ</h1>
                        <a href="https://vk.com/">
                            <div className=' flex container'>
                                <img src={Vk} alt="" className='w-6' />
                                <p className='text-[#CBCFD4] font-normal my-auto pl-2'>VK.com</p>
                            </div>
                        </a>
                        <a href="https://www.facebook.com">
                            <div className=' flex container'>
                                <img src={Facebook} alt="" className='w-6' />
                                <p className='text-[#CBCFD4] font-normal my-auto pl-2'>Facebook</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com">
                            <div className=' flex container'>
                                <img src={Instagram} alt="" className='w-6' />
                                <p className='text-[#CBCFD4] font-normal my-auto pl-2'>Instagram</p>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}