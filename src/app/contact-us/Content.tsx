'use client';

import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-40 relative">
      {/* Success banner */}
      {success && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded shadow transition-opacity duration-300">
          <span className="font-semibold">Success!</span> Your message has been sent.
        </div>
      )}
      <h1 className="text-4xl font-bold text-center mt-4 mb-4 pb-20">Contact us</h1>
      <hr className="w-full border-gray-100 mb-8" />

      <div className="text-xl text-gray-600 pt-10">
        You didn't find your answer in the Help Center? We are here to help!
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-full p-8 flex flex-col gap-5 items-center"
      >
        <div className="w-1/2">
          <label className="block text-left text-gray-600 mb-1 font-medium" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="me@company.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9856F2]"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-1/2">
          <label className="block text-left text-gray-600 mb-1 font-medium" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9856F2]"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-1/2">
          <label className="block text-left text-gray-600 mb-1 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="How can we help?"
            rows={6}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9856F2] resize-none"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-1/2 bg-[#9856F2] hover:bg-[#6c3cbe] text-white font-semibold py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
