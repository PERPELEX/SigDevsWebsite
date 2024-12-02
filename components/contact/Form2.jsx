import React, { useState } from "react";

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          result.message || "Failed to send message. Please try again."
        );
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
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-night-blue"
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
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-night-blue"
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-[50%] border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-night-blue"
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
        <textarea
          className="border-2 border-gray-300 rounded-sm py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-night-blue"
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
