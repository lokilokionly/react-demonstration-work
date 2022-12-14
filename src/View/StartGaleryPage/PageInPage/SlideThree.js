export default function SlideThree() {
    return (
        <div class="carousel-item relative float-left w-full">
            <div class="relative overflow-hidden bg-no-repeat bg-cover h-[650px] ">
                <div>
                    <h1 className=" text-center text-3xl mt-24">Мы позаботелись о вашей безопасности</h1>
                </div>
                <div className=' container flex justify-center p-24'>
                    {/* начало блока */}
                    <div className=' flex justify-center'>
                        <div className=' grid grid-cols-3'>
                            <div className=' relative rounded-2xl border-2 border-black z-10 my-auto px-5 mx-12  bg-white h-[150px]'>
                                <div className=' absolute bg-orange-300 rounded-full w-[45px] h-[45px] ml-5 flex justify-center left-[-40px] top-[-10px] '>
                                    <p className=' relative  my-auto'>1</p>
                                </div>
                                <p className=' p-6 text-lg'> Любые ваши путишествия вместе с <span>"the Alpaca"</span> будет проходить вместе с высоклафицированным гидом.</p>
                            </div>
                            <div className=' relative rounded-2xl border-2 border-black z-10 my-auto px-5 mx-12  bg-white h-[150px]'>
                                <div className=' absolute bg-orange-300 rounded-full w-[45px] h-[45px] ml-5 flex justify-center left-[-40px] top-[-10px] '>
                                    <p className=' relative  my-auto'>2</p>
                                </div>
                                <p className=' p-6 text-lg'>На каждом маршруте есть Фельдшерский центр где вам в случае необходимости окажут медецинскую помощь.</p>
                            </div>
                            <div className=' relative rounded-2xl border-2 border-black z-10 my-auto px-5 mx-12  bg-white h-[150px]'>
                                <div className=' absolute bg-orange-300 rounded-full w-[45px] h-[45px] ml-5 flex justify-center left-[-40px] top-[-10px] '>
                                    <p className=' relative  my-auto'>3</p>
                                </div>
                                <p className=' p-6 text-lg'>Прошли сертификацию безопасности у "КазТурим". <br /> Подробнее здесь.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-caption hidden md:block absolute text-center">

            </div>
        </div>
    )
}
