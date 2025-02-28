import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to <strong>Next Mart</strong>
          </h2>
          <p className="mb-4">
            At <strong>Next Mart</strong>, we believe that creativity and
            productivity begin with the right tools. Whether you are a student,
            an artist, or a professional, our goal is to provide you with
            high-quality stationery products that inspire and support your work.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2020, <strong>Next Mart</strong> started as a small
            family-run business with a passion for stationery. Over the years,
            we have grown into a trusted supplier of premium stationery,
            offering a wide range of products, from classNameic notebooks and
            pens to modern office essentials and art supplies.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            Our mission is simple:{" "}
            <strong>
              to bring quality, affordability, and innovation to every desk,
              classNameroom, and creative space
            </strong>
            . We carefully curate our products to ensure they meet the needs of
            students, professionals, and creative minds.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>High-Quality Products</strong> – We source only the best
              stationery and office supplies.
            </li>
            <li>
              <strong>Affordable Prices</strong> – We believe that great
              stationery should be accessible to everyone.
            </li>
            <li>
              <strong>Eco-Friendly Options</strong> – We offer sustainable and
              recycled products.
            </li>
            <li>
              <strong>Exceptional Customer Service</strong> – Your satisfaction
              is our priority.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-2">
            📍 <strong>Address:</strong> Level 5, Block C, Bashundhara City
            Shopping Mall, Panthapath, Dhaka 1215, Bangladesh
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

        <div className="text-center mt-6">
          <p className="text-lg font-semibold">Follow us on social media:</p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a href="https://facebook.com">
              <FaFacebook
                size={24}
                className="text-blue-600 hover:text-blue-800"
              />
            </a>
            <a href="https://twitter.com/intent/tweet">
              <FaTwitter
                size={24}
                className="text-blue-400 hover:text-blue-600"
              />
            </a>
            <a href="https://api.whatsapp.com">
              <FaWhatsapp
                size={24}
                className="text-green-600 hover:text-green-800"
              />
            </a>
            <a href="https://instagram.com">
              <FaInstagram
                size={24}
                className="text-pink-600 hover:text-pink-800"
              />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin
                size={24}
                className="text-blue-700 hover:text-blue-900"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
