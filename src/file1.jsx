import React, { useState } from "react";
import './nav.css';

function Navbar() {
    const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);
    const [isDotsDropdownOpen, setDotsDropdownOpen] = useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="navs"></div>

                <div id="logo">
                    <img src="src/assets/logo.jpg" alt="flipkartlogo" />
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search for Products, Brands and More" />

                    {/* Login dropdown */}
                    <div
                        className="login-container"
                        onMouseEnter={() => setLoginDropdownOpen(true)}
                        onMouseLeave={() => setLoginDropdownOpen(false)}
                    >
                        <div className="icon-text">
                            <img
                                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                                alt="Login" width="24" height="24"
                            />
                            Login
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                                width="12" height="12" alt="arrow"
                            />
                        </div>
                        {isLoginDropdownOpen && (
                            <div className="dropdown">
                                <ul>
                                    <li style={{ textDecorationLine: "underline" }}>New Customer</li>
                                    <li>My Profile</li>
                                    <li>Orders</li>
                                    <li>Wishlist</li>
                                    <li>Rewards</li>
                                    <li>Gift Cards</li>
                                    <li>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="cart">
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                            alt="Cart" width="24" height="24"
                        />
                        Cart
                    </div>

                    <div className="sellr">
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                            alt="Become a Seller" width="24" height="24"
                        />
                        Become a Seller
                    </div>

                    {/* Dotss dropdown */}
                    <div
                        className="dotss"
                        onMouseEnter={() => setDotsDropdownOpen(true)}
                        onMouseLeave={() => setDotsDropdownOpen(false)}
                    >
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                            width="24" height="24" alt="More options"
                        />
                        {isDotsDropdownOpen && (
                            <div className="dropdown">
                                <ul>
                                    <li>Notification Preferences</li>
                                    <li>24x7 Customer Care</li>
                                    <li>Advertise</li>
                                    <li>Download App</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

