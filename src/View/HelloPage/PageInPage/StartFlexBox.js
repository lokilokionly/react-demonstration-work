import { Link } from "react-router-dom"
export default function FlexBoxStart() {
    return (
        <div className=" my-8">
                <h1 className=" text-center text-3xl font-medium">Выборать лучшие маршрут</h1>
                    <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">

                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                        </div>
                        
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                        </div>
                        
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <Link to={'./'}><div className="border-black mx-auto opacity-70 hover:opacity-100 px-5 w-fit my-12">
                <p className=" text-center text-sl my-6 uppercase ">больше маршрутов</p>
            </div></Link>
        </div>
    )
}