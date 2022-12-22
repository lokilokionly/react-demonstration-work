function TimeOfStay() {
    return ( 
        <div className=" container mx-auto mt-8 border">
            
          <div className=" flex">
            <h1 className=" text-xl my-auto pl-12">Время проживания:</h1>
            <ul className=" flex">

              <li className=" mx-24">
                <button autoFocus type="button" class="inline-block  px-6 py-2.5 bg-slate-300 text-black hover:text-white focus:text-white active:text-white  font-medium text-xs leading-tight
                 uppercase rounded shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out">
                  1 неделя
                </button>
              </li>

              <li className=" mx-24">
                <button type="button" class="inline-block px-6 py-2.5 bg-slate-300 text-black hover:text-white focus:text-white active:text-white  font-medium text-xs leading-tight
                 uppercase rounded shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out">
                  2 недели
                </button>
              </li>

              <li className=" mx-24">
                <button type="button" class="inline-block px-6 py-2.5 bg-slate-300 text-black hover:text-white focus:text-white active:text-white  font-medium text-xs leading-tight
                 uppercase rounded shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out">
                  3 недели
                </button>
              </li>

            </ul>
          </div>
        </div>
     );
}

export default TimeOfStay;