
function IntroComponents({ title, descripcion, img }) {

    return ( 
        <div className=" bg-gray-100">
        <div className=" ">
          <p className=" px-12 py-2 text-3xl text-center  rounded-3xl">Название маршрута: {title}</p>
        </div>
        <div className=" flex container justify-between  mx-auto ">
          <div className=" ml-auto  m-2 p-4">
            <img className="w-[480px] h-[450px] rounded-3xl" src={img} alt="" />
          </div>
          <div className=" w-3/5  mr-auto ">
            <div className=" border-2 rounded-3xl h-[90%] pb-4 my-6">
              <p className=" text-2xl text-left p-4 rounded-3xl ">{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
     );
}

export default IntroComponents;