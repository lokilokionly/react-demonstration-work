import { useState, useEffect } from 'react'
import { db } from '../../Components/Firebase/firebase'
import { collection, onSnapshot, } from 'firebase/firestore'
import { Link } from 'react-router-dom'







export default function RoutesPage() {
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
            <div className=' grid grid-cols-3 container mx-auto py-8'>
                {data.map((i) => {
                    return (



                        <div key={i.id} className=' w-[92%] hover:brightness-[0.8] hover:scale-105 transition rounded-3xl shadow-xl py-12'>
                            <Link
                                state={{
                                    id: i.id,
                                    title: i.title,
                                    image: i.img,
                                    price: i.prise,
                                    descripcion: i.descripcion,
                                }}
                                className='my-auto rounded-l-3xl border-2-l text-xl'
                                to={`/routepage/${i.id}`}>
                                <img src={i.img} alt="" className='z-20 w-[450px] h-[400px] mx-auto rounded-t-3xl' />
                                <div className=' flex justify-between px-6 h-16'>
                                    <h1 className='top-12 my-auto text-2xl'>{i.title}</h1>
                                    <div className=' my-auto'>
                                        <p className=' my-auto text-xl '>{i.prise} ₸</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

