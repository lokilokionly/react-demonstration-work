import { Outlet } from "react-router";
import HeaderComp from '../HeaderComp'
import FooterComp from '../FooterComp'
export default function Layout () {
    return(
        <main className=" MainFont">
            <header className=" pt-12 w-full bg-gray-200"><HeaderComp/></header>

            <div><Outlet/></div>
            
            <footer className=" bg-gray-200"><FooterComp/></footer>
        </main>
    )
}