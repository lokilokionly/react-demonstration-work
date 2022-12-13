import IMGG from '../../../assets/img/transport/horse.png'
import LogoH from '../../../assets/img/Logo/logo.svg'
export default function StartGalery() {
  return (
    <div className=' container mx-auto'>
      <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-interval="false"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-interval="false"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-interval="false"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <div class="relative overflow-hidden bg-no-repeat bg-cover h-[650px]">
              <div className=' container flex justify-center p-24'>
                {/* начало блока */}
                <img className=' my-auto' src={LogoH} alt="" />
                <div className=' my-auto pl-12'>
                  <h1 className=' text-3xl uppercase font-extrabold'>The Alpaca <span className=' font-medium'> - туристический сервис <br /> с возможностью аренды парнокопытных животных</span></h1>

                </div>
              </div>
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </div>
            <div class="carousel-caption hidden md:block absolute text-center">

            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div class="relative overflow-hidden bg-no-repeat bg-cover h-[650px]">
              начало блока
              <img alt='' src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg" class="block w-full" />
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </div>
            <div class="carousel-caption hidden md:block absolute text-center">

            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div class="relative overflow-hidden bg-no-repeat bg-cover h-[650px] ">
              <div className=' container flex justify-center p-24'>
                {/* начало блока */}
                <div className=' flex justify-center'>
                <div className=' grid grid-cols-3'>
                  <div className=' relative rounded-2xl border-2 border-black z-10 my-auto px-5 mx-12  '>
                    <div className=' absolute bg-orange-300 rounded-full w-[45px] h-[45px] ml-5 flex justify-center left-[-40px] top-[-10px] '>
                      <p className=' relative  my-auto'>1</p>
                    </div>
                    <p className=' p-6 text-lg'> Любые ваши путишествия вместе с <span>"the Alpaca"</span> будет проходить вместе с высоклафицированным гидом.</p>
                  </div>
                  <div className=' relative rounded-2xl border-2 border-black z-10 my-auto px-5 mx-12  '>
                    <div className=' absolute bg-orange-300 rounded-full w-[45px] h-[45px] ml-5 flex justify-center left-[-40px] top-[-10px] '>
                      <p className=' relative  my-auto'>2</p>
                    </div>
                    <p className=' p-6 text-lg'>На каждом маршруте есть Фельдшерский центр где вам в случае необходимости окажут медецинскую помощь.</p>
                  </div>
                  <div className=' relative rounded-2xl border-2 border-black z-10 my-auto px-5 mx-12  '>
                    <div className=' absolute bg-orange-300 rounded-full w-[45px] h-[45px] ml-5 flex justify-center left-[-40px] top-[-10px] '>
                      <p className=' relative  my-auto'>3</p>
                    </div>
                    <p className=' p-6 text-lg'>Прошли сертификацию безопасности у "КазТурим"</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="carousel-caption hidden md:block absolute text-center">

            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          data-bs-interval="false"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          data-bs-interval="false"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}