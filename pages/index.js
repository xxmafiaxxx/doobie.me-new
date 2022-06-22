import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import FeatchTab from "../components/ecommerce/fetchTab";
import Head from "next/head";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import Bottom from "../components/elements/Bottom";
import QuickView from "./../components/ecommerce/QuickView";
import Banner5 from "./../components/elements/Banner5";
import Deals1 from "./../components/elements/Deals1";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "./../components/sliders/Intro1";
import Link from "next/link";

export default function Home() {
    return (
        <><Head>
        <title>Doobie Drone Deliveries - Brooklyn's Cannabis One-Stop-Shop| Cannabis Delivery Service</title>
        <meta property="og:title" content="Doobie Drone Deliveries - Brooklyn's Cannabis One-Stop-Shop| Drone Deliveries Home" />
        <meta property="og:description" content="Doobie Deliveries is Brooklyn's first cannabis drone delivery service" />
        <meta property="og:keywords" content="weed, drugs,weed delivery,weed app, weed in brooklyn,doobie,cannabis,marijuana" />
        <meta property="og:url" content="https://doobie.me" />
        <meta property="og:image" content="/assets/imgs/logodoobie.png" />

        <meta property="og:type" content="website" />
        <meta name="facebook-domain-verification" content="o40376jeco0o7i1q7o8x0d04xf49if" />
        <link rel="icon" href="/favicon.png" />
    </Head>
            <IntroPopup />

            <Layout noBreadcrumb="d-none">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <Intro1 />
                        </div>
                    </div>
                </section>

                <section className="popular-categories section-padding">
                    <div className="container wow animate__fadeIn animate__animated">
                        <div className="section-title">
                            <div className="title">
                                <h3>Featured Categories</h3>
                                <ul className="list-inline nav nav-tabs links">
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">Indica</a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">Sativa</a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link active">Hybrids</a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">Home Made</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banners mb-25">
                    <div className="container">
                        <div className="row">
                            <Banner5 />
                        </div>
                    </div>
                </section>

                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="col-lg-12">
                            <CategoryTab />
                        </div>
                    </div>
                </section>

                <section className="section-padding pb-5">
                    <div className="container">
                        <FetchTabSlider />
                    </div>
                </section>

                <section className="section-padding pb-5">
                    <div className="container">
                        <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                            <h3 className="">Deals Of The Day</h3>
                            <Link href="/products">
                                <a className="show-all">
                                    All Deals
                                    <i className="fi-rs-angle-right"></i>
                                </a>
                            </Link>
                        </div>
                        <FeatchDeals />
                    </div>
                </section>

                <Bottom />

                <QuickView />
            </Layout>
        </>
    );
}
