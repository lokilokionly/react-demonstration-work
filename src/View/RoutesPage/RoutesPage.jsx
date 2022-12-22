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
        <div className=' bg-gray-200'>
            <div className=' grid grid-cols-3 container mx-auto gap-8 py-8'>
                {data.map((i) => {
                    return (
                        <div key={i.id} className='rounded-3xl '>
                            <Link
                                state={{
                                    id: i.id,
                                    title: i.title,
                                    image: i.img,
                                    price: i.prise,
                                    descripcion: i.descripcion,
                                    priceofstay: i.priceofstay,
                                }}
                                to={`/routepage/${i.urlPage}`}>
                                    <figure className='brightness-100 hover:scale-[110%] transition ease-in-out delay-[100ms] duration-[100ms]'>
                                        <img className='w-[450px] h-[400px] mx-auto rounded-3xl' src={i.img} alt="" />
                                        <figcaption className=' text-[#000000] text-center relative bottom-[-5px] text-3xl uppercase font-semibold'>{i.title}</figcaption>
                                    </figure>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

