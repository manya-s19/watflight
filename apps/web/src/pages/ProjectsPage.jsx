
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Filter } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Autonomous Navigation System',
      description: 'Advanced computer vision and GPS-based navigation system enabling fully autonomous flight paths with obstacle detection. A key technology for our 2027 Airbus challenge submission.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800',
      tags: ['UAV', 'Software', 'Computer Vision'],
      category: 'uav'
    },
    {
      title: 'Hybrid Propulsion Module',
      description: 'Electric-hybrid propulsion system combining battery power with regenerative energy capture, extending flight duration by 42% over conventional systems.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      tags: ['Propulsion', 'Energy Systems', 'Innovation'],
      category: 'propulsion'
    },
    {
      title: 'Carbon Fiber Wing Assembly',
      description: 'Lightweight composite wing structure using advanced layup techniques, achieving 28% weight reduction while maintaining structural integrity under load.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      tags: ['Structural', 'Composites', 'Manufacturing'],
      category: 'structural'
    },
    {
      title: 'Flight Data Analytics Platform',
      description: 'Real-time telemetry analysis system processing sensor data to optimize flight performance, predict maintenance needs, and improve safety protocols.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Software', 'Data Analysis', 'UAV'],
      category: 'uav'
    },
    {
      title: 'Vertical Takeoff Prototype',
      description: 'VTOL-capable UAV design featuring quad-rotor configuration with transition to fixed-wing flight, optimized for urban deployment scenarios.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800',
      tags: ['UAV', 'Aerodynamics', 'Innovation'],
      category: 'uav'
    },
    {
      title: 'Thermal Management System',
      description: 'Active cooling solution for high-performance electric motors, using phase-change materials to maintain optimal operating temperatures during extended flights.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      tags: ['Propulsion', 'Thermal', 'Engineering'],
      category: 'propulsion'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'uav', label: 'UAV Systems' },
    { id: 'propulsion', label: 'Propulsion' },
    { id: 'structural', label: 'Structural' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Projects - WATFlight</title>
        <meta name="description" content="Explore WATFlight's portfolio of aerospace engineering projects, from autonomous UAV systems to advanced propulsion technologies." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance" style={{letterSpacing: '-0.02em'}}>
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Innovative aerospace solutions developed through rigorous engineering. Many of our current initiatives are being actively developed for our submission to the 2027 Airbus Fly Your Ideas Challenge.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'secondary'}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
