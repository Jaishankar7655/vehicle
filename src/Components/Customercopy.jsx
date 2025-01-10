import { ArrowLeft, ArrowRight, PlusCircle, MinusCircle, FileText, Download } from "lucide-react";
import React, { useState } from "react";

function Multiform() {
  const formSteps = [
    {
      id: 1,
      label: "Name:",
      placeholder: "Enter customer name",
      type: "text",
    },
    {
      id: 2,
      label: "Registration Number:",
      placeholder: "Enter vehicle registration number",
      type: "text",
    },
    {
      id: 3,
      label: "Contact:",
      placeholder: "Enter customer contact number",
      type: "number",
    },
    {
      id: 4,
      label: "E-mail:",
      placeholder: "Enter customer email",
      type: "email",
    },
    {
      id: 5,
      label: "Service Type:",
      type: "select",
      options: [
        "Jack & Handle Tools",
        "Wheel Arms / Blades",
        "Floor Mat",
        "Seat Covers Tom",
        "Side Moulding",
      ],
    },
    {
      id: 6,
      label: "Images:",
      type: "images",
    },
    {
      id: 7,
      label: "Demanded Job by Customer:",
      placeholder: "Enter details",
      type: "textarea",
    },
    {
      id: 8,
      label: "Executive Name:",
      placeholder: "Enter executive name",
      type: "text",
    },
    {
      id: 9,
      label: "Total Cost:",
      placeholder: "Enter total cost",
      type: "text",
    },
    {
      id: 10,
      label: "Bill Number:",
      placeholder: "Enter bill number",
      type: "number",
    },
    {
      id: 11,
      label: "Date:",
      type: "date",
    },
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  const handleNext = () => index < formSteps.length - 1 && setIndex(index + 1);
  const handleBack = () => index > 0 && setIndex(index - 1);

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleRemoveImage = (idx) => {
    setImages(images.filter((_, index) => index !== idx));
    setImageUrls(imageUrls.filter((_, index) => index !== idx));
  };

  const handleImageChange = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUrls = [...imageUrls];
        updatedUrls[idx] = reader.result;
        setImageUrls(updatedUrls);
      };
      reader.readAsDataURL(file);
      
      const updatedImages = [...images];
      updatedImages[idx] = file;
      setImages(updatedImages);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInvoice(true);
  };

  const Invoice = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div className="border-b-2 pb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">SERVICE INVOICE</h1>
            <p className="text-gray-600 mt-1">Customer Copy</p>
          </div>
          <div className="text-center">
            <img src="/api/placeholder/100/100" alt="Workshop Logo" className="h-16 mx-auto mb-2" />
            <h2 className="font-bold text-lg underline">Multi Brand Workshop & BodyShop</h2>
            <p className="text-sm text-gray-600">26/A Near Surjeet Hyundai, J.K. Road, Bhopal</p>
            <p className="text-sm text-gray-600">Tel: 0755-4862244 | Mob: 887112211</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Bill Number: {formData["Bill Number:"] || "N/A"}</p>
            <p className="text-gray-600">Date: {formData["Date:"] || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Customer Details</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {formData["Name:"]}</p>
            <p><span className="font-semibold">Contact:</span> {formData["Contact:"]}</p>
            <p><span className="font-semibold">Email:</span> {formData["E-mail:"]}</p>
            <p><span className="font-semibold">Registration:</span> {formData["Registration Number:"]}</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Service Details</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Service Type:</span> {formData["Service Type:"]}</p>
            <p><span className="font-semibold">Executive:</span> {formData["Executive Name:"]}</p>
            <p><span className="font-semibold">Total Cost:</span> ₹{formData["Total Cost:"]}</p>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="mt-8">
        <h3 className="font-bold text-gray-700 mb-3">Job Description</h3>
        <p className="text-gray-600 bg-gray-50 p-4 rounded">
          {formData["Demanded Job by Customer:"] || "No job description provided"}
        </p>
      </div>

      {/* Images */}
      {imageUrls.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold text-gray-700 mb-3">Service Images</h3>
          <div className="grid grid-cols-3 gap-4">
            {imageUrls.map((url, idx) => (
              <div key={idx} className="relative">
                <img
                  src={url}
                  alt={`Service ${idx + 1}`}
                  className="w-full h-40 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 border-t pt-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">Terms & Conditions</p>
            <p className="text-sm text-gray-600 mt-1">
              1. All disputes are subject to local jurisdiction
            </p>
            <p className="text-sm text-gray-600">
              2. Warranty as per company terms
            </p>
          </div>
          <div className="text-right">
            <button
              onClick={() => window.print()}
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Print Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const currentStep = formSteps[index];

  return (
    <div className="w-full min-h-screen bg-gray-100 py-10">
      {!showInvoice ? (
        <div className="max-w-lg mx-auto">
          <header className="bg-white shadow-md p-5 rounded-lg mb-6">
            <h1 className="text-2xl font-bold text-center text-gray-800">Service Form</h1>
          </header>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md p-6 rounded-lg"
          >
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {currentStep.label}
              </label>
              {currentStep.type === "select" ? (
                <select
                  onChange={(e) => handleInputChange(e, currentStep.label)}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  {currentStep.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : currentStep.type === "textarea" ? (
                <textarea
                  placeholder={currentStep.placeholder}
                  onChange={(e) => handleInputChange(e, currentStep.label)}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                />
              ) : currentStep.type === "images" ? (
                <div>
                  {images.map((_, idx) => (
                    <div key={idx} className="flex items-center mb-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, idx)}
                        className="w-full border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx)}
                        className="text-red-500 ml-2"
                      >
                        <MinusCircle className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="text-blue-500 flex items-center mt-2"
                  >
                    <PlusCircle className="h-5 w-5 mr-2" />
                    Add Image
                  </button>
                </div>
              ) : (
                <input
                  type={currentStep.type}
                  placeholder={currentStep.placeholder}
                  onChange={(e) => handleInputChange(e, currentStep.label)}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                disabled={index === 0}
                className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </button>
              {index === formSteps.length - 1 ? (
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Invoice
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <Invoice />
      )}
    </div>
  );
}

export default Multiform;