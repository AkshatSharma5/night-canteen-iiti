import React from 'react'
import { useNavigate } from 'react-router-dom'
 import Header from '../Header';
 import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer'
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle, 
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductPrice,
    Content,
    ProductButton
  } from './Menu.jsx';
  import {datahb} from './data.js';
  import {datacb} from './data.js';
  import {datas} from './data.js';
  import {dataMP} from './data.js';
  import {dataSW} from './data.js';

//  const Menu=() => {
//     const navigate = useNavigate();
//     return <>
//     <section className='menu' id='menu'>
//         <h1 className='Heading'>Menu</h1>
//         <div className='box-container'>
//             {imgs.map((item,index)=>
//             (
//                 <div className='box'>
//                     <img src={item.img}/>
//                     <h3>food</h3>
//                     <div className="price">20rs.</div>
//                     <a href="#" className="btn">Add to cart</a>
//                 </div>
//             )

//             )}
//         </div>
//     </section>
//     </>

const Menu=() => {
   const navigate = useNavigate();

    return (
        <>
    <Content>
    <Header/>
    <ProductsContainer>
        
            <ProductsHeading>
                <h1>DISHES MADE JUST FOR YOU</h1>
            </ProductsHeading>
            <ProductsHeading>
                Hot Beverages
            </ProductsHeading>
            <ProductWrapper>
                
                {datahb.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                        <ProductImg src={product.img} alt=  {product.alt} />
                        <ProductInfo>

                        <ProductTitle>
                            {product.name}
                        </ProductTitle>

                        <ProductPrice>
                            {product.price}
                        </ProductPrice>

                        <ProductButton>
                            {product.button}
                        </ProductButton>

                        </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
            <ProductsHeading>
                Cold Beverages
            </ProductsHeading>
            <ProductWrapper>
                
                {datacb.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                        <ProductImg src={product.img} alt=  {product.alt} />
                        <ProductInfo>

                        <ProductTitle>
                            {product.name}
                        </ProductTitle>
                       

                        <ProductPrice>
                            {product.price}
                        </ProductPrice>

                        <ProductButton>
                            {product.button}
                        </ProductButton>

                        </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
           
            <ProductsHeading>
                Soups
            </ProductsHeading>
            <ProductWrapper>
                
                {datas.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                        <ProductImg src={product.img} alt=  {product.alt} />
                        <ProductInfo>

                        <ProductTitle>
                            {product.name}
                        </ProductTitle>
                       

                        <ProductPrice>
                            {product.price}
                        </ProductPrice>

                        <ProductButton>
                            {product.button}
                        </ProductButton>

                        </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
            <ProductsHeading>
                Maggi & Pasta
            </ProductsHeading>
            <ProductWrapper>
                
                {dataMP.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                        <ProductImg src={product.img} alt=  {product.alt} />
                        <ProductInfo>

                        <ProductTitle>
                            {product.name}
                        </ProductTitle>
                       

                        <ProductPrice>
                            {product.price}
                        </ProductPrice>

                        <ProductButton>
                            {product.button}
                        </ProductButton>

                        </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
            <ProductsHeading>
                Sandwiches
            </ProductsHeading>
            <ProductWrapper>
                
                {dataSW.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                        <ProductImg src={product.img} alt=  {product.alt} />
                        <ProductInfo>

                        <ProductTitle>
                            {product.name}
                        </ProductTitle>
                       

                        <ProductPrice>
                            {product.price}
                        </ProductPrice>

                        <ProductButton>
                            {product.button}
                        </ProductButton>

                        </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        
        </ProductsContainer><Footer/>
        </Content>
    </>
  )
 
            }
export default Menu