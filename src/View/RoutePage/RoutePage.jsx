import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IMaskInput } from "react-imask"
import { useRef } from "react";
import Cash from '../../assets/img/Logo/cash.svg'
import Credit from '../../assets/img/Logo/credit.svg'
import CreditHelp from '../../assets/img/Logo/creditcard.svg'
import TWOGIS from '../../assets/img/Logo/TWOGIS.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";

// COMPONENTS
import IntroComponents from './components/Intro'

import ContactInformation from "./components/ContactInformation";
// COMPONENTS
export default function RoutePage(props) {
  const location = useLocation([]);
  console.log(location);
  const data = location.state?.data;
  const [PriseStey, SetPriseStey] = useState(location.state.priceofstay)
  const [PaySwap, SetPaySwap] = useState(true)
  const ref = useRef(null);
  const inputRef = useRef(null);
  const TotalPrise = location.state.price + 20000;
  


  <Popup trigger={<button> Trigger</button>}>
  <div>Popup content here !!</div>
  </Popup>

  function PayPay() {
    function CashPage() {
      return (
        <div className=" p-1">
         
          <div>
            <div  className="">
              <p className="  text-center py-8 rounded-l-3xl rounded-r-3xl  text-white hover:text-[#1a1a1a] font-bold transition ease-in-out delay-150 bg-gray-500  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 placeholder:text-white hover:placeholder:text-gray-500 duration-300 w-[300px]">"Великолугская 25А"<br />
                <a href="https://go.2gis.com/kav95d"><img className="mx-auto " src={TWOGIS} alt="" /></a>
              </p>
            </div>
            <Popup position='left center' className=" z-50" trigger={<p className="text-center">Подробнее</p>}>
              <div>
                <h1 className=" text-xl">При оплате наличными, оплата будет происходить на адресе начала маршрута</h1>
              </div>
            </Popup>
            
          </div>

        </div>
      )
    }
    function CreditPage() {
      return (
        <div className=" ">
          <div className=" flex justify-center ">
            <div className="duration-300 rounded-t-3xl rounded-b-3xl hover:shadow-xl p-8 hover:bg-slate-500 transition">
              <div >
                <IMaskInput
                  className=' text-white hover:text-gray-500 transition ease-in-out delay-150 bg-gray-500  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 placeholder:text-white hover:placeholder:text-gray-500 duration-300 text-center placeholder:text-center text-2xl h-12'
                  mask={' 0000 0000 0000 0000 '}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}
                  onAccept={
                    (value, mask) => console.log(value)
                  }
                  placeholder=' 0000 0000 0000 0000 '
                />
              </div>
              <div className=" flex justify-between">
                <IMaskInput
                  className=' text-white hover:text-gray-500 transition ease-in-out delay-150 bg-gray-500  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 placeholder:text-white hover:placeholder:text-gray-500 duration-300 text-center placeholder:text-center text-2xl h-12 w-20 mt-4'
                  mask={'00{/00}'}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}

                  onAccept={

                    (value, mask) => console.log(value)
                  }
                  placeholder='00/00'
                />
                <IMaskInput
                  className=' text-white hover:text-gray-500 transition ease-in-out delay-150 bg-gray-500  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 placeholder:text-white hover:placeholder:text-gray-500 duration-300 text-center placeholder:text-center text-2xl h-12 w-20 mt-4'
                  mask={'000'}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}

                  onAccept={

                    (value, mask) => console.log(value)
                  }
                  placeholder='CVV'
                />
                <img src={CreditHelp} alt="" className=" h-12 w-20 mt-4 " title="Это так называемый первый защитный код. Он нужен для идентификации через протокол 3-D Secure." />
              </div>
              <div>
                <IMaskInput
                  className=' text-white hover:text-gray-500 transition ease-in-out delay-150 bg-gray-500  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 placeholder:text-white hover:placeholder:text-gray-500 duration-300 text-center placeholder:text-center text-2xl h-12 my-2'
                  mask={''}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}
                  onAccept={
                    (value, mask) => console.log(value)
                  }
                  placeholder=' ARTUR PIROSHKOV '
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (PaySwap) {
      return <CashPage />;
    }
    return <CreditPage />;
  }
  function Reloaded() {
    window.location.reload();
  }
  useEffect(() => {

  }, [location])

  return (
    <div className=" bg-gray-100">
      <div className=" py-8">

        <IntroComponents title={location.state.title} img={location.state.image} descripcion={location.state.descripcion} />

        <ContactInformation />


        <div>
          <div className=" container mx-auto flex justify-center">
            <div className=" mx-24 bg-gray-200 flex  rounded-3xl my-auto">
              <div className=" my-auto mx-auto border p-8 rounded-3xl">
                <p className=" text-3xl text-center py-4">Цена маршрута: {location.state.price} ₸</p>
                <p className=" text-3xl text-center py-4">К оплате: {TotalPrise} ₸</p>
                <p></p>
              </div>

              {/* <p className=" py-4 my-4 mx-2 px-4">Цена маршрута по умолчанию: <span>{location.state.price} ₸.</span></p>
              <p className=" py-4 my-4 mx-2 px-4">Цена маршрута + время проживания: {location.state.priceofstay}</p>
              <p className=" py-4 my-4 mx-2 px-4">qweqwe = {PriseStey}</p>
              <p className=" py-4 my-4 mx-2 px-4">Итоговая цена: 999999 ₸.</p> */}
            </div>

            <div className=" mx-24 ">
              <div className=" pl-8">
                <div className="flex justify-center rounded-3xl ">
                  <div className=" bg-gray-200 px-4  rounded-l-3xl rounded-r-3xl">
                    <button onClick={() => SetPaySwap(true)} title="Наличная оплата" className=" rounded-3xl mr-2">
                      <img className=" h-20 w-20 my-auto mx-auto" src={Cash} alt="" />
                    </button>

                    <button onClick={() => SetPaySwap(false)} title="Оплата банковской картой" className=" rounded-3xl ml-2">
                      <img className="h-20 w-20 my-auto mx-auto" src={Credit} alt="" />
                    </button>
                  </div>
                </div>
                <div className="mx-auto mt-6 flex justify-center ">
                  <div className="border rounded-3xl w-min bg-gray-200">
                    <PayPay />
                  </div>

                </div>
                <div className="flex justify-center">
                 <Link to={'/EndPage'}> <button className=" px-24 py-4 mt-4 rounded-l-full rounded-r-full text-white text-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Оплатить</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      </div>
  );
}


// <div className="flex justify-center container">
//         <div className="  w-full mx-auto  border-2 border-black px-4 py-2">
//           <img className="" src={location.state.image} alt="" />
//           <div>
//             <h1 className=""></h1>
//           </div>
//         </div>
//         <div className="">

//         </div>
//         <div className="">
//           <h1 className="  ">Маршрут: {location.state.title}</h1>

//           <p className="">Цена Маршрута: {location.state.price} ₸</p>
//         </div>
//       </div>