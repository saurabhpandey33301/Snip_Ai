import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const generateSignature = (razorpayOrderId, razorpayPaymentId) => {
  const keySecret = process.env.RAZORPAY_SECRET_KEY;
  if (!keySecret) {
    throw new Error(
      "RAZORPAY_SECRET_KEY is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");

  return sig;
};

export async function POST(request) {
  const { orderId, razorpayPaymentId, razorpaySignature } =
    await request.json();

  const signature = generateSignature(orderId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  }
  //some database call....to update order and status to user..........

  return NextResponse.json(
    { message: "Payment verified successfully", isOk: true },
    { status: 200 }
  );
}
