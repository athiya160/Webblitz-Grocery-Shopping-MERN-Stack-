import React, { useEffect, useRef, useState } from 'react';
import Header from "../Components/Header/Header";
import featureImg1 from "./../Assets/Images/feature-img-1.png";
import featureImg2 from "./../Assets/Images/feature-img-2.png";
import featureImg3 from "./../Assets/Images/feature-img-3.png";
import { FaStar,FaShoppingCart,FaChartLine  } from "react-icons/fa";
import { IoLeafSharp,IoPricetag  } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader/Loader";
import { getAllCategoryAction } from "../Redux/Actions/categoryAction";
import { getAllReviewsAction } from "../Redux/Actions/reviewsAction";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  //getting user from user
  const { loading: userLoading, user } = useSelector((state) => state.user);

  //getting category from state
  const { loading: categoryLoading, Categories } = useSelector(
    (state) => state.getAllCategory
  );

  //getting all Reviews from state
  const {
    reviews,
    loading: reviewsLoading,
    error,
  } = useSelector((state) => state.getAllReviews);

  //Get Recent Products
  const [recentProductLoading, setRecentLoading] = useState(false);
  const [recentProductsError, setRecentProductsError] = useState(false);
  const [recentProductsSuccess, setRecentProductsSuccess] = useState(false);
  const [recentProducts, setRecentProducts] = useState([]);

  const getRecentProducts = async () => {
    try {
      setRecentLoading(true);
      const { data } = await axios.get("/api/product/recent/products");
      setRecentProducts(data.products);
      setRecentLoading(false);
      setRecentProductsSuccess(true);
      setRecentLoading(false);
    } catch (error) {
      setRecentLoading(false);
      setRecentProductsError(true);
      // console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Home";
    dispatch(getAllCategoryAction());
    dispatch(getAllReviewsAction());
    getRecentProducts();
  }, [dispatch]);

  const options = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    // navigation: true,
    modules: [Autoplay, Navigation],
    className: "mySwiper",
  };
  

  return (
    <>
      <Header />
      {userLoading ||
      categoryLoading ||
      reviewsLoading ||
      recentProductLoading ? (
        <Loader LoadingName={"Loading Home"} />
      ) : (
        <>
        {/* {Theme-1} */}
          <div className="main">
            <section className='title'>
                  <span className="text-wrapper">
                  <span>Fresh <em style={{color:'#355E3B'}}>GROCERY</em> SHOPPING...</span>
                  </span>
                <h5 className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <Link to="/products">
                  {" "}
                  <button className="btn1">Shop Now</button>{" "}
                </Link>
            </section>
          </div>

      {/* Theme-2 */}

        <section className="features" id="features">
            <h1 className="Heading">
              Our <span>Features</span>
            </h1>
            <div className="box-container">
              <div className="box">
                <img src={featureImg1} alt="" width={10} height={10} />
                <h3>Fresh And Organic</h3>
                <p>
                  Fresh And Organic Delivery We Make  Easy By
                  Delivering Grocery, Products Well Are Committed To Serving You With Best
                  Quality Products
                </p>
              </div>

              <div className="box">
                <img src={featureImg2} alt=""  />
                <h3>Free Delivery</h3>
                <p>
                  {" "}
                  We Are Doing FREE Shipping All Over India Add Your Favorites
                  Products To Cart And Enjoy Assured Low Price Delivery
                </p>
              </div>

              <div className="box">
                <img src={featureImg3} alt="" />
                <h3>Cash On Delivery</h3>
                <p>
                  We Offer Cash On Delivery...!! <br /> You Can Pay When Your
                  Products Is Delivered.
                </p>
              </div>
              <div className="box">
                <img src={featureImg1} alt="" width={10} height={10} />
                <h3>Fresh And Organic</h3>
                <p>
                  Fresh And Organic Delivery We Make  Easy By
                  Delivering Grocery, Products Well Are Committed To Serving You With Best
                  Quality Products
                </p>
              </div>

            </div>
          </section>


       {/* {Theme-3} */}
        <section class="section2">
            <div class="content">
            <div class="image-content">
                <img src="https://i.ibb.co/tKx7srb/01.png" class="inline-photo" alt="HOW WE WORK"/>
              </div>
              <div class="text-content">
                <h2 class="title1">What's Inside the BOX Every Month</h2>
                <ul>
                  <li><span class="symbol">👉</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li><span class="symbol">👉</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li><span class="symbol">👉</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li><span class="symbol">👉</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>

              </div>
              
            </div>
          </section>


          {/* {Theme-4} */}
          <section class="section0">
            <div class="card inline-photo ">
              <table>
              <tr>
              <td><IoLeafSharp style={{fontSize:'50px', color:'#355E3B'}} /></td>
              <td>
              <h2 class="title">Balanced Diet</h2>
              <span class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></td>
              </tr>
              </table>
            </div>
          <div class="card inline-photo ">
              <table>
              <tr>
              <td><FaShoppingCart  style={{fontSize:'50px',color:'#355E3B'}} /></td>
              <td>
              <h2 class="title">Doorstep delivery</h2>
              <span class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></td>
              </tr>
              </table>
          </div>

              <div class="card inline-photo ">
              <table>
              <tr>
              <td><IoPricetag   style={{fontSize:'50px',color:'#355E3B'}} /></td>
              <td>
              <h2 class="title">Price guarantee</h2>
              <span class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></td>
              </tr>
              </table>
              </div>

              <div class="card inline-photo ">
              <table>
              <tr>
              <td><FaChartLine   style={{fontSize:'50px',color:'#355E3B'}} /></td>
              <td>
              <h2 class="title">Discover new</h2>
              <span class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></td>
              </tr>
              </table>
              </div>
              </section>

      
         {/* {Theme-5} */}

              <section class="section4">
                    <h1 class="title2">FLEXIBLE PLANS</h1>
                    <h5 class="sub-title">Skip & Cancel anytime - only order what you want. No commitments.</h5>
                    <Link to="/products">
                        {" "}
                        <button className="btn1">Shop Now</button>{" "}
                      </Link>
              </section>

          {/* Our Products */}
          <section className="top-products">
            <h1 className="Heading">
              New<span>Products</span>
            </h1>
            <div className="product-slider">
              <Swiper {...options}>
                <div className="wrapper">
                  {recentProducts.length !== 0 &&
                  recentProductsSuccess == true ? (
                    <>
                      {recentProducts.map((item) => {
                        return (
                          <SwiperSlide key={item._id}>
                            <div className="product-box">
                              <img src={item.url} alt="" />
                              <h1>{item.name}</h1>
                              <div className="product-price"> Rate : ₹ {item.rate}</div>
                              <button
                                className="btn1"
                                onClick={() => {
                                  Navigate(`/products/${item.name}`);
                                }}
                              >
                               View Product
                              </button>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Swiper>
            </div>
          </section>

          <section className="categories" id="categories">
            <h1 className="Heading">
              Product<span>Categories</span>
            </h1>
            <div className="category-box-container">
              {Categories &&
                Categories.map((category) => {
                  return (
                    <div className="box" key={category._id}>
                      <img src={category.categoryImage} alt="" />
                      <h1>{category.categoryName}</h1>
                      <br />
                      <Link
                        to={`/products?categoryId=${category._id}&categoryName=${category.categoryName}`}
                        className="btn1"
                      >
                        Shop Now
                      </Link>
                    </div>
                  );
                })}
            </div>
          </section>

          <section className="top-products" id="reviews">
            <h1 className="Heading">
              Customer <span>Reviews</span>
            </h1>
            <div className="product-slider">
              <Swiper {...options}>
                <div className="wrapper">
                  {reviews &&
                    reviews.map((review) => {
                      return (
                        <SwiperSlide key={review._id}>
                          <div className="box reviews-box">
                            {/* <img src={pic1} alt="" /> */}
                            <h1>
                              {" "}
                              {review.user.firstName +
                                " " +
                                review.user.lastName}
                            </h1>
                            <div className="price">{review.comment}</div>
                            <div className="stars">
                              <i>{<FaStar />}</i>
                              <i>{<FaStar />}</i>
                              <i>{<FaStar />}</i>
                              <i>{<FaStar />}</i>
                              <i>{<FaStar />}</i>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </div>
              </Swiper>
            </div>
          </section>
          <br />
          <br />
          <br />
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
