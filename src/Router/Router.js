import { Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import HelloPage from '../View/HelloPage/HelloPage'

import AuthPage from '../View/AuthPage/AuthPage'
import CrashPage from '../View/CrashPage/CrashPage'
import StorePage from '../View/StorePage/StorePage'
import RoutesPage from '../View/RoutesPage/RoutesPage'
import RoutePage from '../View/RoutePage/RoutePage'
import AboutPage from '../View/AboutPage/AboutPage'
import UserAgreement from '../View/UserAgreement/UserAgreement'
import EndPage from '../View/EndPage/EndPage'
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HelloPage/>}></Route>
                    <Route path='*' element={<CrashPage/>}></Route>

                <Route path='/auth' element={<AuthPage/>}></Route>

                <Route path='/storepage' element={<StorePage/>}></Route>

                <Route path='/routespage' element={<RoutesPage/>}></Route>

                <Route path='/routepage/:urlPage' element={<RoutePage/>}></Route>

                <Route path='/about' element={<AboutPage/>}></Route>

                <Route path='/useragreement' element={<UserAgreement/>}></Route>
                <Route path='/EndPage' element={<EndPage/>}></Route>

            </Route>
        </Routes>
    )
}