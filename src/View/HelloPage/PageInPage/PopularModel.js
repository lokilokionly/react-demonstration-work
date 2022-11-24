
import { useState, useEffect } from 'react'
import { app, db } from '../../../Components/Firebase/firebase'
import { collection, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore'

export default function PopularModel () {
    const [data, setData] = useState([])

    useEffect(() => {
        const data = onSnapshot(
          collection(db, 'PopularModels'),
          (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
              list.push({id: doc.id, ...doc.data() });
            });
            // const loading =() => <MyLoader />
            setData(list)
            // setLoading(false)
           
          }
        )
    }, [])

    return(
        <div className=" container mx-auto">
            <h1 className=" uppercase text-center text-4xl pt-28">Популярные Товары</h1>
            <div className=" pt-28">
                <div>
                    {data.map((i) => {
                       return(
                         <div className=' flex '>
                                      <div className=' w-96'>
                                        
                                      <img  src={i.img} alt="" />
                                      <div>
                                      <h1>{i.name}</h1>
                                      <p className=' bg-black'>{i.startingPrice}</p>
                                      </div>
                                      </div>
                         </div>
                       )
                    })}
                </div>
            </div>
        </div>
    )
}