import React, { useEffect } from 'react';
import { Button, Container, Header, Footer } from "../components/mainComponent.jsx";
import { Random1, Trolley, ShoppingList } from '../Images/MainImage.jsx';
import { Link, useLocation } from 'react-router-dom';

function Home() {

    return (
        <Container className={'bg-gradient-to-r from-customColors-radialPurpleL to-customColors-radialPurpleD min-h-screen'} px='px-0'>
            <Header />
            {/* Landing */}
            <div id="Home"></div>
            <Container className="h-[45.5rem] bg-inherit w-full relative shadow-lg shadow-[#333]" px="px-0">
                <div className='absolute top-0 left-0 bg-gradient-to-r from-customColors-offWhite to-customColors-offWhiteDark w-1/2 h-[45.5rem]'>
                    <p className='font-habibi text-[#641FBB] absolute transform top-1/3 right-0 text-right text-5xl leading-relaxed'>
                        PA <br />
                        N <br />
                        FOU <br />
                        Error: <br />
                    </p>
                </div>
                <p className='absolute top-1/3 left-1/2 text-left text-5xl leading-relaxed font-gruppo text-customColors-offWhite'>
                    GE <br />
                    OT <br />
                    ND <br />
                    404 <br />
                </p>
            </Container>

            <Footer />
        </Container>
    )
}

export default Home