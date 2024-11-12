import React from 'react';
import {InDealsCard, Container} from './mainComponent';

function InDealsPage(){
return(
    <Container className='flex flex-row flex-wrap bg-[#F1EAFF] gap-y-8 h-[45.5rem] overflow-y-scroll    '>
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
    />

    </Container>
)}

export default InDealsPage;