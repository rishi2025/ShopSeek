import React from 'react';
import { Container, Footer, Header, Login } from '../components/mainComponent.jsx';

function LoginForm() {
    return (
        <Container px="px-0">
            <Header />
            <Container className={'bg-gradient-to-r from-customColors-radialPurpleL to-customColors-radialPurpleD min-h-screen'} px='px-0'>
            <div className='absolute top-0 left-0 bg-gradient-to-r from-customColors-offWhite to-customColors-offWhiteDark w-1/2 h-[53.5rem]'></div>
                <Login />
            </Container>
            <Footer />
        </Container>
    )
}

export default LoginForm;