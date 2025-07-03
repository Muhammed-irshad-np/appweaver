
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Monitor, Cog, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for Android and iOS with stunning user interfaces and robust functionality.",
      features: ["Native Android Development", "iOS App Development", "Cross-platform Solutions", "UI/UX Design"]
    },
    {
      icon: <Monitor className="w-12 h-12 text-purple-600" />,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed to meet your specific business requirements and objectives.",
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Solutions"]
    },
    {
      icon: <Cog className="w-12 h-12 text-green-600" />,
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
      features: ["Bug Fixes & Updates", "Performance Optimization", "Security Updates", "24/7 Support"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-orange-600" />,
      title: "App Store Publishing",
      description: "Complete app store submission and optimization services for Google Play Store and Apple App Store.",
      features: ["Store Submission", "App Store Optimization", "Metadata Creation", "Review Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive mobile app development services to bring your ideas to life 
              and help your business succeed in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
