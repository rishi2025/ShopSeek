import React from 'react';
import { Button, Container } from "../components/mainComponent.jsx";
import { Random1, Trolley, ShoppingList } from '../Images/MainImage.jsx';

function Home() {
    return (
        <Container px={"px-0"}>
            {/* Landing */}
            <Container className="h-[45.5rem] bg-inherit w-full relative shadow-lg shadow-[#333]" px="px-0">
                <div className='absolute top-0 left-0 bg-gradient-to-r from-customColors-offWhite to-customColors-offWhiteDark w-1/2 h-[45.5rem]'>
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
            <Container className="h-[45.5rem] bg-customColors-offWhite w-full" px="px-0" >
                <a name="About"></a>
                <div className='font-fira text-3xl h-36 w-52 mb-10 flex justify-center items-end text-customColors-lightPurple'>
                    About Us
                </div>
                <Container className="w-full h-[27rem] bg-[#D4BFFF] shadow-lg shadow-[#333] font-gruppo text-3xl flex justify-evenly items-center">
                    <Container className='w-[60rem] font-bold'>
                        The World Economic Forum, Accenture and Microsoft have built a
                        purpose-driven platform in the metaverse to drive action and 
                        cooperation and to revolutionize progress.. 
                        <br /><br />
                        As outer space gets more crowded and contested, QuSecure 
                        is protecting communications and data transmission with the 
                        agility required for the world of post-quantum computing. 
                        <br /><br />
                        The World Economic Forum, Accenture and Microsoft have built a 
                        purpose-driven platform in the metaverse to drive action and 
                        cooperation and to revolutionize progress..
                    </Container>
                    <img src={Trolley} className='h-72'/>
                </Container>
                <a name="Contact"></a>
            </Container>


            {/* Contact Us */}
            <Container className="h-[40rem] bg-customColors-offWhite w-full flex flex-col items-center" px="px-0" >
                <div className='font-fira text-3xl h-16 w-52 mb-10 flex justify-center items-end text-customColors-lightPurple'>
                    Contact Us
                </div>
                <Container className="w-[40rem] h-[27rem] bg-[#D4BFFF] font-gruppo rounded-lg bg-gradient-to-r shadow-lg shadow-[#333] from-customColors-radialPurpleL to-customColors-lightPurple text-3xl p-8" px='px-8'>
                    <div className='font-fira text-3xl text-customColors-offWhite'>
                        Contact Us
                    </div>
                </Container>
            </Container>
        </Container>
    )
}

export default Home