import React from 'react';
import { Container, Footer, HeaderOpaque, LeftPanel, OutgoingDeals, ProductRequest, Notification, SmallBox } from '../components/mainComponent.jsx';

function SellerDashboard() {
    return (
        <Container className="min-h-[45.5rem] flex flex-col mt-20" px="px-0">
            <Container className="flex flex-row">
                <SmallBox/>
                <SmallBox/>
                <Notification/>
            </Container>
            <Container className="flex flex-row">
                <ProductRequest/>
                <OutgoingDeals/>
            </Container>
        </Container>
    )
}

export default SellerDashboard