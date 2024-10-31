import React from 'react';
import { Container, RecentOrders, ProductRequest, Notification, SmallBox } from '../components/mainComponent.jsx';
import { Graph, People } from '../Images/MainImage.jsx';

const BuyerDashboard = ({
    totalOrders = 420,
    totalSpend = 123,
}) =>{
    return (
        <Container className="min-h-[45.5rem] bg-[#F1EAFF] flex flex-col pt-10 gap-10" px="px-0">
            <Container className="flex flex-row justify-between">
                <SmallBox
                    imagesrc={Graph}
                    title={"Total Orders"}
                    totalNumber={totalOrders}
                    bg = "bg-gradient-to-r from-[#E49BFF] to-[#F0D4F5]"
                />

                <SmallBox
                    imagesrc={People}
                    title={"Total Spend"}
                    totalNumber={totalSpend}
                    bg = "bg-gradient-to-r from-[#E3A5C7] to-[#FFDFD6]"
                />

                <Notification />
            </Container>

            <Container className="flex flex-row justify-between">
                <ProductRequest/>
                <RecentOrders/>
            </Container>

        </Container>
    )
}

export default BuyerDashboard