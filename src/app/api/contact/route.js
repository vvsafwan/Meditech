import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_TO,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Meditech Contact" <${email}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: subject || "New Home Collection Contact Form Message",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <div style="background-color: #0d6efd; padding: 20px; text-align: center; color: #ffffff;">
              <h2 style="margin: 0;">Meditech Lab</h2>
              <p style="margin: 5px 0 0;">Home Sample Collection Request</p>
            </div>

            <!-- Body -->
            <div style="padding: 20px; color: #333333;">
              <h3 style="margin-top: 0; color: #0d6efd;">New Customer Request</h3>

              <p>
                A customer has submitted a request for <strong>Home Sample Collection</strong>.
                Please find the details below:
              </p>

              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><strong>Name</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><strong>Email</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; vertical-align: top;"><strong>Message / Address Details</strong></td>
                  <td style="padding: 10px;">${message}</td>
                </tr>
              </table>

              <p style="margin-top: 20px;">
                Kindly arrange a technician to visit the customer’s location for sample collection.
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              © ${new Date().getFullYear()} Meditech Lab<br/>
              This is an automated email. Please do not reply.
            </div>

          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email sending failed" }), {
      status: 500,
    });
  }
}
