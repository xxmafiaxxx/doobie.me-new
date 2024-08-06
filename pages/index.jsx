import Layout from "../components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
const Gmap = dynamic(() => import("../components/elements/Gmap"), {
	ssr: false,
});

function Contact() {
	return (
		<>
			<Head>
				<title>
					Doobie Drone Deliveries - Brooklyn's Cannabis One-Stop-Shop| Cannabis
					Delivery Service
				</title>
				<meta
					property="og:title"
					content="Doobie Drone Deliveries - Brooklyn's First Cannabis & Drone Delivery Startup"
				/>
				<meta
					property="og:description"
					content="Doobie Deliveries is Brooklyn's first cannabis drone delivery service"
				/>
				<meta
					property="og:keywords"
					content="weed, drugs,weed delivery,weed app, weed in brooklyn,doobie,cannabis,marijuana,drone deliveries,cannabis drone,cannabis token,"
				/>
				<meta property="og:url" content="https://doobie.me" />
				<meta property="og:image" content="/assets/imgs/logodoobie.png" />

				<meta property="og:type" content="website" />

				<link rel="icon" href="/favicon.png" />
			</Head>
			<Layout parent="Home">
				<div className="page-content pt-50">
					<div className="container">
						<div className="row">
							<div className="col-xl-10 col-lg-12 m-auto">
								<section className="row align-items-end mb-50">
									<div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
										<h4 className="mb-20 text-brand">
											Doobie Drone Deliveries
										</h4>
										<h1 className="mb-30">Coming Soon to NYC</h1>
										<p className="mb-20">
											Imagine a world where the items you need arrive at your
											doorstep within minutes, bypassing traffic, reducing
											carbon footprints, and redefining convenience. Welcome to
											Doobie Drone Deliveries, where innovation meets
											efficiency, and the sky is no longer the limit—it's our
											highway.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
											dapibus leo.
										</p>
									</div>
									<div className="col-lg-8">
										<div className="row">
											<div className="col-lg-6 mb-4">
												<h5 className="mb-20">01. Crowd Funding</h5>
												<p>
													We're not just a delivery service; we're a movement
													towards a smarter, greener future. But to bring this
													vision to life, we need your support. By contributing
													to our crowdfunding campaign, you're not only
													investing in a groundbreaking technology but also in a
													cleaner planet and a more efficient way of living.
												</p>
											</div>
											<div className="col-lg-6 mb-4">
												<h5 className="mb-20">
													02. Why Choose Doobie Drone Deliveries?
												</h5>
												<p>
													At Doobie Drone Deliveries, we harness cutting-edge
													drone technology to provide an unparalleled delivery
													experience. Our fleet of advanced drones is equipped
													to handle everything from urgent medical supplies to
													your favorite local takeout, all while ensuring speed,
													safety, and sustainability. We believe in transforming
													everyday logistics into a seamless, high-tech
													experience that benefits consumers, businesses, and
													the environment.
												</p>
											</div>
											<div className="col-lg-6 mb-lg-0 mb-4">
												<h5 className="mb-20 text-brand">
													03. Drone Delivery Instructions
												</h5>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Ut elit tellus, luctus nec ullamcorper mattis,
													pulvinar dapibus leo.
												</p>
											</div>
											<div className="col-lg-6">
												<h5 className="mb-20">04.Why Now?</h5>
												<p>
													The demand for quick, reliable, and eco-friendly
													delivery options has never been higher. With your
													help, Doobie Drone Deliveries can be at the forefront
													of this transformation. We're offering exclusive perks
													for our early backers, including discounted delivery
													rates, VIP access to new features, and a chance to be
													part of a community that’s changing the world, one
													delivery at a time.
												</p>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
					<section className="container mb-50 d-none d-md-block">
						<div className="border-radius-15 overflow-hidden">
							<div id="map-panes" className="leaflet-map">
								<Gmap />
							</div>
						</div>
					</section>
					<div className="container">
						<div className="row">
							<div className="col-xl-10 col-lg-12 m-auto">
								<section className="mb-50">
									<div className="row mb-60">
										<div className="col-md-4 mb-4 mb-md-0">
											<h4 className="mb-15 text-brand">Office</h4>
											18 East 48th Street.
											<br />
											New York, NY, 11213, USA
											<br />
											<abbr title="Phone">Phone:</abbr> (929) 487-3802
											<br />
											<abbr title="Email">Email: </abbr>smackedc@gmail.com
											<br />
											<a className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up">
												<i className="fi-rs-marker mr-5"></i>View map
											</a>
										</div>
										<div className="col-md-4 mb-4 mb-md-0">
											<h4 className="mb-15 text-brand">Studio</h4>
											18 East 48th Street.
											<br />
											Chicago, New York, NY, 11213, USA , USA
											<br />
											<abbr title="Phone">Phone:</abbr> (929) 487-3802
											<br />
											<abbr title="Email">Email: </abbr>smackedc@gmail.com
											<br />
											<a className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up">
												<i className="fi-rs-marker mr-5"></i>View map
											</a>
										</div>
										<div className="col-md-4">
											<h4 className="mb-15 text-brand">Shop</h4>
											18 East 48th Street.
											<br />
											New York, NY, 11213, USA
											<br />
											<abbr title="Phone">Phone:</abbr> (929) 487-3802
											<br />
											<abbr title="Email">Email: </abbr>smackedc@gmail.com
											<br />
											<a className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up">
												<i className="fi-rs-marker mr-5"></i>View map
											</a>
										</div>
									</div>
									<div className="row">
										<div className="col-xl-8">
											<div className="contact-from-area padding-20-row-col">
												<h5 className="text-brand mb-10">Contact form</h5>
												<h2 className="mb-10">Drop Us a Line</h2>
												<p className="text-muted mb-30 font-sm">
													Your email address will not be published. Required
													fields are marked *
												</p>
												<form
													className="contact-form-style mt-30"
													id="contact-form"
													action="#"
													method="post"
												>
													<div className="row">
														<div className="col-lg-6 col-md-6">
															<div className="input-style mb-20">
																<input
																	name="name"
																	placeholder="First Name"
																	type="text"
																/>
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="input-style mb-20">
																<input
																	name="email"
																	placeholder="Your Email"
																	type="email"
																/>
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="input-style mb-20">
																<input
																	name="telephone"
																	placeholder="Your Phone"
																	type="tel"
																/>
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="input-style mb-20">
																<input
																	name="subject"
																	placeholder="Subject"
																	type="text"
																/>
															</div>
														</div>
														<div className="col-lg-12 col-md-12">
															<div className="textarea-style mb-30">
																<textarea
																	name="message"
																	placeholder="Message"
																></textarea>
															</div>
															<button
																className="submit submit-auto-width"
																type="submit"
															>
																Send message
															</button>
														</div>
													</div>
												</form>
												<p className="form-messege"></p>
											</div>
										</div>
										<div className="col-lg-4 pl-50 d-lg-block d-none">
											<img
												className="border-radius-15 mt-50"
												src="assets/imgs/page/contact-2.png"
												alt=""
											/>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Contact;
