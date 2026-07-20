import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderReducer } from "../../Redux/Reducers/ordersReducer";
import { getUsersOrdersAction } from "../../Redux/Actions/orderActions";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const AllOrders = () => {
  const dispatch = useDispatch();

  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { orders, loading: ordersLoading } = useSelector(
    (state) => state.getAllOrders
  );

  let monthlyOrderData = {};
  let deliveryOrderCount = 0;
  let ShippedOrderCount = 0;

  if (orders) {
    orders.forEach(order => {
      const orderDate = new Date(order.orderDate);
      const monthYear = orderDate.toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!monthlyOrderData[monthYear]) {
        monthlyOrderData[monthYear] = {
          deliveredCount: 0,
          shippedCount: 0
        };
      }
      if (order.status === 'Delivered') {
        monthlyOrderData[monthYear].deliveredCount++;
      } else if (order.status === 'Shipped') {
        monthlyOrderData[monthYear].shippedCount++;
      }
    });
  }

  useEffect(() => {
    if (user && user._id) {
      document.title = `${user.firstName} Orders`;
      dispatch(getUsersOrdersAction(user._id));
    }
  }, [user]);

  const chartData = {
    labels: Object.keys(monthlyOrderData),
    datasets: [
      {
        label: "Delivered Orders",
        data: Object.values(monthlyOrderData).map(data => data.deliveredCount),
        backgroundColor: "blue",
        borderColor: "#36A2EB",
        borderWidth: 1,
      },
      {
        label: "Shipped Orders",
        data: Object.values(monthlyOrderData).map(data => data.shippedCount),
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Header />
      {ordersLoading || userLoading ? (
        <Loader LoadingName={"Loading Orders"} />
      ) : (
        <div className="orders-container ">
          <h1 className="Heading">
            {user && user.firstName ? user.firstName : "Orders"}{" "}
            <span>All Orders </span>
          </h1>

          <div className="orders-box">
            <div className="orders-cart-item">
              <div className="orders-cart-item-box">
                <div className="orders-total-cart-price">
                  {orders && orders.length === 0 ? (
                    <h2 className="not-place-order">
                      You Not Place Any Order Yet..!!
                    </h2>
                  ) : (
                    <>
                     <h2>Total Orders : {orders && orders.length} </h2>
                      <h2 className="delivered-order-count">
                        Delivered Orders : {deliveryOrderCount}
                      </h2>
                      <h2 className="shipped-order-count">
                        Shipped Orders : {ShippedOrderCount}{" "}
                      </h2>
                    </>
                  )}
                </div>
              </div>
              <div className="orders-chart-container">
                <Pie data={chartData} />
              </div>
              {orders &&
                orders.map((orderInfo) => {
                  return (
                    <div className="orders-cart-item-box" key={orderInfo._id}>
                      <div>
                        <Link to={`/Order/OrderDetails/${orderInfo._id}`}>
                          <h2 className="get-order-link">Get Order Details</h2>
                        </Link>
                        <h4> Total Items : {orderInfo.orderItems.length} </h4>
                        <h4> Shipping Charge: 0 </h4>
                      </div>
                      <div className="">
                        <h3>₹ {orderInfo.total}</h3>
                        <h3
                          className={
                            orderInfo.status === "Processing"
                              ? "order-processing-status"
                              : orderInfo.status === "Shipped"
                              ? "order-shipping-status"
                              : "order-delivered-status"
                          }
                        >
                          {orderInfo.status}
                        </h3>

                        <span className="order-date">
                          {orderInfo.orderDate}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AllOrders;
