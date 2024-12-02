import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Destructure form data from request body
  const { firstName, lastName, phoneNumber, email, message } = req.body;

  // Validate input (basic validation)
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Using Gmail - you can replace with your email service
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: "hannanamir18@gamil.com", // Recipient address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Successful response
    res.status(200).json({
      message: "Message sent successfully",
      success: true,
    });
  } catch (error) {
    // Error handling
    console.error("Email sending error:", error);
    res.status(500).json({
      message: "Failed to send email",
      success: false,
      error: error.message || "Unknown error",
    });
  }
}
