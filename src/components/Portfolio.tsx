
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const upcomingProjects = [
    {
      title: "UpNow Smart Alarm",
      category: "Productivity",
      description: "Intelligent alarm clock app with smart wake-up features and customizable morning routines.",
      tags: ["Android", "iOS", "Smart Features"],
      status: "In Development"
    },
    {
      title: "Kegal Exercise App",
      category: "Health & Fitness",
      description: "Comprehensive pelvic floor exercise trainer with guided workouts and progress tracking.",
      tags: ["Health", "Fitness", "Wellness"],
      status: "In Development"
    },
    {
      title: "Porn Quitter",
      category: "Health & Wellness",
      description: "Support app for breaking unwanted habits with tracking, motivation, and community features.",
      tags: ["Wellness", "Self-Help", "Community"],
      status: "In Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're currently building our own innovative mobile applications. 
              Stay tuned for these exciting launches coming soon to Android and iOS platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 h-48 flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {project.status}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <Badge variant="secondary" className="text-xs mb-3">
                    {project.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
              <p className="text-gray-600 text-lg mb-6">
                We're working hard to bring these innovative apps to life. Each application is being crafted 
                with attention to detail and user experience in mind.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-blue-600 hover:text-blue-700 font-semibold underline text-lg"
              >
                Get notified when they launch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
