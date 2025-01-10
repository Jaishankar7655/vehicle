import React, { useState } from "react";
import { Car, Send, Loader2, Wrench, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import vlogo from "../assets/image/logo.png";
const VehicleServiceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [open, isSetOpen] = useState(false);

  const handleClick = () => {
    isSetOpen(!open);
  };

  // Left column checkboxes
  const leftChecklist = [
    { label: "Jack & Handle Tools", id: "jack" },
    { label: "Wheel Arms / Blades", id: "wheel_arms" },
    { label: "Floor Mat", suffix: "Nos", id: "floor_mat" },
    { label: "Seat Covers Tom", id: "seat_covers" },
    { label: "Side Moulding", id: "side_moulding" },
    { label: "Central Remote", id: "remote" },
    { label: "Battery Make", id: "battery_make" },
    { label: "Battery No.", id: "battery_no" },
    { label: "Upholstery (Torn)", id: "upholstery" },
    { label: "Tyre Make & No.", id: "tyre" },
    { label: "FR.", id: "fr" },
    { label: "FL.", id: "fl" },
    { label: "RR.", id: "rr" },
    { label: "RL.", id: "rl" },
  ];

  // Right column checkboxes
  const rightChecklist = [
    { label: "First Aid Kit", id: "first_aid" },
    { label: "Mud Flaps", id: "mud_flaps" },
    { label: "Spare Wheel", id: "spare_wheel" },
    { label: "Fog Lamp", suffix: "Nos", id: "fog_lamp" },
    { label: "Wheel Cover / Cap", id: "wheel_cover" },
    { label: "Side Mirror", suffix: "Nos", id: "side_mirror" },
    { label: "Fuel Cap", id: "fuel_cap" },
    { label: "Horns (Low Tone / High Tone)", id: "horns" },
    { label: "Underbody (Scratches / Damage)", id: "underbody" },
    { label: "Audio System with Face Plate", id: "audio" },
    { label: "Speaker", suffix: "Nos", id: "speaker" },
    { label: "Key Chain", id: "key_chain" },
    { label: "Key Remote", id: "key_remote" },
    { label: "Doll / Idol", suffix: "Nos", id: "doll" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://formspree.io/f/myzzbewg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold mb-3 text-slate-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
           <div  ><img className="w-20 h-20 m-auto" src={vlogo} alt="" />Vehicle Solution</div>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl text-slate-600">
              Multi Brand Workshop & BodyShop
            </p>
            <p className="text-slate-500 mt-2">
              26/A, Near Surjeet Hundai, J.K. Road, Bhopal-8871122111
            </p>
            <p className="text-slate-500">
              Tel: 0755-4862244 Mob.: 8871122111, 9584422111
            </p>
          </motion.div>
        </div>

        {/* Form Number */}
        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
          <span className="font-bold text-slate-700">CUSTOMER COPY</span>
          <div>
            <span className="mr-2 text-slate-600">No.</span>
            <span className="text-blue-600 font-bold">3600</span>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 text-slate-700">
            <Wrench className="inline-block mr-2 mb-1" /> Customer Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="form-group">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  MAKE MODEL
                </label>
                <input
                  type="text"
                  name="model"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Registration No.
                </label>
                <input
                  type="text"
                  name="registration"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="form-group">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Contact No.
                </label>
                <input
                  type="tel"
                  name="contact"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Km.
                </label>
                <input
                  type="text"
                  name="kilometers"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Checklist Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Checklist */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">
              Vehicle Checklist
            </h3>
            <div className="space-y-3">
              {leftChecklist.map((item) => (
                <div key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.id}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <label htmlFor={item.id} className="ml-3 text-slate-600">
                    {item.label}
                  </label>
                  {item.suffix && (
                    <input
                      type="text"
                      name={`${item.id}_value`}
                      className="ml-auto w-16 px-2 py-1 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={item.suffix}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Checklist */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">
              Additional Items
            </h3>
            <div className="space-y-3">
              {rightChecklist.map((item) => (
                <div key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.id}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <label htmlFor={item.id} className="ml-3 text-slate-600">
                    {item.label}
                  </label>
                  {item.suffix && (
                    <input
                      type="text"
                      name={`${item.id}_value`}
                      className="ml-auto w-16 px-2 py-1 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={item.suffix}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">
                Demanded Jobs (By Customer)
              </h3>
              <textarea
                name="demanded_jobs"
                className="w-full h-32 px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter demanded jobs..."
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">
                Recommended Jobs (By RM/SA/QC)
              </h3>
              <textarea
                name="recommended_jobs"
                className="w-full h-32 px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter recommended jobs..."
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">
              ESTIMATE
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-slate-600 mb-2">Parts & Oil</h4>
                <textarea
                  name="parts_and_oil"
                  className="w-full h-32 px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter parts and oil details..."
                />
              </div>
              <div>
                <h4 className="font-medium text-slate-600 mb-2">Labour</h4>
                <textarea
                  name="labour"
                  className="w-full h-32 px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter labour details..."
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Executive Name
              </label>
              <input
                type="text"
                name="executive_name"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Sign (Customer)
              </label>
              <input
                type="text"
                name="customer_sign"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Total of Parts, Oil & Labour
              </label>
              <input
                type="text"
                name="total_parts_oil_labour"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Date
              </label>
              <input
                type="date"
                name="service_date"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-slate-50 p-6 rounded-lg text-sm text-slate-600">
      <p>
        Our terms and conditions:
        <span
          onClick={handleClick}
          className="cursor-pointer text-blue-500 ml-2"
        >
          {open ? 'Read Terms and Conditions' : 'Click to Read'}
        </span>
      </p>

      {open && (
        <div className="mt-4">
          <p>
            {/* Your terms and conditions content here */}
            <ul className="list-decimal ml-5 space-y-2">
              <li>
                The vehicle is driven & tested (including test drive outside
                the workshop) repaired, and stored at the sole risk,
                responsibility, and liability of the Customer. In case of
                damage due to an accident, repairs will be carried out under
                the insurance of the vehicle.
              </li>
              <li>
                The Customer indemnifies VEHICLE SOLUTION against any risk,
                liability/responsibility, loss, or damage to the vehicle
                and/or property of all persons arising out of
                repairing/servicing/test driving of the vehicle when the
                vehicle is in VEHICLE SOLUTION custody. The Customer
                confirms to have obtained insurance of the vehicle together
                with accessories and other components or articles. VEHICLE
                SOLUTION shall not be liable for any loss, damage, or injury
                whatsoever.
              </li>
              <li>
                The Customer will not hold VEHICLE SOLUTION responsible for
                any delay in delivery, carrying out repairs, or procurement
                of spare parts for reasons beyond VEHICLE SOLUTION's
                control.
              </li>
              <li>
                The Customer undertakes to take delivery of the vehicle
                within 48 hours of advice regarding the completion of the
                work. In the event of delay, the Customer agrees to VEHICLE
                SOLUTION charging storage charges at Rs. 250/- per day along
                with the charges of repair, spare parts, etc.
              </li>
              <li>
                The Customer has no objections to VEHICLE SOLUTION levying
                an estimation charge of Rs. 500/- or 10% of the total labour
                charges, whichever is higher, if the job is not entrusted to
                VEHICLE SOLUTION after obtaining the estimate. The Customer
                agrees to pay this estimation charge along with the storage
                charges mentioned above.
              </li>
              <li>
                The Customer undertakes to make payment of all charges
                before taking delivery of the vehicle. Terms of payment are
                cash/demand draft and through credit cards only. In the
                event the settlement of the bill is delayed beyond a period
                of 7 days, VEHICLE SOLUTION may levy interest @ 18% on the
                outstanding bill amount from the date on which the vehicle
                was ready for delivery until payment.
              </li>
              <li>
                VEHICLE SOLUTION may exercise a lien on the vehicle until
                all the mentioned dues are settled to VEHICLE SOLUTION's
                satisfaction.
              </li>
              <li>
                VEHICLE SOLUTION may effect delivery of the vehicle to the
                person whose signature appears on the repair order form.
              </li>
              <li>No vehicle will be delivered without this receipt.</li>
              <li>
                The Customer undertakes to pay for all repair work prior to
                taking delivery of the vehicle; subsequent reimbursements
                from the insurance company may be made directly to the
                Customer.
              </li>
              <li>
                Salvage of accident vehicles must be lifted by the Customer
                along with the delivery of the vehicle. Salvage not claimed
                at the time of delivery will be disposed of by VEHICLE
                SOLUTION as scrap.
              </li>
              <li>
                It may not be possible to notice and record all dents,
                scratches, and damages on the vehicle at the time of
                accepting it. If some are noticed during repairs/servicing,
                the remarks of the workshop in-charge will be final and
                legally binding on the Customer.
              </li>
              <li>
                All disputes and differences arising from this repair order
                shall be settled by mutual discussion. In case a mutually
                acceptable settlement is not arrived at, any such dispute
                shall be subject to the exclusive jurisdiction of the Court
                in Bhopal only.
              </li>
              <li>
                The accident/damage repair estimate making charges in case
                of a total loss is Rs. 5000/-.
              </li>
              <li>Delivery to the Customer will not be given on credit.</li>
              <li>
                The services & offer are subject to the force majeure
                clause.
              </li>
              <li>
                Demand Draft and Pay-Order should be made payable to VEHICLE
                SOLUTION at Bhopal.
              </li>
            </ul>
          </p>

          <div className="my-8">
            <input type="checkbox" />
            <label htmlFor="agree" className="ml-2">
              I agree and continue
            </label>
          </div>
        </div>
      )}
    </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                Processing...
              </>
            ) : (
              <>
                <Send className="-ml-1 mr-2 h-5 w-5" />
                Submit Service Form
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-600 flex items-center justify-center space-x-2"
          >
            <CheckCircle className="h-5 w-5" />
            <span>Form submitted successfully!</span>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-red-600"
          >
            An error occurred. Please try again.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default VehicleServiceForm;
