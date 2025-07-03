
import React from 'react';
import { Smartphone, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AppWeavers</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Professional mobile app development studio specializing in creating innovative, 
                high-quality applications for Android and iOS platforms.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>appweaverlabs@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+91 7034714132</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Shantipuram 90, NGO Quarters, Kakkanad, Ernakulam, Kerala 682021</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Mobile App Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">iOS Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Android Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">App Store Publishing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">App Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 AppWeavers. All rights reserved. Professional Mobile App Development Services.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <span>Registered Business Entity</span>
                <span>•</span>
                <span>Google Play Console Developer</span>
                <span>•</span>
                <span>Apple Developer Program Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
