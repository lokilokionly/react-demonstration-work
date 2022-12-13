import Stas from '../../../assets/img/Specialists/Stas.webp'
export default function UniverseOptions () {
    return(
        <div>
        <h1 className=" text-center text-3xl">Безграничные возможности</h1>
            <div className=' flex justify-center p-4'>
            <div className="mx-auto">
                <p>Делай че хочешь и вот картиночку тебе</p>
                <img src={Stas} alt="" />
            </div>
        </div>
        </div>
    )
}