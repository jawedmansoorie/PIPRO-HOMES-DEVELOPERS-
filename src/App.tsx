/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Services from './components/Services';
import HousePlans from './components/HousePlans';
import ProjectsGallery from './components/ProjectsGallery';
import Reviews from './components/Reviews';
import FeatureStrip from './components/FeatureStrip';
import VastuTips from './components/VastuTips';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <Founder />
        <Services />
        <HousePlans />
        <ProjectsGallery />
        <VastuTips />
        <Reviews />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
