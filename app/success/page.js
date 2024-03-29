const PaymentSuccessful = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex h-[70%] w-[50%] flex-col items-center justify-center rounded-sm bg-white p-6 py-10 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto my-6 h-16 w-16 text-green-600"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Successful!
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for completing your online payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
