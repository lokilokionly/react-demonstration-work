import { Outlet } from "react-router";
import HeaderComp from '../HeaderComp'
import FooterComp from '../FooterComp'
export default function Layout () {
    return(
        <main>
            <header className=" pt-12"><HeaderComp/></header>

            <div><Outlet/></div>
            
            <footer><FooterComp/></footer>
        </main>
    )
}