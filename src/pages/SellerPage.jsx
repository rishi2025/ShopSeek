import React from 'react';
import { Container, Footer, HeaderOpaque, LeftPanel } from '../components/mainComponent.jsx';
import ProfileForm from '../components/ProfileForm.jsx';

function SellerPage() {
    return (
        <Container px="px-0">
            <HeaderOpaque />
            <div className="min-h-screen flex flex-row mt-20">
                <LeftPanel role="seller" menuItems={["Home","Your Info"]} isActive={1} />
                <main className="flex-1">
                    <ProfileForm/>
                </main>
            </div>
            <Footer />
        </Container>
    )
}

export default SellerPage