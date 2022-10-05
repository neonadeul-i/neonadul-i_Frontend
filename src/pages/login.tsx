import type { NextPage } from 'next'
import Login from '../components/Login'
import Logo from '../components/Logo'

const Home: NextPage = () => {
    return (
        <>
            <Logo />
            <Login />
        </>
    )
}

export default Home
