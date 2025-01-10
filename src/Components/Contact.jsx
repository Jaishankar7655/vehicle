import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare, Loader2 } from "lucide-react";

function Alert({ children, className }) {
  return <div className={`p-4 rounded-lg border ${className}`}>{children}</div>;
}

function AlertTitle({ children, className }) {
  return <h3 className={`font-bold mb-2 ${className}`}>{children}</h3>;
}

function AlertDescription({ children, className }) {
  return <p className={className}>{children}</p>;
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        ...status,
        submitting: false,
        info: { error: true, msg },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch("https://formspree.io/f/mgvvaryp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.ok) {
        handleServerResponse(
          true,
          "Thank you for your message. We'll get back to you soon!"
        );
      } else {
        handleServerResponse(
          false,
          json.error || "There was an error submitting the form."
        );
      }
    } catch (error) {
      handleServerResponse(
        false,
        "There was a network error. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Get in Touch
            </h1>
            <p className="text-red-100 text-center mt-2">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          {status.submitted ? (
            <div className="p-8">
              <Alert className="bg-green-50 border-green-200">
                <AlertTitle className="text-green-800 font-semibold">
                  Message Sent Successfully!
                </AlertTitle>
                <AlertDescription className="text-green-800">
                  {status.info.msg}
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {status.info.error && (
                <Alert className="bg-red-50 border-red-200">
                  <AlertDescription className="text-red-800">
                    {status.info.msg}
                  </AlertDescription>
                </Alert>
              )}

              {/* Name Field */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="text-red-500" size={20} />
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                </div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  required
                  disabled={status.submitting}
                  aria-label="Full Name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-red-500" size={20} />
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  required
                  disabled={status.submitting}
                  aria-label="Email Address"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-red-500" size={20} />
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                </div>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  required
                  disabled={status.submitting}
                  aria-label="Phone Number"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="text-red-500" size={20} />
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? Please provide as much detail as possible..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  required
                  disabled={status.submitting}
                  aria-label="Your Message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-4 px-4 rounded-lg hover:from-red-600 hover:to-red-500 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                aria-label="Send Message"
              >
                {status.submitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Privacy Notice */}
              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy. We'll
                never share your information.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="w-full my-2" >
        <iframe
        className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.42220465658!2d77.45515441108877!3d23.26410377891753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c690e7ba85911%3A0xbe3bcb912f1c609d!2sVehicle%20Solution%20Bhopal%20-%20Jk%20Road%20Bhopal!5e0!3m2!1sen!2sin!4v1735632409050!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactForm;
