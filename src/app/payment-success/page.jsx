"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");
  const amount = searchParams.get("amount");
  const redirectStatus = searchParams.get("redirect_status");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-green-500 text-white py-10 rounded-md w-[60%]">
        <h1 className="text-center text-2xl font-semibold">
          Hurrah! Payment successful 😁😁😁
        </h1>
        <p className="text-center mt-4">
          Payment Intent: {paymentIntent} <br />
          Amount: {amount} <br />
          Status: {redirectStatus}
        </p>
      </div>
    </div>
  );
};

export default page;
