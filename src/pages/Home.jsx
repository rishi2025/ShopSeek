import React from 'react';
import { Button, Container } from "../components/mainComponent.jsx";
import { Random1, Trolley, ShoppingList } from '../Images/MainImage.jsx';

function Home() {
    return (
        <Container px={"px-0"}>
            {/* Landing */}
            <Container className="h-screen bg-inherit w-full relative" px="px-0">
                <div className='absolute top-0 left-0 bg-gradient-to-r from-customColors-offWhite to-customColors-offWhiteDark w-1/2 h-screen'>
                    <img src={Random1} className='h-80 absolute transfrom translate-y-1/4' />
                    <img src={Trolley} className='h-64 absolute bottom-0' />
                    <p className='font-habibi text-[#641FBB] absolute transform top-1/3 right-0 text-right mr-4 text-5xl leading-relaxed'>
                        PURCHASE <br />
                        THE <br />
                        YOU <br />
                    </p>
                </div>
                <p className='absolute top-1/3 left-1/2 text-left ml-4 text-5xl leading-relaxed font-gruppo text-customColors-offWhite'>
                    AGAIN <br />
                    PRODUCT <br />
                    WANT <br />
                </p>
                <img src={ShoppingList} className='h-[37.5rem] absolute transfrom translate-y-[20%] right-0' />
                <Button
                    text={"JOIN"}
                    subText={"NOW!"}
                    bgColor={"bg-gradient-to-r from-customColors-lightPurple to-customColors-offWhite"}
                    className={'absolute top-[70%] left-[calc(50%-8rem)] font-Electrolize text-xl w-64 h-14 shadow-lg hover:shadow-[#333]'}
                    round={false}
                />
            </Container>

            {/* About */}
            <Container className="h-screen bg-customColors-offWhite w-full" px="px-0">
                About
            </Container>
        </Container>
    )
}

export default Home