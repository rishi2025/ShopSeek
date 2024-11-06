import React, { useEffect } from 'react';
import { Button, Container, Header, Footer } from "../components/mainComponent.jsx";
import { Random1, Trolley, ShoppingList } from '../Images/MainImage.jsx';
import { Link, useLocation } from 'react-router-dom';

function Home() {

    const location = useLocation();

    useEffect(() => {
        const domElement = document.getElementById(location.hash?.replace('#', ''));
        if (domElement)
        {
            domElement?.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [location])

    return (
        <Container className={'bg-gradient-to-r from-customColors-radialPurpleL to-customColors-radialPurpleD min-h-screen'} px='px-0'>
            <Header />
            {/* Landing */}
            <div id="Home"></div>
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
                <Link to={"/signup"}>
                    <Button
                        text={"JOIN"}
                        subText={"NOW!"}
                        bgColor={"bg-gradient-to-r from-customColors-lightPurple to-customColors-offWhite"}
                        className={'absolute top-[70%] left-[calc(50%-8rem)] font-Electrolize text-xl w-64 h-14 shadow-lg hover:shadow-[#333]'}
                        round={false}
                    />
                </Link>
            </Container>

            {/* About */}
            <div id="About"></div>
            <Container className="h-[45.5rem] bg-customColors-offWhite w-full" px="px-0">
                <div className='font-fira text-3xl h-36 w-52 mb-10 flex justify-center items-end text-customColors-lightPurple'>
                    About Us
                </div>
                <Container className="w-full h-[27rem] bg-[#D4BFFF] shadow-lg shadow-[#333] font-gruppo text-3xl flex justify-evenly items-center">
                    <Container className='w-[60rem] font-bold'>
                                    Welcome to ShopSeek, your direct connection to local shopkeepers!  Our platform 
                        empowers customers to share their product needs through images, making it easier 
                        for shopkeepers to check availability and provide personalized responses.
                        <br /><br />
                        With ShopSeek, customers gain access to local deals and the convenience of direct 
                        messaging for instant inquiries, product details, and price negotiations. We're 
                        bridging the gap between shopkeepers and customers for a seamless and hassle-free 
                        shopping experience.
                        <br /><br />
                        Experience the new era of local shopping with ShopSeek, where convenience meets 
                        community support in every transaction!
                    </Container>
                    <img src={Trolley} className='h-72'/>
                </Container>
            </Container>


            {/* Contact Us */}
            <div id="Contact"></div>
            <Container className="h-[40rem] bg-customColors-offWhite w-full flex flex-col items-center" px="px-0" >
                <div className='font-fira text-3xl h-16 w-[60rem] flex justify-center items-center mb-10 text-customColors-lightPurple'>
                    We'd Love to Hear from You!
                </div>
                <div className="w-[40rem] auto bg-[#D4BFFF] font-gruppo rounded-lg bg-gradient-to-r shadow-lg shadow-[#333] from-customColors-radialPurpleL to-customColors-lightPurple text-3xl p-8" px='px-8'>
                    <div className='font-fira text-3xl text-customColors-offWhite mb-4'>
                        Contact Us
                    </div>
                    <form class="w-full flex flex-col gap-4">
            <input 
                type="text" 
                placeholder="Your Name" 
                className="p-3 rounded-md bg-white text-black"
                required
            />
            <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 rounded-md bg-white text-black"
                required
            />
            <textarea 
                placeholder="Your Message" 
                className="p-3 rounded-md bg-white text-black h-24"
                required
            ></textarea>
            <button 
                type="submit" 
                className="p-3 mt-4 bg-customColors-lightPurple rounded-md text-white hover:bg-customColors-radialPurpleL transition-colors duration-300"
            >
                Send Message
            </button>
        </form>
        <div className='mt-8 text-lg text-customColors-offWhite text-center'>
            Or reach out at <span className="font-bold">shopseek.customerservice@gmail.com</span>
        </div>
                </div>
            </Container>
            <Footer />
        </Container>
    )
}

export default Home