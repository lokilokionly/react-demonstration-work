import LogoH from '../../../assets/img/Logo/logo.svg'
export default function SlideOne () {
    return(
        <div class="carousel-item active relative float-left w-full">
        <div class="relative overflow-hidden bg-no-repeat bg-cover h-[650px]">
            <div className=' container flex justify-center p-24'>
              {/* начало блока */}
              <img className=' my-auto w-[300px]' src={LogoH} alt="" />
              <div className=' my-auto pl-12'>
                <h1 className=' text-3xl uppercase font-extrabold'>The Alpaca <span className=' font-medium'> - туристический сервис <br /> с возможностью аренды парнокопытных животных</span></h1>

              </div>
            </div>
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
          </div>
          <div class="carousel-caption hidden md:block absolute text-center">

          </div>
        </div>
    )
}