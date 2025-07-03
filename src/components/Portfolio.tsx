
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "FitTracker Pro",
      category: "Health & Fitness",
      description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Health", "Analytics"],
      rating: "4.8",
      downloads: "10K+"
    },
    {
      title: "BusinessFlow",
      category: "Productivity",
      description: "Task management and team collaboration app designed for small to medium businesses.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      tags: ["Flutter", "Productivity", "Collaboration"],
      rating: "4.9", 
      downloads: "25K+"
    },
    {
      title: "EcoMarket",
      category: "E-commerce",
      description: "Sustainable shopping platform connecting users with eco-friendly products and local vendors.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      tags: ["Native iOS", "E-commerce", "Sustainability"],
      rating: "4.7",
      downloads: "15K+"
    },
    {
      title: "LearnSpace",
      category: "Education",
      description: "Interactive learning platform with personalized courses and progress tracking for students.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      tags: ["Android Native", "Education", "AI"],
      rating: "4.9",
      downloads: "50K+"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our recent projects and successful app launches across various industries 
              and platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{project.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{project.downloads}</span>
                    </div>
                  </div>
                  
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
            <p className="text-gray-600 text-lg">
              Ready to see your app idea come to life? 
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-blue-600 hover:text-blue-700 font-semibold ml-2 underline"
              >
                Let's discuss your project
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
