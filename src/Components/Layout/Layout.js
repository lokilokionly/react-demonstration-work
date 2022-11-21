import { Outlet } from "react-router";
export default function Layout () {
    return(
        <main>
            <header>ХЕАДЕР ЕПИА</header>

            <div><Outlet/></div>
            
            <footer>ФУТЕР ЕБПА</footer>
        </main>
    )
}