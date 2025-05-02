import React from "react";
import "./Flipkartdeal.css";
import Refri from '../src/assets/Refri.jpg';
import aircool from '../src/assets/aircool.jpg';
import Image from '../src/assets/fann.jpg';
import speaker from '../src/assets/speakr.jpg';
import shoee from '../src/assets/shoee.jpg';
import flipflop from '../src/assets/flipflop.jpg';
import shirt from '../src/assets/shirt.jpg';
import saree from '../src/assets/saree.jpg';

import moski from '../src/assets/moski.jpg';
import pilow from '../src/assets/pilow.jpg';
import rackk from '../src/assets/rackk.jpg';
import towel from '../src/assets/towel.jpg';




const data = [
  {
    title: "Appliance for Cool Summer",
    items: [
      { name: "Refrigerator", offer: "Special offer", img:Refri},
      { name: "Air Coolers", offer: "Min. 50% Off", img: aircool },
      { name: "Fans", offer: "Min. 50% Off", img: Image },
      { name: "Smart Speakers", offer: "Popular", img: speaker }
    ]
  },
  {
    title: "Season's Top Picks",
    items: [
      { name: "Men's Casual Shoes", offer: "Min. 70% Off", img: shoee },
      { name: "Men's Slippers & Flip Flops", offer: "Min. 70% Off", img: flipflop },
      { name: "Casual Shirts", offer: "Min. 50% Off", img: shirt },
      { name: "Women's Sarees", offer: "Min. 50% Off", img: saree}
    ]
  },
  {
    title: "Make Your Home Stylish",
    items: [
      { name: "Mosquito Nets", offer: "Min. 50% Off", img: moski },
      { name: "Pillows", offer: "Min. 50% Off", img: pilow },
      { name: "Shoe Rack", offer: "Min. 50% Off", img: rackk },
      { name: "Bath Towels", offer: "Min. 50% Off", img: towel }
    ]
  }
];

export default function FlipkartDeals() {
  return (
    <div className="deals-container">
      {data.map((section, index) => (
        <div className="deals-section" key={index}>
          <h2 className="section-title">{section.title}</h2>
          <div className="items-grid">
            {section.items.map((item, idx) => (
              <div className="deal-card" key={idx}>
                <img src={item.img} alt={item.name} className="deal-image" />
                <div className="deal-name">{item.name}</div>
                <div className="deal-offer">{item.offer}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}