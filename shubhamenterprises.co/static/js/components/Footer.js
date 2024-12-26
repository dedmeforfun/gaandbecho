const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-6">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-3">About Us</h3>
              <p className="text-sm">
                Shubham Enterprises is committed to delivering high-quality products and exceptional service. Your trusted partner in innovation and excellence.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-indigo-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/view-all-products" className="hover:text-indigo-400 transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-indigo-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/admin" className="hover:text-indigo-400 transition-colors">
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-sm">Phone: <a href="tel:9031446324" className="hover:text-indigo-400">+91 9031446324</a></p>
              <p className="text-sm">Email: <a href="mailto:info@shubhamenterprises.co" className="hover:text-indigo-400">info@shubhamenterprises.co</a></p>
              <p className="text-sm">Address: Panchsheel Enclave,Jamshedpur,Jharkhand</p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Shubham Enterprises. All rights reserved.</p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  