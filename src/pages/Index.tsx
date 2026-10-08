import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Lab from '@/components/Lab';
import Recognition from '@/components/Recognition';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TabBar from '@/components/TabBar';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <Lab />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <TabBar />
    </div>
  );
};

export default Index;
