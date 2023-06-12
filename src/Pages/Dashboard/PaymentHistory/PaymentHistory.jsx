import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure()

    const [paymentHistory, setPaymentHistory] = useState([]);
    useEffect(() => {
        axiosSecure("http://localhost:5000/enrolled-class")
            .then(res => {
                const enrolledClassesData = res.data;
                setPaymentHistory(enrolledClassesData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    console.log(paymentHistory);

    return (
        <div>
            <Helmet>
                <title>Elite Sports  Academy | Payment History</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Details</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((pay, index) =>
                                <tr key={pay._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {pay.className}
                                    </td>
                                    <td>
                                        {pay.transectionId}
                                    </td>
                                    <td>
                                        ${pay.price}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;