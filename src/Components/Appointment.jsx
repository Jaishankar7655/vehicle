import React, { useState } from "react";
import { Calendar, Clock, Car, Wrench, MessageSquare } from "lucide-react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    vehicle: "",
    services: [],
    date: "",
    time: "",
    notes: "",
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedServices = checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value);
      return { ...prevData, services: updatedServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionSuccess(true);
    setTimeout(() => setSubmissionSuccess(false), 5000);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://png.pngtree.com/background/20231016/original/pngtree-3d-rendering-of-garage-with-roller-door-opened-picture-image_5583488.jpg"
          alt="Garage Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Form Container */}
      <div className="relative z-10 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                Vehicle Service Appointment
              </h1>
              <p className="text-red-100 text-center mt-2">
                Schedule your service with our expert technicians
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-8 space-y-6"
            >
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Car className="text-red-500" size={20} />
                  <label className="block text-sm font-medium text-gray-700">
                    Vehicle Details
                  </label>
                </div>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="Enter vehicle name and model"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  required
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Wrench className="text-red-500" size={20} />
                  <label className="block text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                </div>
                <div className="space-y-2">
                  {["Car Wash and Spa", "Mechanical Repair", "General Services", "Tyres and Wheel Services", "Electrical Repairs"].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={service.toLowerCase()}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label className="text-sm font-medium text-gray-700">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="text-red-500" size={20} />
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred Date
                    </label>
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                    required
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="text-red-500" size={20} />
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred Time
                    </label>
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="text-red-500" size={20} />
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                </div>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requirements or concerns?"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium py-4 px-4 rounded-lg hover:from-red-700 hover:to-red-600 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Schedule Appointment
              </button>
            </form>

            {/* Confirmation Message */}
            {submissionSuccess && (
              <div className="mt-4 bg-green-100 text-green-800 text-sm font-medium px-4 py-3 rounded-lg shadow-lg">
                Appointment scheduled successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
