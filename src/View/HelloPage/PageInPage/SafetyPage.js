export default function SafetyPage() {
    return (
        <div className="">
            <h1 className=" text-center text-3xl pb-8">Мы позаботились о вашей безопасности.</h1>
            <div className=" grid grid-cols-3 container mx-auto gap-24">
                <div className=" flex relative">
                    <div className=" pr-4">
                        <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 flex justify-center rounded-full relative right-1 ">
                            <p className=" rounded-full my-auto text-2xl">1</p>
                        </div>
                    </div>
                    <p className=" my-auto p-4 rounded-xl bg-gray-500 text-white text-xl">Весь ваш маршрут вас будет сопровождать высококлафицированный гид.</p>
                </div>
                <div className=" flex relative">
                    <div className=" pr-4">
                        <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 flex justify-center rounded-full relative right-1 ">
                            <p className=" rounded-full my-auto text-2xl">2</p>
                        </div>
                    </div>
                    <p className=" my-auto p-4 rounded-xl bg-gray-500 text-white text-xl">Весь ваш маршрут вас будет сопровождать высококлафицированный гид.</p>
                </div>
                <div className=" flex relative">
                    <div className=" pr-4">
                        <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 flex justify-center rounded-full relative right-1 ">
                            <p className=" rounded-full my-auto text-2xl">3</p>
                        </div>
                    </div>
                    <p className=" my-auto p-4 rounded-xl bg-gray-500 text-white text-xl">Весь ваш маршрут вас будет сопровождать высококлафицированный гид.</p>
                </div>
            </div>
        </div>
    )
}
