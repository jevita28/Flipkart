import React, { useRef } from "react";
import "./Orders.css";

function Orders() {
    const scrollRef1 = useRef(null);
    const scrollRef2 = useRef(null);
    const scrollRef3 = useRef(null);

    const scroll = (ref, direction) => {
        const container = ref.current;
        const itemWidth = container.offsetWidth / 6;
        container.scrollBy({
          left: direction === "left" ? -itemWidth * 6 : itemWidth * 6,
          behavior: "smooth",
        });
      };

  return (
    <div className="orders-container">
      <h2>Best of Electronics</h2>
      <div className="product-scroll-container">

      <button className="scroll-btn left" onClick={() => scroll(scrollRef1, "left")}>&lt;</button>
      <div className="products" ref={scrollRef1}>

          <div className="product"><img src="src/assets/smartwatch.jpg" alt="Smartwatch" />Smartwatches are under<h3>From ₹1,049</h3></div>
          <div className="product"><img src="src/assets/printer.jpg" alt="Printers" />Top wireless printers<h3>Shop now</h3></div>
          <div className="product"><img src="src/assets/monitor.jpg" alt="Monitors" />Monitors<h3>From ₹9,999</h3></div>
          <div className="product"><img src="src/assets/boatwatch.jpg" alt="Boat" />BOAT Smartwatches<h3>Grab now</h3></div>
          <div className="product"><img src="src/assets/asus.jpg" alt="Asus" />ASUS Monitors<h3>From ₹14,999</h3></div>
          <div className="product"><img src="src/assets/camera.jpg" alt="Camera" />Canon Camera<h3>From ₹43,999</h3></div>
          <div className="product"><img src="src/assets/shaver.jpg" alt="Shaver" />Best of Shavers<h3>From ₹1,649 </h3></div>
          <div className="product"><img src="src/assets/flip[krt.jpg"  style={{width:"300px", height:"200px"}}/></div>
        </div>
        <button className="scroll-btn right" onClick={() => scroll(scrollRef1, "right")}>&gt;</button>

        
      </div>


     <h2>Beauty ,Foods Toys & more</h2>
      <div className="product-scroll-container">

      <button className="scroll-btn left" onClick={() => scroll(scrollRef2, "left")}>&lt;</button>
      <div className="products" ref={scrollRef2}>

          <div className="product"><img src="src/assets/coffee.jpg" alt="Cofee" />Coffee Powder<h3>Upto 80% off</h3></div>
          <div className="product"><img src="src/assets/stationry.jpg" alt="Stationery" />Top selling stationery<h3>From ₹49</h3></div>
          <div className="product"><img src="src/assets/gearcycle.jpg" alt="Gear cycle" />Gear Cycle<h3>Upto to 40% off</h3></div>
          <div className="product"><img src="src/assets/electriccycle.jpg" alt="Electric cycle" />Electric Cycle<h3>Upto to 30% off</h3></div>
          <div className="product"><img src="src/assets/actiontoys.jpg" alt="Action toys" />Best of Action toys<h3>Upto to 70% off</h3></div>
          <div className="product"><img src="src/assets/puzzle.jpg" alt="Puzzles" />Puzzles & Cubes<h3>From ₹99</h3></div>
          <div className="product"><img src="src/assets/gym.jpg" alt="Gym essentials" />Gym essentials<h3>From ₹159 </h3></div>
          <div className="product"><img src="src/assets/dryfruit.jpg" alt="Dry fruits" />Dry Fruits<h3>Upto to 70% off</h3></div>
        </div>
        <button className="scroll-btn right" onClick={() => scroll(scrollRef2, "right")}>&gt;</button>

        
      </div>


      <h2>Sports,Healthcare & more</h2>
      <div className="product-scroll-container">
        
      <button className="scroll-btn left" onClick={() => scroll(scrollRef3, "left")}>&lt;</button>
      <div className="products" ref={scrollRef3}>

          <div className="product"><img src="src/assets/hershe.jpg" alt="Food Sread" />Food Spread<h3>Upto 50% off</h3></div>
          <div className="product"><img src="src/assets/electriccycle.jpg" alt="Nongeared cycle" />Non-Geared Cycle<h3>From ₹3999</h3></div>
          <div className="product"><img src="src/assets/treadmill.jpg" alt="Treadmill" />Gear Cycle<h3>Upto to 40% off</h3></div>
          <div className="product"><img src="src/assets/softtoy.jpg" alt="SoftToys" />Soft Toys<h3>Upto to 30% off</h3></div>
          <div className="product"><img src="src/assets/oats.jpg" alt="Tea powder" />Oats<h3>Upto to 70% off</h3></div>
          <div className="product"><img src="src/assets/yogmat.jpg" alt="yogamat" />Yogamat<h3>From ₹159</h3></div>
          <div className="product"><img src="src/assets/honey.jpg" alt="honey" />Honey<h3>Upto ₹75% Off </h3></div>
          <div className="product"><img src="src/assets/musicaltoy.jpg" alt="toyy" />Musical Toys<h3>Under ₹200 </h3></div>
        </div>
        <button className="scroll-btn right" onClick={() => scroll(scrollRef3, "right")}>&gt;</button>

        
      </div>
    </div>



  );
}

export default Orders;