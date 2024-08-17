import React, { useState } from 'react';
import { Container, Footer, HeaderOpaque, LeftPanel, ProfilePage, PurchasesPage, SellerDashboard } from '../components/mainComponent.jsx';

function SellerPage() {

    const component = {
        0: <SellerDashboard />,
        1: <>Products Page Under construction</>,
        2: <>Chats Page Under construction</>,
        3: <>OutDeals Page Under construction</>,
        4: <PurchasesPage />,
        5: <ProfilePage />
    }

    const [currentPage, setCurrentPage] = useState(0);

    return (
        <Container px="px-0">
            <HeaderOpaque />
            <div className="min-h-screen flex flex-row mt-20">
                <LeftPanel role="Seller" menuItems={[
                    "DASHBOARD",
                    "PRODUCTS",
                    "CHATS",
                    "OUTDEALS",
                    "SELLS",
                    "YOUR INFO",
                ]}
                    isActive={0}
                    setCurrentPage = {setCurrentPage}
                />

                <main className="flex-1">
                    {component[currentPage]}
                </main>

            </div>
            <Footer />
        </Container>
    )
}

export default SellerPage