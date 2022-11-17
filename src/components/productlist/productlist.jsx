import React from "react";
import "./productlist.css";
import Product from "../product/product";
import products from "../../data";
const Productlist = () => {
    return (
        <div className="productlist">
            <div className="productlist-texts">
                <h1 className="productlist-title"> Create and Inspire like a king.</h1>
                <p className="productlist-desc">
                I have 1 year of experience building diverse web projects. I am an undergraduate of electronics ans telecommunications engineerting. I volunteer as an IT officer at Victoria Relief Foundation. I enjoy meeting new people and finding ways to build websites of their dreams. I am dedicated, outgoing, and a team player.
                </p>
            </div>
            <div className="productlist-list">
                {products.map(item => (
                    <Product
                    key={item.id}
                    img={item.img}
                    link={item.link}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default Productlist;
