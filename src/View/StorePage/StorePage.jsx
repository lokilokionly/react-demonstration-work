import { useState, useEffect } from 'react'
import { app, db } from '../../Components/Firebase/firebase'
import { collection, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore'

export default function StorePage() {
    const [data, setData] = useState([])

    useEffect(() => {
        const data = onSnapshot(
            collection(db, 'Tovari'),
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
            <h1>Магаз</h1>
            <div className=' container'>
                {data.map((i) => {
                    return (
                        <div className=' flex  mx-auto'>
                            <div className=' border-2 w-96 h-96'>
                                <h1>{i.name}</h1>
                                <img className='' src={i.img} alt="" />
                                <div>
                                    <p>{i.description}</p>
                                    <p>{i.prise}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}