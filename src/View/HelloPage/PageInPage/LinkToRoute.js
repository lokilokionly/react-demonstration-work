import { Link } from "react-router-dom"
export default function LinkToRoute () {
    return(
        <div>
            <div className="flex hidden ">
                <h1>Перейти к выбору лам:</h1> <Link>шёлк</Link>
            </div>
        </div>
    )
}