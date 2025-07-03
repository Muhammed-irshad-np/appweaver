
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Mission-Driven",
      description: "We're committed to creating mobile applications that solve real problems and deliver exceptional user experiences."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with clients to understand their vision and exceed expectations."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Innovation First",
      description: "We leverage the latest technologies and best practices to build cutting-edge mobile applications."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Assured",
      description: "Every app we develop undergoes rigorous testing to ensure reliability, security, and optimal performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About DevStudio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a professional mobile app development studio dedicated to creating innovative, 
              high-quality applications for Android and iOS platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a passion for mobile technology, DevStudio has been at the forefront of 
                mobile app development, creating solutions that transform businesses and enhance user experiences.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We specialize in end-to-end app development services, from initial concept and design 
                to development, testing, and app store publication. Our team combines technical expertise 
                with creative vision to deliver apps that stand out in today's competitive market.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a registered development organization, we maintain the highest standards of 
                professionalism and quality, ensuring our clients receive world-class mobile applications 
                that meet their business objectives.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80`}
                  alt="Development team working"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
