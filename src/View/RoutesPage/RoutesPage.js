import Lama from '../../assets/img/transport/lama.png'
import Horse from '../../assets/img/transport/horse.png'
import Lion from '../../assets/img/transport/lion.png'
import { useState, useEffect } from 'react'
import { app, db } from '../../Components/Firebase/firebase'
import { collection, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore'
import { Link } from 'react-router-dom'
export default function RoutesPage() {

    const [transport, TransportSelection] = useState('Хохол')

    const [data, setData] = useState([])
    useEffect(() => {
        const data = onSnapshot(
            collection(db, 'Routes'),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                // const loading =() => <MyLoader />
                setData(list)
                // setLoading(false)

            }
        )
    }, [])
    return (
        <div>
            <div className=" container mx-auto">
                <div>
                    <h1 className=" text-center">Для начала выберим ваш транспорт!</h1>
                    <div className=" grid grid-cols-3">
                        <div className=' rounded-3xl border-2'>
                            <img src={Lama} alt="" className=' w-[450px]' />
                            <h1>Лама</h1>
                            <p>Spec</p>
                        </div>
                        <div>
                            <img src={Horse} alt="" />
                            <h1>Лама</h1>
                            <p>Spec</p>
                        </div>
                        <div>
                            <img src={Lion} alt="" />
                            <h1>Лама</h1>
                            <p>Spec</p>
                        </div>
                        <div>
                            <h1>Вы выбрали: {transport}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-3 container mx-auto py-12'>
                {data.map((i) => {
                    return (

                        <div key={i.id} i={i} className=' w-[90%] container border-2 rounded-xl p-5 '>
                            <img src={i.img} alt="" className=' w-[400px] h-[400px] mx-auto '/>
                            <h1>name {i.title}</h1>
                            <p> {i.prise} тенге.</p>
                        </div>

                    )
                })}
            </div>
            <div>
                
            </div>
        </div>
    )
}

// <Link to="/Candidate/${i.id}"
// state={i}
// >
// <div className='bg-[#F1DF6F] cursor-pointer rounded-full py-2 px-4'>
// <p className='text-center text-base'>Посмотреть справку</p>
// </div>
// </Link>