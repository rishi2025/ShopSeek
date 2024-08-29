import React, { useEffect, useState } from 'react';
import { Container, Footer, HeaderOpaque, LeftPanel, ProfilePage, PurchasesPage, SellerDashboard } from '../components/mainComponent.jsx';
import { Route, Outlet } from 'react-router-dom';

function SellerPage() {

    return (
        <Container px="px-0">
            <HeaderOpaque />
            <div className="min-h-screen flex flex-row mt-20">
                <LeftPanel role="seller" menuItems={[
                    { option: "DASHBOARD", url: "/dashboard" }, 
                    { option: "PRODUCTS", url: "/products" },
                    { option: "CHATS", url: "/chats" },
                    { option: "OUTDEALS", url: "/out-deals" },
                    { option: "SELLS", url: "/sells" },
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

export default SellerPage