import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are committed to providing the best services for our customers. Contact us for more information.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Products</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" className="text-white mr-3"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="text-center py-3">
          <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
