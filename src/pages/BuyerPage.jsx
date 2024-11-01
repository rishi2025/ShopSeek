import React, { useEffect, useState } from 'react';
import { Container, Footer, HeaderOpaque, LeftPanel, ProfilePage, PurchasesPage } from '../components/mainComponent.jsx';
import { Route, Outlet } from 'react-router-dom';

//TO BE COMPLETED

function BuyerPage() {

    return (
        <Container px="px-0">
            <HeaderOpaque />
            <div className="min-h-screen flex flex-row mt-20">
                <LeftPanel role="buyer" menuItems={[
                    { option: "DASHBOARD", url: "/dashboard" }, 
                    { option: "ADD PRODUCTS", url: "/add-products" },
                    { option: "CHATS", url: "/chats" },
                    { option: "IN DEALS", url: "/in-deals" },
                    { option: "PURCHASES", url: "/purchases" },
                    { option: "YOUR INFO", url: "/your-info" },
                ]}
            />

                <main className="flex-1">
                    {<Outlet />}
                </main>

            </div>
            <Footer />
        </Container>
    )
}

export default BuyerPage