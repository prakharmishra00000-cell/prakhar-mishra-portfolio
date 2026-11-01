import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Forward to Web3Forms / Formspree gateway to guarantee real email delivery to prakharmishraflp@gmail.com
    const forwardPayload = {
      access_key: "3c3182b8-936d-4767-8971-55ce4e76ea0a", // Fallback public gateway token or direct forward
      name: name,
      email: email,
      message: message,
      subject: `New Portfolio Inquiry from ${name} (${email})`,
      to: "prakharmishraflp@gmail.com"
    };

    let delivered = false;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(forwardPayload)
      });

      if (response.ok) {
        delivered = true;
      }
    } catch (e) {
      console.warn("External gateway forward attempt failed, returning client mailto fallback:", e);
    }

    return NextResponse.json({ 
      success: true, 
      delivered,
      directMailto: `mailto:prakharmishraflp@gmail.com?subject=${encodeURIComponent(`Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
