import React from "react";

const PaymentMethod = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment Method</h1>

      <h2 className="text-xl font-bold mb-4">How to Order:</h2>
      <p>
        Orders can be placed through our website,{" "}
        <a
          href="http://www.cdkeyzone.com"
          className="text-blue-600 hover:underline"
        >
          www.cdkeyzone.com
        </a>
        , quickly using available payment methods:
      </p>

      {/* List of payment methods */}
      <ul className="list-disc pl-5 mb-8">
        <li>Paypal</li>
        <li>Visa and Mastercard</li>
        <li>Crypto (USDT, BTC, Litecoin)</li>
        <li>Pi Network</li>
        <li>Flutterwave</li>
        <li>Payeer</li>
        <li>Neteller</li>
        <li>Skrill</li>
        <li>Alipay</li>
        <li>Applepay</li>
        <li>Bancontact</li>
        <li>Cashapp</li>
        <li>Giropay</li>
        <li>iDeal</li>
        <li>Link</li>
        <li>Sofort</li>
        <li>WeChat Pay</li>
      </ul>

      {/* Steps to order */}
      <ol className="list-decimal pl-5 mb-8">
        <li>Add the desired items to your shopping cart.</li>
        <li>
          Click on the shopping bag icon and choose "Proceed to Checkout".
        </li>
        <li>Enter your details and click Next.</li>
        <li>Select your preferred payment method and click "Place Order".</li>
        <li>Enter your payment details and complete the payment process.</li>
      </ol>

      <p>
        You will automatically receive an order confirmation at the specified
        email address. If you do not receive the confirmation, it may indicate
        that some information was not filled out correctly (e.g., the email
        address). In such a case, please send an email to{" "}
        <a
          href="mailto:support@cdkeyzone.com"
          className="text-blue-600 hover:underline"
        >
          support@cdkeyzone.com
        </a>
        .
      </p>
    </div>
  );
};

export default PaymentMethod;
