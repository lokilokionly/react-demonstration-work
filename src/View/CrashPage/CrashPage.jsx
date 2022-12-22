import { Link } from "react-router-dom"
export default function CrashPage () {
    return(
        <div className=" h-[850px]">
           <div className=" container mx-auto my-80">
           <h1 className=" text-center text-9xl mt-80">404</h1>
           <p className=" text-3xl text-center mt-12">Вы попали куда то не туда <Link className=" rounded-l-3xl rounded-r-3xl bg-gray-500 py-4 px-4 text-gray-200" to={'/'}>Вернуться обратно</Link></p>
           </div>
        </div>
    )
}