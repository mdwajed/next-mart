import React from "react";

const ContactsPage = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-2">
        📍 <strong>Address:</strong> Level 5, Block C, Bashundhara City Shopping
        Mall, Panthapath, Dhaka 1215, Bangladesh
      </p>
      <p className="mb-2">
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:your-email@example.com" className="text-blue-500">
          wajed@gmail.com
        </a>
      </p>
      <p className="mb-2">
        📞 <strong>Phone:</strong> 0967854344546
      </p>
      <p className="mb-2">
        🕒 <strong>Store Hours:</strong> Plot 23, Road 5, Industrial Area,
        Tejgaon, Dhaka 1208, Bangladesh
      </p>
    </section>
  );
};

export default ContactsPage;
