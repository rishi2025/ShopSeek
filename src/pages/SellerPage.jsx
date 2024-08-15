import React from 'react';
import { Container, Footer, HeaderOpaque, LeftPanel, ProfilePage, PurchasesPage } from '../components/mainComponent.jsx';

function SellerPage() {
    return (
        <Container px="px-0">
            <HeaderOpaque />
            <div className="min-h-screen flex flex-row mt-20">
                <LeftPanel role="seller" menuItems={["Home","Your Info"]} isActive={1} />
                <main className="flex-1">
                    <ProfilePage />
                </main>
            </div>
            <Footer />
        </Container>
    )
}

export default SellerPage