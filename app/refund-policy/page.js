import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Refund & Return Policy</h1>

      <p className="mb-4">
        Thank you for purchasing from CDKeyZone.com. We value our customers and
        strive to ensure your satisfaction with our products and services.
      </p>

      <div className="mb-8">
        <p>
          As digital products are non-refundable, we are committed to assisting
          you throughout the activation process until your software is
          successfully activated. In the event that your key appears invalid, we
          will promptly provide you with a replacement key.
        </p>
      </div>

      <div className="mb-8">
        <p>
          Please note that keys must be used within 30 days of purchase, after
          which the warranty is voided.
        </p>
      </div>

      <div className="mb-8">
        <p>
          CDKeyZone.com reserves the right to check the activation details of
          your product key within seven calendar days after purchase. If it is
          found that the key has already been activated, we reserve the right to
          deny a refund, as the purchased service has been provided as agreed
          upon.
        </p>
      </div>

      <div className="mb-8">
        <p>
          Due to the nature of digital products, refunds will not be issued
          based on dissatisfaction with the purchased game or inability of your
          computer to run the product normally. All crashes and bugs should be
          reported to the respective provider or maker of the product (e.g.,
          Uplay, Steam, Origin).
        </p>
      </div>

      <div className="mb-8">
        <p>
          By making a purchase, you agree to direct delivery and forfeit the
          right to cancel or withdraw from the transaction.
        </p>
      </div>

      <div className="mb-8">
        <p>
          If you believe you qualify for a refund, please do not hesitate to
          contact our support team at{" "}
          <a
            href="mailto:support@cdkeyzone.com"
            className="text-blue-600 hover:underline"
          >
            support@cdkeyzone.com
          </a>
          , and we will be happy to assist you.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
