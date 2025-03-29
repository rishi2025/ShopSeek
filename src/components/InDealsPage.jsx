import React, {useState, useEffect} from 'react';
import { InDealsCard, Container } from './mainComponent';
import { BASE_URL } from '../Constants';

function InDealsPage() {
  
  const [inDeals, setInDeals] = useState([]);

  const fetchInDeals = async () => {
    try {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                buyerId: "6732fc0a6288111736f154d5"
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

      const response = await fetch(`${BASE_URL}/buyer/get-indeals`, requestOptions);
      const response_data = await response.json();
      
        if (!response.ok || !response_data?.data)
            throw new Error("In Deals requests fetch failed");

      const productRequests = response_data.data || {};

        let newProductRequest = [];
        productRequests?.forEach(element => {
          const request = {
              id: element.product._id,
              productId: element.product._id,
                title: element.product.title,
                imageUrl: element.inDeal.seller_product_picture,
                tags: element.product.tags,
                revertedOn: element.inDeal.createdAt,
                size: element.product.size,
                description: element.inDeal.description,
                price: element.inDeal.price,
            }

            newProductRequest.push(request);
        });

        setInDeals(newProductRequest);

    } catch (error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    fetchInDeals();
  }, []);


return(
  <Container className='flex flex-row flex-wrap bg-[#F1EAFF] gap-y-8 h-[45.5rem] overflow-y-scroll    '>
    {inDeals ? inDeals.map((item) => (
      <InDealsCard 
        key={item.id}
        id={item.id}
        priceOffer = {item.price}
        title={item.title}
        imageUrl={item.imageUrl}
        tags={item.tags}
        revertedOn={item.revertedOn}
        size={item.size}
        description={item.description}
      />
    )) : <>
      You have no Incoming Deals, Please Check back later...
    </>}
{/* 
    <InDealsCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  priceOffer="2001"
  size="12"
    />
    <InDealsCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  priceOffer="2001"
  size="12"
    />
    <InDealsCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  tags={["New Arrival","Trendy", "New Arrival"]}
  priceOffer="2001"
  size="12"
    />
    <InDealsCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  priceOffer="2001"
  size="12"
    />
    <InDealsCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  priceOffer="2001"
  size="12"
    />
    <InDealsCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  priceOffer="2001"
  size="12"
    /> */}

    </Container>
)}

export default InDealsPage;