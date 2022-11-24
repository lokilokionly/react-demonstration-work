import { Link } from "react-router-dom"
import CartH from '../assets/img/Header/cart.svg'
import PriseH from '../assets/img/Header/prise.svg'
import LogoH from '../assets/img/Logo/logo.svg'


export default function HeaderComp() {


    return (
        <div>
            <div className="container mx-auto flex justify-between px-12">

                <Link to={'/auth'} className=" my-auto  font-bold text-lg uppercase">Войти</Link>

                <div className=" my-auto flex mx-auto">
                    <Link to={"/"} className="flex my-5">
                        <img className=' w-10 h-10' src={LogoH} alt="" />
                        <h1 className=" uppercase my-auto pl-5 font-bold text-2xl text-black">the loopa</h1>
                    </Link>
                    <Link className="flex pb-1">
                        <img className="px-3 my-auto z-10" src={CartH} alt="" />
                        <img className=" my-auto relative right-4 bottom-1 w-8 rotate-[-20deg]" src={PriseH} alt="" />
                    </Link>
                </div>

                <Link to={'/storepage'} className=" my-auto  font-bold text-lg uppercase">Магазин</Link>
            </div>
        </div>
    )
}