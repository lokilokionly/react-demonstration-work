import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function RoutePage(props) {
  const location = useLocation([]);
  console.log(location);
  const data = location.state?.data;

  useEffect(() => {

  }, [location])

  const PriseandTime = location.state.price

  const qwe = PriseandTime + 3000

  const [time, setTime] = useState('')

  return (
    <div className="bg-gray-200">
      <div className=" ">
        <div className="container  flex">
          <img className="w-[500px] rounded-3xl ml-auto" src={location.state.image} alt="" />
          <div className="">
            <div className="w-[650px]">
              <div className=" flex justify-between px-6">        
              {/* <h1 className="text-3xl ">{location.state.title}</h1>
              <p className="text-3xl ">{location.state.price}</p> */}
              </div>
              <h1 className=" text-xl mx-auto text-left  mb-12 rounded-2xl shadow-sm px-4 py-2 border border-black">{location.state.descripcion}</h1>
            </div>
            
          </div>
        </div>

        <div className=" border-2 my-12 mx-24 container">
          <div>
            Время проживания в отеле (в сутках) :
          </div>
          <div>
            Способ Оплаты:
          </div>

          <div>
            Количество Экскурсий :
          </div>
          Итоговая сумма: {qwe}
        </div>
      </div>
    </div>
  );
}