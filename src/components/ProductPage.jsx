import React from 'react';
import {ProductCard, Container} from './mainComponent';

function ProductPage(){
return(
    <Container className='flex flex-row flex-wrap bg-[#F1EAFF] gap-y-8 h-[45.5rem] overflow-y-scroll    '>
    <ProductCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  buttonText="Buy Now"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  revertedOn="01-08-2024"
  size="12"
  description="Stylish and comfortable Adidas sneakers perfect for everyday wear."
    />
    <ProductCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  buttonText="Buy Now"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  revertedOn="01-08-2024"
  size="12"
  description="Stylish and comfortable Adidas sneakers perfect for everyday wear."
    />
    <ProductCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  buttonText="Buy Now"
  tags={["New Arrival","Trendy", "New Arrival"]}
  revertedOn="01-08-2024"
  size="12"
  description="Stylish and comfortable Adidas sneakers perfect for everyday wear."
    />
    <ProductCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  buttonText="Buy Now"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  revertedOn="01-08-2024"
  size="12"
  description="Stylish and comfortable Adidas sneakers perfect for everyday wear."
    />
    <ProductCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  buttonText="Buy Now"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  revertedOn="01-08-2024"
  size="12"
  description="Stylish and comfortable Adidas sneakers perfect for everyday wear."
    />
    <ProductCard 
  title="ADIDAS SNEAKERS"
  imageUrl="https://i.ibb.co/gt7gzBn/image-42.png"
  buttonText="Buy Now"
  tags={["Sneakers", "Trendy", "New Arrival"]}
  revertedOn="01-08-2024"
  size="12"
  description="Stylish and comfortable Adidas sneakers perfect for everyday wear."
    />

    </Container>
)}

export default ProductPage;