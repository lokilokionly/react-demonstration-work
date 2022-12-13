
import SlideOne from './PageInPage/SlideOne.js'
import SlideTwo from './PageInPage/SlideTwo.js'
import SlideThree from './PageInPage/SlideThree.js'

import NextP from '../../assets/img/nav/next.svg'
export default function StartGaleryPage () {
    return (
        <div className=' container mx-auto'>
          <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators flex justify-center border-2 p-2 absolute bottom-[0px] left-[-100px] ">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <SlideOne/>
                <SlideTwo/>
                <SlideThree/>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            
            >
           <img src={NextP} className='inline-block bg-no-repeat relative w-[60px] left-[-50px] rotate-180' alt="" />

            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            
            >
           <img src={NextP} className='inline-block bg-no-repeat relative w-[60px] right-[-50px]' alt="" />

            </button>
          </div>
        </div>
      )
}
// <span className="carousel-control-prev-icon inline-block bg-no-repeat relative w-[60px] left-[-50px] " aria-hidden="true"><img className='opacity-100' src={NextP} alt="" /></span>
// <span className="carousel-control-next-icon inline-block bg-no-repeat relative right-[-50px] " aria-hidden="true"><img className='opacity-100' src={NextP} alt="" /></span>