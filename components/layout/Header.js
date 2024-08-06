import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return <>
        <header className="header-area header-style-1 header-height-2">
            <div className="mobile-promotion">
                <span>
                    Grand opening, <strong>up to 15%</strong> off all items.
                    Only <strong>3 days</strong> left
                </span>
            </div>
            <div className="header-top header-top-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info">
                                <ul>
                                    <li>
                                        <Link href="/page-about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/page-account">
                                            My Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop-wishlist">
                                            Wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/page-account">
                                            Order Tracking
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="text-center">
                                <div
                                    id="news-flash"
                                    className="d-inline-block"
                                >
                                    <ul>
                                        <li>
                                            Get great devices up to 50% off
                                            <Link href="/shop-grid-right">
                                                 View details
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info header-info-right">
                                <ul>
                                    <li>
                                        Need help? Call Us:{" "}
                                        <strong className="text-brand">
                                            {" "}
                                            + 1718 673 8192
                                        </strong>
                                    </li>
                                    <li>
                                        <Link href="/#" className="language-dropdown-active">

                                            <i className="fi-rs-world"></i>English<i className="fi-rs-angle-small-down"></i>

                                        </Link>
                                        <ul className="language-dropdown">
                                            <li>
                                                <Link href="/#">

                                                    <img
                                                        src="/assets/imgs/theme/flag-fr.png"
                                                        alt=""
                                                    />Français
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">

                                                    <img
                                                        src="/assets/imgs/theme/flag-dt.png"
                                                        alt=""
                                                    />Deutsch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">

                                                    <img
                                                        src="/assets/imgs/theme/flag-ru.png"
                                                        alt=""
                                                    />Pусский
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="language-dropdown-active"
                                            href="#"
                                        >
                                            USD{" "}
                                            <i className="fi-rs-angle-small-down"></i>
                                        </a>
                                        <ul className="language-dropdown">
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="/assets/imgs/theme/flag-fr.png"
                                                        alt=""
                                                    />
                                                    INR
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="/assets/imgs/theme/flag-dt.png"
                                                        alt=""
                                                    />
                                                    MBP
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="/assets/imgs/theme/flag-ru.png"
                                                        alt=""
                                                    />
                                                    EU
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="header-wrap">
                        <div className="logo logo-width-1">
                            <Link href="/">

                                <img
                                    src="/assets/imgs/logodoobie.png"
                                    alt="logo"
                                />

                            </Link>
                        </div>
                        <div className="header-right">
                            <div className="search-style-2">
                                <Search />
                            </div>
                            <div className="header-action-right">
                                <div className="header-action-2">
                                    <div className="search-location">
                                        <form action="#">
                                            <select className="select-active">
                                                <option>
                                                    Your Location
                                                </option>
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>Arizona</option>
                                                <option>Delaware</option>
                                                <option>Florida</option>
                                                <option>Georgia</option>
                                                <option>Hawaii</option>
                                                <option>Indiana</option>
                                                <option>Maryland</option>
                                                <option>Nevada</option>
                                                <option>New Jersey</option>
                                                <option>New Mexico</option>
                                                <option>New York</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-compare">

                                            <img
                                                className="svgInject"
                                                alt="Evara"
                                                src="/assets/imgs/theme/icons/icon-compare.svg"
                                            />
                                            <span className="pro-count blue">
                                                {totalCompareItems}
                                            </span>

                                        </Link>
                                        <Link href="/shop-compare">

                                            <span className="lable ml-0">
                                                Compare
                                            </span>

                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">

                                            <img
                                                className="svgInject"
                                                alt="Evara"
                                                src="/assets/imgs/theme/icons/icon-heart.svg"
                                            />
                                            <span className="pro-count blue">
                                                {totalWishlistItems}
                                            </span>

                                        </Link>
                                        <Link href="/shop-wishlist" legacyBehavior>
                                            <span className="lable">
                                                Wishlist
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart" className="mini-cart-icon">

                                            <img
                                                alt="Evara"
                                                src="/assets/imgs/theme/icons/icon-cart.svg"
                                            />
                                            <span className="pro-count blue">
                                                {totalCartItems}
                                            </span>

                                        </Link>
                                        <Link href="/shop-cart">

                                            <span className="lable">
                                                Cart
                                            </span>

                                        </Link>
                                    </div>

                                    <div className="header-action-icon-2">
                                        <Link href="/page-account">
                                            <img
                                                className="svgInject"
                                                alt="Nest"
                                                src="/assets/imgs/theme/icons/icon-user.svg"
                                            />
                                        </Link>
                                        <Link href="/page-account">
                                            <span className="lable ml-0">
                                                Account
                                            </span>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                            <ul>
                                                <li>
                                                    <Link href="/page-account">

                                                        <i className="fi fi-rs-user mr-10"></i>My Account</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-account">
                                                        <i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-account">
                                                        <i className="fi fi-rs-label mr-10"></i>My Voucher</Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-wishlist">
                                                        <i className="fi fi-rs-heart mr-10"></i>My Wishlist</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-account">
                                                        <i className="fi fi-rs-settings-sliders mr-10"></i>Setting</Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login">
                                                        <i className="fi fi-rs-sign-out mr-10"></i>Sign out</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    scroll
                        ? "header-bottom header-bottom-bg-color sticky-bar stick"
                        : "header-bottom header-bottom-bg-color sticky-bar"
                }
            >
                <div className="container">
                    <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                            <Link href="/">

                                <img
                                    src="/assets/imgs/theme/logo.svg"
                                    alt="logo"
                                />

                            </Link>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                            <div className="main-categori-wrap d-none d-lg-block">
                                <a
                                    className="categories-button-active"
                                    onClick={handleToggle}
                                >
                                    <span className="fi-rs-apps"></span>
                                    <span className="et">Browse</span> All
                                    Categories
                                    <i className="fi-rs-angle-down"></i>
                                </a>

                                <div
                                    className={
                                        isToggled
                                            ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                                            : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                                    }
                                >
                                    <div className="d-flex categori-dropdown-inner">
                                        <CategoryProduct2/>
                                        <CategoryProduct3/>
                                    </div>
                                    <div
                                        className="more_slide_open"
                                        style={{ display: "none" }}
                                    >
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <Link href="/products">
                                                        {" "}
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-1.svg"
                                                            alt=""
                                                        />Milks and Dairies</Link>
                                                </li>
                                                <li>
                                                    <Link href="/products">
                                                        {" "}
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-2.svg"
                                                            alt=""
                                                        />Clothing & beauty</Link>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <Link href="/products">
                                                        {" "}
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-3.svg"
                                                            alt=""
                                                        />Wines & Drinks</Link>
                                                </li>
                                                <li>
                                                    <Link href="/products">
                                                        {" "}
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-4.svg"
                                                            alt=""
                                                        />Fresh Seafood</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="more_categories">
                                        <span className="icon"></span>{" "}
                                        <span className="heading-sm-1">
                                            Show more...
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                <nav>
                                    <ul>
                                        <li className="hot-deals">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-hot.svg"
                                                alt="hot deals"
                                            />
                                            <Link href="/products">
                                                Hot Deals
                                            
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="active">
                                                
                                                    Home
                                                    
                                                
                                            </Link>
                                       
                                        </li>
                                    
                                       

                                 

                                        <li className="position-static">
                                            <Link href="/cannabis-shop-nyc">
                                                Shop<i className="fi-rs-angle-down"></i>

                                            </Link>
                                            <ul className="mega-menu">
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <a
                                                        className="menu-title"
                                                        href="#"
                                                    >
                                                        Cannabis
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                               Indica
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                               Sativa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Hybrids
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Oils
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Exotic Products
                                                               
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Gear
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <a
                                                        className="menu-title"
                                                        href="#"
                                                    >
                                                        Accessories
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                Milk &
                                                                Flavoured
                                                                Milk
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Butter and
                                                                Margarine
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Eggs
                                                                Substitutes
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Marmalades
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Sour Cream
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Cheese
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <a
                                                        className="menu-title"
                                                        href="#"
                                                    >
                                                        Vapes
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                Breakfast
                                                                Sausage
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Dinner
                                                                Sausage
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Chicken
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Sliced Deli
                                                                Meat
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Wild Caught
                                                                Fillets
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Crab and
                                                                Shellfish
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-34">
                                                    <div className="menu-banner-wrap">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/imgs/banner/banner-menu.png"
                                                                alt="Nest"
                                                            />
                                                        </a>
                                                        <div className="menu-banner-content">
                                                            <h4>
                                                                Hot deals
                                                            </h4>
                                                            <h3>
                                                                Don't miss
                                                                <br />
                                                                Trending
                                                            </h3>
                                                            <div className="menu-banner-price">
                                                                <span className="new-price text-success">
                                                                    Save to
                                                                    50%
                                                                </span>
                                                            </div>
                                                            <div className="menu-banner-btn">
                                                                <a href="#">
                                                                    Shop now
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="menu-banner-discount">
                                                            <h3>
                                                                <span>
                                                                    25%
                                                                </span>
                                                                off
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                
                                        <li>
                                            <Link href="/contact-doobie">
                                                Drone Deliveries
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-doobie">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="hotline d-none d-lg-flex">
                            <img
                                src="/assets/imgs/theme/icons/icon-headphone.svg"
                                alt="hotline"
                            />

                            <p>
                                718-673-8192<span>24/7 Support Center</span>
                            </p>
                        </div>

                        <div className="header-action-icon-2 d-block d-lg-none">
                            <div className="burger-icon burger-icon-white">
                                <span className="burger-icon-top"></span>
                                <span className="burger-icon-mid"></span>
                                <span className="burger-icon-bottom"></span>
                            </div>
                        </div>

                        <div className="header-action-right d-block d-lg-none">
                            <div className="header-action-2">
                                <div className="header-action-icon-2">
                                    <Link href="/shop-wishlist">

                                        <img
                                            alt="Evara"
                                            src="/assets/imgs/theme/icons/icon-compare.svg"
                                        />
                                        <span className="pro-count white">
                                            {totalCompareItems}
                                        </span>

                                    </Link>
                                </div>
                                <div className="header-action-icon-2">
                                    <Link href="/shop-wishlist">

                                        <img
                                            alt="Evara"
                                            src="/assets/imgs/theme/icons/icon-heart.svg"
                                        />
                                        <span className="pro-count white">
                                            {totalWishlistItems}
                                        </span>

                                    </Link>
                                </div>
                                <div className="header-action-icon-2">
                                    <Link href="/shop-cart" className="mini-cart-icon">

                                        <img
                                            alt="Evara"
                                            src="/assets/imgs/theme/icons/icon-cart.svg"
                                        />
                                        <span className="pro-count white">
                                            {totalCartItems}
                                        </span>

                                    </Link>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <Link href="/shop-grid-right">

                                                        <img
                                                            alt="Evara"
                                                            src="/assets/imgs/shop/thumbnail-3.jpg"
                                                        />

                                                    </Link>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4>
                                                        <Link href="/shop-grid-right">
                                                            
                                                                Plain
                                                                Striola
                                                                Shirts
                                                            
                                                        </Link>
                                                    </h4>
                                                    <h3>
                                                        <span>1 × </span>
                                                        $800.00
                                                    </h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <Link href="/#">

                                                        <i className="fi-rs-cross-small"></i>

                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <Link href="/shop-grid-right">

                                                        <img
                                                            alt="Evara"
                                                            src="/assets/imgs/shop/thumbnail-4.jpg"
                                                        />

                                                    </Link>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4>
                                                        <Link href="/shop-grid-right">
                                                            
                                                                Macbook Pro
                                                                2022
                                                            
                                                        </Link>
                                                    </h4>
                                                    <h3>
                                                        <span>1 × </span>
                                                        $3500.00
                                                    </h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <Link href="/#">

                                                        <i className="fi-rs-cross-small"></i>

                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                                <h4>
                                                    Total
                                                    <span>$383.00</span>
                                                </h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <Link href="/shop-cart">
                                                    View cart
                                                </Link>
                                                <Link href="/shop-checkout">
                                                    Checkout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-action-icon-2 d-block d-lg-none">
                                    <div
                                        className="burger-icon burger-icon-white"
                                        onClick={toggleClick}
                                    >
                                        <span className="burger-icon-top"></span>
                                        <span className="burger-icon-mid"></span>
                                        <span className="burger-icon-bottom"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>;
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
