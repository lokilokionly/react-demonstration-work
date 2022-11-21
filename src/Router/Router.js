import { Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import HelloPage from '../View/HelloPage/HelloPage.js'
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HelloPage/>}></Route>
                <Route></Route>
            </Route>
        </Routes>
    )
}