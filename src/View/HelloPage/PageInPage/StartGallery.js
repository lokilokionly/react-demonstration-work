import Huawei from '../../../assets/img/Logo/Huawei.png'
import HuaweiTelephone from '../../../assets/img/ProductsLocal/HuaweiTelephone.webp'
export default function StartGallery() {
    return (
        <div>
            <div className=" container mx-auto w-[900px] h-[400px] my-36">
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
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
                        <div className="carousel-item active relative float-left w-full">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover bg-position bg-{50%}">
                                <div className="flex w-full">
                                    <div className='flex'>
                                        <div className=' container my-auto'>
                                            <p></p>
                                            <h1><b>THE LOOPA</b> распродает технику компании Huawei (за ненадобностью)</h1>
                                            <button></button>

                                        </div>
                                        <div>
                                            <img src={HuaweiTelephone} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-50"></div>
                            </div>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">1 амg</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover bg-{50%}">
                                <div className="flex w-full">
                                    <div>
                                        <p></p>
                                        <h1><b>THE LOOPA</b> распродает технику компании Huawei (за ненадобностью)</h1>
                                        <button></button>

                                    </div>
                                    <div>
                                        <img src={HuaweiTelephone} alt="" />
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-50"></div>
                            </div>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover bg-{50%}">
                                <div className="flex w-full">
                                    <div>
                                        <p></p>
                                        <h1><b>THE LOOPA</b> распродает технику компании Huawei (за ненадобностью)</h1>
                                        <button></button>

                                    </div>
                                    <div>
                                        <img src={HuaweiTelephone} alt="" />
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-50"></div>
                            </div>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}