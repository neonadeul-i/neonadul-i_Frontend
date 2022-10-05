import type { NextPage } from 'next'
import Logo from '../components/Logo'
import Signup from '../components/Signup'

const Home: NextPage = () => {
    return (
        <>
            <Logo />
            <Signup />
        </>
    )
}

export default Home
