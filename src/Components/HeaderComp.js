import { Link } from "react-router-dom"
import LogoH from '../assets/img/Logo/logo.svg'

export default function HeaderComp() {


    return (
        <div className=" container mx-auto py-5">
            <div className=" flex justify-between">
                <Link to={"/"} className="flex">
                    <img className=' w-10 h-10' src={LogoH} alt="" />
                    <h1 className=" uppercase my-auto pl-5 font-bold text-2xl text-black">the <br /> alpaca</h1>
                </Link>

                <div className=" my-auto">
                    <Link to={'/auth'}>
                        <button type="button" class="inline-block px-6 py-2.5 bg-transparent text-black font-medium text-xl leading-tight uppercase rounded hover:bg-gray-100 focus:text-slate-500 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-slate-600 transition duration-300 ease-in-out">
                            Войти</button>
                    </Link>

                    <Link to={'/storepage'} >
                        <button type="button" class="inline-block px-6 py-2.5 bg-transparent text-black font-medium text-xl leading-tight uppercase rounded hover:bg-gray-100 focus:text-slate-500 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-slate-600 transition duration-300 ease-in-out">
                            Магазин</button>
                    </Link>

                    <Link to={'/routespage'} >
                        <button type="button" class="inline-block px-6 py-2.5 bg-transparent text-black font-medium text-xl leading-tight uppercase rounded hover:bg-gray-100 focus:text-slate-500 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-slate-600 transition duration-300 ease-in-out">
                            Маршруты</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}