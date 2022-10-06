import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
    // React-routing navigate.
    let navigate = useNavigate();

    // Manage orders state.
    const [orders, setOrders] = useState<string[] | []>([]);

    // Fetch orders from localStorage.
    useEffect(() => {
        let storage = localStorage.getItem("orders");
        if (storage) {
            setOrders(JSON.parse(storage));
        }
    }, []);

    // Remove item from orders localStorage.
    const removeFromCart = (index: number) => {
        let storage = localStorage.getItem("orders");

        if (storage) {
            // Parse storage item into JS object.
            let orders: string[] = JSON.parse(storage);

            // Remove order from array.
            orders.splice(index, 1);

            // Save array back the localStorage.
            localStorage.setItem("orders", JSON.stringify(orders));
        }

        // Filter orders state.
        setOrders(orders.filter((item, idx) => idx !== index));

        // Refresh routing.
        navigate("/orders", { replace: true });
    };

    return (
        <div className="max-w-[1640px] mx-auto px-16 mb-8">
            <div className="flex items-center">
                <TbTruckDelivery size={30} className="mr-4" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl py-4">Orders</h2>
            </div>
            <div>
                {orders.length > 0 ? (
                        <table className="table-auto border-separate border-spacing-4 border border-slate-200 shadow-md text-left w-full max-w-[500px] sm:max-w-[800px]">
                            <thead>
                                <tr>
                                    <th className="border-b-2 text-lg">No.</th>
                                    <th className="border-b-2 text-lg">Item</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((item, index) => (
                                        <tr key={index}>
                                            <th className="font-normal">
                                                {index + 1}
                                            </th>
                                            <th className="font-normal">
                                                {item}
                                            </th>
                                            <th className="text-center font-normal">
                                                <button
                                                    className="bg-white shadow-md border-none p-2"
                                                    onClick={() =>
                                                        removeFromCart(index)
                                                    }
                                                >
                                                    <BsFillTrashFill
                                                        size={20}
                                                        className="text-slate-500 hover:text-red-600 duration-300"
                                                    />
                                                </button>
                                            </th>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    ) : (
                      <div>
                        <p className="text-slate-500 font-md leading-10">Haven't added anything on Cart.</p>
                        <p>
                          <Link to={"/"} className="text-slate-800 leading-10 cursor-pointer underline">Continue shopping ...</Link>
                        </p>
                      </div>
                    )}
            </div>
        </div>
    );
};

export default Orders;
