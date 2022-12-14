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
    <div>
      <div className="flex mx-24 my-5">
        <div className=" w-1/3">
          <img className="w-[500px] rounded-3xl ml-auto m-2" src={location.state.image} alt="" />
          <div className="rounded-3xl mt-8">
            <h1 className="text-3xl text-center p-8 border m-4 rounded-3xl  ">Маршрут: {location.state.title}</h1>

            <p className="text-3xl text-center p-8 border m-4 rounded-3xl">Цена Маршрута: {location.state.price} ₸</p>
          </div>
        </div>
        <div className=" pl-12 w-2/3 pt-2">
        <h1 className=" text-xl mx-auto text-left  mb-12 rounded-2xl shadow-sm px-4 py-2 border border-black">{location.state.descripcion}</h1>
        
          <div className=" container">
            <input className=" px-4 py-2 m-2 rounded-l-full rounded-r-full mx-6 border" type="text" placeholder="Ваше имя" />
            <input className=" px-4 py-2 m-2 rounded-l-full rounded-r-full mx-6 border" type="text" placeholder="Номер телефона" />
            <input className=" px-4 py-2 m-2 rounded-l-full rounded-r-full mx-6 border" type="text" placeholder="Ваша почта" />
          </div>
          <div>

          <input className=" px-4 py-2 m-2 rounded-l-full rounded-r-full mx-6 border" type="text" placeholder="Ваша почта" />


          </div>
        </div>
      </div>
    </div>
  );
}