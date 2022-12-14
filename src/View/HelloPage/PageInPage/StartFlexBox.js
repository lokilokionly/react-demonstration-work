import { Link } from "react-router-dom"
export default function FlexBoxStart() {
    return (
        <div>
            <div className="container mx-auto grid grid-rows-3 w-[80%] h-[900px]">
                    <div className=" flex  flex-row ">
                       <img className=" rounded-3xl m-2 w-1/4 " src="" alt="" />
                       <img className=" rounded-3xl m-2 w-1/4 " src="" alt="" />
                       <img className=" rounded-3xl m-2 w-2/4 " src="" alt="" />
                    </div>

                    <div className=" flex  flex-row ">
                        <img className=" rounded-3xl m-2  w-1/3" src="" alt="" />
                        <img className=" rounded-3xl m-2  w-2/3" src="" alt="" />
                    </div>
            </div>
            <div className=" py-8">

            </div>
        </div>
    )
}