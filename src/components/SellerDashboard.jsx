import React, { useEffect, useState } from 'react';
import { Container, OutgoingDeals, ProductRequest, Notification, SmallBox } from '../components/mainComponent.jsx';
import { Graph, People } from '../Images/MainImage.jsx';
import { BASE_URL } from '../Constants.jsx';

function SellerDashboard() {

    const [totalOrders, setTotalOrders] = useState(0);
    const [totalPeople, setTotalPeople] = useState(0);
    const [errorOrders, setErrorOrders] = useState("");
    const [errorCustomers, setErrorCustomers] = useState("");
    const [productsCollection, setProductsCollection] = useState([]);
    const [errorProducts, setErrorProducts] = useState("");

    const renderTotalOrders = async () => {
        setErrorOrders("");
        try {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                    sellerId: "66f65e2969020681ed755dc3"
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    
            const response = await fetch(`${BASE_URL}/seller/total-orders`, requestOptions);
    
            if (!response.ok)
                throw new Error("Total Orders fetch failed");
    
            const orders = await response.json();

            setTotalOrders(orders.data.totalOrders);
        } catch (error) {
            console.log(error.message);
            setErrorOrders(error.message);
        }
    }

    const renderTotalCustomers = async () => {
        setErrorCustomers("");
        try {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                    sellerId: "66f65e2969020681ed755dc3"
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    
            const response = await fetch(`${BASE_URL}/seller/total-orders`, requestOptions);
    
            if (!response.ok)
                throw new Error("Total Customers fetch failed");
    
            const orders = await response.json();

            setTotalPeople(orders.data.totalOrders);
        } catch (error) {
            console.log(error.message);
            setErrorCustomers(error.message);
        }
    }

    const renderProductRequests = async () => {
        setErrorProducts("");
        try {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                    sellerId: "66f65e2969020681ed755dc3"
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    
            const response = await fetch(`${BASE_URL}/seller/product-requests`, requestOptions);
    
            if (!response.ok)
                throw new Error("Products requests fetch failed");

            console.log(orders);
    
            const productRequestsCollection = await response.json();

            // setProductsCollection(productRequestsCollection.data.totalOrders);
        } catch (error) {
            console.log(error.message);
            setErrorProducts(error.message);
        }
    }

    useEffect(() => {
        renderTotalOrders();
        renderTotalCustomers();
        renderProductRequests();
    }, [])

    return (
        <Container className="min-h-[45.5rem] bg-[#F1EAFF] flex flex-col pt-10 gap-10" px="px-0">
            <Container className="flex flex-row justify-between">
                <SmallBox
                    imagesrc={Graph}
                    title={"Total Orders"}
                    totalNumber={(errorOrders === "") ? totalOrders : errorOrders}
                    bg = "bg-gradient-to-r from-[#E49BFF] to-[#F0D4F5]"
                />

                <SmallBox
                    imagesrc={People}
                    title={"Total Customers"}
                    totalNumber={(errorCustomers === "") ? totalOrders : errorCustomers}
                    bg = "bg-gradient-to-r from-[#E3A5C7] to-[#FFDFD6]"
                />

                <Notification />
            </Container>

            <Container className="flex flex-row justify-between">
                <ProductRequest products={productsCollection}/>
                <OutgoingDeals/>
            </Container>

        </Container>
    )
}

export default SellerDashboard