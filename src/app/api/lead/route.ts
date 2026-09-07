import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      serviceType,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      hourlyDuration,
      passengers,
      luggage,
      vehicle,
      fullName,
      phone,
      email,
      flightNumber,
      specialRequests,
      createdAt,
    } = body;

    // Validate required fields
    if (!fullName || !phone || !pickupLocation) {
      return NextResponse.json(
        { error: "Missing required fields (fullName, phone, pickupLocation)" },
        { status: 400 }
      );
    }

    // In a production setup, here we can send an email via Resend, SendGrid, or ping a Telegram bot / WhatsApp webhook.
    // For now we log and return a success response with full confirmation payload.
    console.log("=== NEW DOGAN VIP RIDE LEAD RECEIVED ===");
    console.log({
      customer: { fullName, phone, email },
      trip: {
        serviceType,
        pickupLocation,
        dropoffLocation,
        pickupDate,
        pickupTime,
        hourlyDuration,
        passengers,
        luggage,
        vehicle,
        flightNumber,
        specialRequests,
      },
      receivedAt: createdAt || new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Lead received successfully. 24/7 Dispatch has been notified.",
      leadId: `LEAD-${Date.now()}`,
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error processing lead" },
      { status: 500 }
    );
  }
}
