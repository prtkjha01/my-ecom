"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "@/redux/slices/order";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order?.orders);

  const getStatusBadge = (status) => {
    switch (status) {
      case "PLACED":
        return (
          <span className="badge font-bold border border-yellow-600 bg-yellow-200 p-1 text-yellow-600 rounded badge-status-placed">
            Placed
          </span>
        );
      case "SHIPPED":
        return (
          <span className="badge font-bold border border-green-600 bg-green-200 p-1 text-green-600 rounded badge-status-shipped">
            Shipped
          </span>
        );
      case "DELIVERED":
        return (
          <span className="badge font-bold border border-blue-600 bg-blue-200 p-1 text-blue-600 rounded badge-status-delivered">
            Delivered
          </span>
        );
      case "CANCELLED":
        return (
          <span className="badge font-bold border border-red-600 bg-red-200 p-1 text-red-600 rounded badge-status-cancelled">
            Cancelled
          </span>
        );
      default:
        break;
    }
  };
  React.useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="p-4 sm:p-12">
      {orders.length > 0 &&
        orders.map((order) => (
          <div key={order._id} className="bg-white p-3 mb-4">
            <div className="flex justify-between">
              <div className="order-id flex items-center">
                <span className="text-xs mr-2 sm:text-sm md:text-base">
                  Order ID:
                </span>
                <span className="font-semibold text-xs sm:text-sm md:text-base">
                  {order._id}
                </span>
              </div>
              <div className="order-status ">
                {getStatusBadge(order.status)}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-[70%] flex flex-wrap gap-3">
                {order.products?.map((product) => (
                  <div
                    key={product.product._id}
                    className=" flex justify-between mt-2 relative"
                  >
                    <img
                      src={product.product.images[0]}
                      className="w-20 h-20"
                      alt={product.product.product_name}
                    />
                    <div className="count absolute bottom-0 right-0 flex items-center gap-1 text-sm text-white bg-blue-600 p-[2px] rounded-sm">
                      <span className="text-xs">X</span>
                      <span className="font-bold">{product.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[30%] total text-end">
                ₹ {Number(order.total).toLocaleString("en-IN")}
              </div>
            </div>
            <div className="expected-delivery-date flex justify-between mt-2">
              <div className="text-xs sm:text-sm md:text-base">
                <span className="mr-2">Payment Method:</span>
                <span className="font-semibold">{order.payment_method}</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base">
                <span className="mr-2">Expected Delivery Date:</span>
                <span className="font-semibold">
                  {new Date(order.expected_delivery_date).toDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Orders;
