import { ArrowLeft, ArrowRight, PlusCircle, MinusCircle, FileText, Download, Share2, X } from "lucide-react";
import vlogo from "../assets/image/logo.png";
import React, { useState, useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
      label: "Vehicle Kilometers:",
      placeholder: "Enter current KM reading",
      type: "number",
    },
    {
      id: 6,
      label: "Services:",
      type: "multiService",
      options: [
        "Jack & Handle Tools",
        "Wheel Arms / Blades",
        "Floor Mat",
        "Seat Covers Tom",
        "Side Moulding",
      ],
    },
    {
      id: 7,
      label: "Images:",
      type: "images",
    },
    {
      id: 8,
      label: "Demanded Job by Customer:",
      placeholder: "Enter details",
      type: "textarea",
    },
    {
      id: 9,
      label: "Recommended Jobs (By RM/SA/QC):",
      placeholder: "Enter recommended jobs",
      type: "textarea",
    },
    {
      id: 10,
      label: "Estimated Parts & Oil:",
      placeholder: "Enter parts and oil details",
      type: "textarea",
    },
    {
      id: 11,
      label: "Estimated Labour:",
      placeholder: "Enter labour details",
      type: "textarea",
    },
    {
      id: 12,
      label: "Parts & Oil Charges:",
      placeholder: "Enter charges",
      type: "number",
    },
    {
      id: 13,
      label: "Labour Charges:",
      placeholder: "Enter labour charges",
      type: "number",
    },
    {
      id: 14,
      label: "Estimated Delivery Time:",
      placeholder: "Enter estimated time",
      type: "datetime-local",
    },
    {
      id: 15,
      label: "Executive Name:",
      placeholder: "Enter executive name",
      type: "text",
    },
    {
      id: 16,
      label: "Total Cost:",
      placeholder: "Enter total cost",
      type: "number",
    },
    {
      id: 17,
      label: "Bill Number:",
      placeholder: "Enter bill number",
      type: "number",
    },
    {
      id: 18,
      label: "Date:",
      type: "date",
    },
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const invoiceRef = useRef(null);

  const handleServiceToggle = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
    setFormData(prev => ({
      ...prev,
      "Services:": selectedServices.join(", ")
    }));
  };

  const handleInputChange = (e, label) => {
    setFormData(prev => ({
      ...prev,
      [label]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handlePrint = () => {
    const printContent = document.getElementById('invoice-container');
    const originalContents = document.body.innerHTML;
    
    // Add print-specific styles
    const style = document.createElement('style');
    style.innerHTML = `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
    #prb{
    display:none;
    
    }
        html, body {
          height: 100%;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden;
        }
        body * {
          visibility: hidden;
        }
        #invoice-container, #invoice-container * {
          visibility: visible;
        }
        #invoice-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 210mm;
          height: 297mm;
          padding: 20mm;
          margin: 0;
        }
        .no-print {
          display: none !important;
        }
        nav, footer {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    window.print();
    
    // Cleanup
    document.head.removeChild(style);
  };

  const handleDownload = async () => {
    try {
      const invoice = invoiceRef.current;
      const canvas = await html2canvas(invoice, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 800,
        windowHeight: 1131, // A4 ratio
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`service_invoice_${formData["Bill Number:"]}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleShare = async () => {
    try {
      const invoice = invoiceRef.current;
      const canvas = await html2canvas(invoice, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 800,
        windowHeight: 1131, // A4 ratio
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      const pdfBlob = pdf.output('blob');
      const pdfFile = new File([pdfBlob], `service_invoice_${formData["Bill Number:"]}.pdf`, {
        type: 'application/pdf'
      });

      if (navigator.share && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          title: `Service Invoice - ${formData["Name:"]}`,
          text: `Service invoice for ${formData["Name:"]} - ${formData["Bill Number:"]}`,
          files: [pdfFile]
        });
      } else {
        // Fallback for browsers that don't support file sharing
        const dataUrl = pdf.output('dataurlstring');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `service_invoice_${formData["Bill Number:"]}.pdf`;
        link.click();
      }
    } catch (error) {
      console.error("Error sharing:", error);
      alert("Error sharing the invoice. Please try downloading instead.");
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setIndex((prevIndex) => Math.min(prevIndex + 1, formSteps.length - 1));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInvoice(true);
  };

  const ImageUploadSection = () => (
    <div className="mt-4">
      <div className="flex items-center gap-4 mb-4">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <PlusCircle size={20} />
          Add Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <div key={idx} className="relative">
            <img
              src={image.preview}
              alt={`Upload ${idx + 1}`}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(idx)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const Invoice = () => (
    <div id="invoice-container" ref={invoiceRef} className="bg-white p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div className="border-b-2 pb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">SERVICE INVOICE</h1>
            <p className="text-gray-600 mt-1">Customer Copy</p>
          </div>
          <div className="text-center">
            <img src={vlogo} alt="Workshop Logo" className="h-16 mx-auto mb-2" />
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

      {/* Vehicle & Customer Details */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Customer Details</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {formData["Name:"]}</p>
            <p><span className="font-semibold">Contact:</span> {formData["Contact:"]}</p>
            <p><span className="font-semibold">Email:</span> {formData["E-mail:"]}</p>
            <p><span className="font-semibold">Registration:</span> {formData["Registration Number:"]}</p>
            <p><span className="font-semibold">KM Reading:</span> {formData["Vehicle Kilometers:"]}</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Service Details</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Services:</span> {formData["Services:"]}</p>
            <p><span className="font-semibold">Parts & Oil Charges:</span> ₹{formData["Parts & Oil Charges:"]}</p>
            <p><span className="font-semibold">Labour Charges:</span> ₹{formData["Labour Charges:"]}</p>
            <p><span className="font-semibold">Total Cost:</span> ₹{formData["Total Cost:"]}</p>
            <p><span className="font-semibold">Est. Delivery:</span> {formData["Estimated Delivery Time:"]}</p>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Demanded Job</h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded">
            {formData["Demanded Job by Customer:"] || "No job description provided"}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Recommended Jobs</h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded">
            {formData["Recommended Jobs (By RM/SA/QC):"] || "No recommendations provided"}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-700 mb-3">Estimates</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Parts& Oil</h4>
              <p className="text-gray-600">{formData["Estimated Parts & Oil:"]}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Labour</h4>
              <p className="text-gray-600">{formData["Estimated Labour:"]}</p>
            </div>
          </div>
        </div>

        {/* Service Images */}
        {images.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold text-gray-700 mb-3">Service Images</h3>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.preview}
                  alt={`Service Image ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons - These will be hidden during print */}
      <div className="mt-8 flex justify-between no-print">
        <button 
           id="prb" 
          className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
          onClick={handleShare}
        >
          <Share2 size={20} />
          Share
        </button>
        <button 
           id="prb" 
          className="bg-gray-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
          onClick={handleDownload}
        >
          <Download size={20} />
          Download
        </button>
        <button
        id="prb" 
          className="bg-gray-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      {!showInvoice ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Form steps rendering */}
            <div className="step-container">
              {formSteps.map((step, idx) => {
                if (idx === index) {
                  return (
                    <div key={step.id} className="step">
                      <label className="text-xl font-bold">{step.label}</label>
                      {step.type === "text" || step.type === "number" || step.type === "email" || step.type === "datetime-local" || step.type === "date" ? (
                        <input   
                          type={step.type}
                          placeholder={step.placeholder}
                          value={formData[step.label] || ""}
                          onChange={(e) => handleInputChange(e, step.label)}
                          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded"
                        />
                      ) : step.type === "multiService" ? (
                        <div className="mt-2">
                          {step.options.map((service) => (
                            <label key={service} className="block mt-2">
                              <input
                                type="checkbox"
                                checked={selectedServices.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                                className="mr-2"
                              />
                              {service}
                            </label> 
                          ))}
                        </div>
                      ) : step.type === "images" ? (
                        <ImageUploadSection />
                      ) : step.type === "textarea" ? (
                        <textarea 
                          placeholder={step.placeholder}
                          value={formData[step.label] || ""}
                          onChange={(e) => handleInputChange(e, step.label)}
                          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded"
                          rows={4}
                        />
                      ) : null}
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className="mt-6 flex justify-between">
              {index > 0 && (
                <button 
                  type="button"
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full flex items-center gap-2" 
                  onClick={handlePrev}
                >
                  <ArrowLeft size={20} />
                  Previous
                </button>
              )}
              {index < formSteps.length - 1 ? (
                <button 
                  type="button"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2" 
                  onClick={handleNext}
                >
                  Next
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
                >
                  Generate Invoice
                  <FileText size={20} />
                </button>
              )}
            </div>
          </div>
        </form>
      ) : (
        <Invoice />
      )}
    </div>
  );
}

export default Multiform;