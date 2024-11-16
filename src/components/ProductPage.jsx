import React, { useEffect, useState } from 'react';
import {ProductCard, Container} from './mainComponent';
import { BASE_URL } from '../Constants';

function ProductPage() {

  const [productsCollection, setProductsCollection] = useState([]);

  const renderProductRequests = async () => {
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

        const { productRequests } = (await response.json()).data;

        let newProductRequest = [];
        productRequests.forEach(element => {
            const request = {
                title: element.title,
                imageUrl: element.buyer_product_picture,
                tags: element.tags,
                revertedOn: element.createdAt,
                size: element.size,
                description: element.description,
            }

            newProductRequest.push(request);
        });

        setProductsCollection(newProductRequest);

    } catch (error) {
        console.log(error.message);
    }
}

  useEffect(() => {
    renderProductRequests();
  }, []);
  
return(
  <Container className='flex flex-row flex-wrap bg-[#F1EAFF] gap-y-8 h-[45.5rem] overflow-y-scroll'>
    {
      productsCollection?.map((element, index) => {
        // console.log(element.imageUrl);
        return (
          <ProductCard 
          key={index}
          title={element.title}
          imageUrl={element.imageUrl}
          buttonText="Buy Now"
          tags={element.tags}
          revertedOn={element.createdAt}
          size={element.size}
          description={element.description}
            />
        )
      })
    }
    </Container>
)}

export default ProductPage;