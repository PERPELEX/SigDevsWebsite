import React, { useState } from "react";

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Web3Forms API key - replace with your actual key
  const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  // Log the environment variable to check if it's being accessed correctly

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitMessage("Missing Web3Forms access key.");
      setIsSubmitting(false);
      return;
    }

    // Prepare form data for Web3Forms
    const formDataForSubmission = new FormData();
    formDataForSubmission.append("access_key", WEB3FORMS_ACCESS_KEY);
    formDataForSubmission.append("firstName", formData.firstName);
    formDataForSubmission.append("lastName", formData.lastName);
    formDataForSubmission.append("phoneNumber", formData.phoneNumber);
    formDataForSubmission.append("email", formData.email);
    formDataForSubmission.append("title", formData.title);
    formDataForSubmission.append("message", formData.message);

    // Optional: Add subject for email
    formDataForSubmission.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataForSubmission,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          title: "",
          message: "",
        });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-[#fff] shadow-2xl rounded-2xl p-12 flex flex-col justify-between gap-4 ${className}`}
    >
      <span className="w-full flex flex-row gap-4">
        <input
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 hover:border-night-blue transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 hover:border-night-blue transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </span>

      <span className="w-full flex flex-row gap-4">
        <input
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 hover:border-night-blue transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 hover:border-night-blue transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </span>

      <div className="w-full flex flex-col">
        <input
          className="w-[100%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 hover:border-night-blue transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="w-full flex flex-col">
        <textarea
          className="border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 hover:border-night-blue transition-all ease-in-out duration-200 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>

      {submitMessage && (
        <div
          className={`text-center ${
            submitMessage.includes("successfully")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <div className="flex flex-row justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-medium px-4 py-2 border-2 bg-night-blue border-night-blue text-white rounded-xl hover:bg-white hover:text-night-blue hover:border-night-blue transition-all ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
