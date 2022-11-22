import { Link } from "react-router-dom"
import CartH from '../assets/img/Header/cart.svg'
import PriseH from '../assets/img/Header/prise.svg'
import LogoH from '../assets/img/Logo/logo.svg'

export default function HeaderComp() {

    var Prise = 5;

    return (
        <div>
            <div className="container mx-auto flex justify-center px-12 h-16 ">
                <div className="NavCategori flex my-5">
                    <ul className=" px-8">
                        <button>Катерогии</button>
                        <li>
                            Гарнитура
                        </li>
                        <li>
                            Наушники
                        </li>
                        <li>
                            Жопа
                        </li>
                    </ul>
                    <ul className=" px-8">
                        <button>Катерогии</button>
                        <li>
                            Гарнитура
                        </li>
                        <li>
                            Наушники
                        </li>
                        <li>
                            Жопа
                        </li>
                    </ul>
                    <ul className=" px-8">
                        <button>Катерогии</button>
                        <li>
                            Гарнитура
                        </li>
                        <li>
                            Наушники
                        </li>
                        <li>
                            Жопа
                        </li>
                    </ul>
                </div>

                <div className="flex my-5">
                        <img className=' w-10 h-10' src={LogoH} alt="" />
                        <h1 className=" uppercase my-auto pl-5 font-bold text-2xl text-black">the loopa</h1>
                    </div>

                <div className=" my-auto">
                    <Link className=" px-3">Оплата</Link>
                    <Link className=" px-3">Доставка</Link>
                </div>

                <div className=" my-auto">
                    <div className="flex">
                        <img className="px-3 my-auto" src={CartH} alt="" />

                        <p className=" my-auto font-semibold z-0 bg-slate-300 text-lg rounded-full px-2 mx-3">{Prise}</p>
                        <img className=" z-10 my-auto w-" src={PriseH} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}