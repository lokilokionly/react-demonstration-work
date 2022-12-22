import { Link } from "react-router-dom"
export default function SlideTwo () {
    return(
        <div class="carousel-item relative float-left w-full">
                <div class="relative overflow-hidden bg-no-repeat bg-cover h-[650px] ">
                                <div className=" container my-56 ">
                                <h1 className=" text-3xl text-center my-auto">Получить свое путешествие можно <Link to={'routespage'}><h2 className=" bg-blue-200 p-4 w-28 mx-auto my-8 rounded-l-2xl rounded-r-2xl">Здесь</h2></Link></h1>        
                                </div>
                </div>
                <div class="carousel-caption hidden md:block absolute text-center">
    
                </div>
              </div>
    )
}