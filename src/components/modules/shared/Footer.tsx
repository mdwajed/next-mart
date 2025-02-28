import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" type="small" className="flex gap-1 items-center ">
            <Image
              src="/logo.avif"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full object-cover "
            />
            <p className="text-2xl font-bold">Next Mart</p>
          </Link>
          <p className="text-gray-400 mt-2">
            Your one-stop shop for the best products. Quality guaranteed!
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/products" className="text-gray-400 hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-xl font-semibold">Stay Updated</h3>
          <p className="text-gray-400 mt-2">
            Subscribe to our newsletter for exclusive deals.
          </p>
          <div className="flex items-center mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} className="hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} className="hover:text-pink-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="hover:text-blue-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
