
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const teamLeads = [
    {
      name: 'Jackie',
      role: 'Team Lead',
      bio: 'Guiding the vision WATFlight, ensuring collaboration and engineering excellence.',
      image: '',
      color: 'primary'
    },
    {
      name: 'Manya',
      role: 'Software Lead',
      bio: 'Leading the development of simulation software and integration across projects.',
      image: '',
      color: 'secondary'
    },
    {
      name: 'Shaofu',
      role: 'Technical Lead',
      bio: 'Overseeing mechanical design, propulsion systems, and structural integrity.',
      image: '',
      color: 'accent'
    },
    {
      name: 'Hiram',
      role: 'Design Lead',
      bio: 'Managing aerodynamics, CAD modeling, and overall vehicle architecture.',
      image: '',
      color: 'muted'
    }
  ];

  const teamMembers = [
    {
      name: 'Person 1',
      role: 'Aerodynamics',
      bio: 'Fourth-year Mechanical Engineering student specializing in computational fluid dynamics and UAV design optimization.',
      image: ''
    },
    {
      name: 'Person 2',
      role: 'Propulsion Systems',
      bio: 'Mechatronics Engineering student focused on electric propulsion systems and battery optimization for extended flight duration.',
      image: ''
    },
    {
      name: 'Person 3',
      role: 'Avionics & Controls',
      bio: 'Electrical Engineering student developing autonomous flight control systems and sensor integration frameworks.',
      image: ''
    },
    {
      name: 'Person 4',
      role: 'Structural Design',
      bio: 'Civil Engineering student specializing in lightweight composite structures and stress analysis for aerospace applications.',
      image: ''
    },
    {
      name: 'Person 5',
      role: 'Software & Simulation',
      bio: 'Computer Engineering student building flight simulation tools and data analysis pipelines for performance optimization.',
      image: ''
    },
    {
      name: 'Person 6',
      role: 'Manufacturing',
      bio: 'Mechanical Engineering student managing fabrication processes, CNC machining, and quality control for prototype development.',
      image: ''
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - WATFlight</title>
        <meta name="description" content="Meet the talented engineering students behind WATFlight's aerospace innovations, from aerodynamics to propulsion systems." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance" style={{letterSpacing: '-0.02em'}}>
              Meet the Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate engineers and innovators working together to push the boundaries of aerospace technology.
            </p>
          </AnimatedSection>

          {/* Team Leads Section */}
          <AnimatedSection delay={0.2} className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center uppercase tracking-wider">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamLeads.map((lead, index) => {
                const initials = lead.name.split(' ').map(n => n[0]).join('').toUpperCase();
                const colorMap = {
                  primary: 'bg-primary text-primary-foreground ring-primary/30',
                  secondary: 'bg-secondary text-secondary-foreground ring-secondary/30',
                  accent: 'bg-accent text-accent-foreground ring-accent/30',
                  muted: 'bg-muted text-muted-foreground ring-muted/30'
                };
                
                return (
                  <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-card">
                    <div className={`h-2 w-full ${colorMap[lead.color].split(' ')[0]}`} />
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <Avatar className={`w-24 h-24 mb-4 ring-4 ${colorMap[lead.color].split(' ')[2]} transition-all duration-300 group-hover:scale-105`}>
                        <AvatarImage src={lead.image} alt={lead.name} />
                        <AvatarFallback className={`text-xl font-bold ${colorMap[lead.color].split(' ').slice(0,2).join(' ')}`}>
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold text-foreground mb-1">{lead.name}</h3>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${colorMap[lead.color].split(' ').slice(0,2).join(' ')}`}>
                        {lead.role}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {lead.bio}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>

          {/* General Team Section */}
          <AnimatedSection delay={0.4} className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center uppercase tracking-wider">Engineering Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Want to join our team?
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
              We're always looking for motivated students passionate about aerospace engineering. No prior experience required — just bring your curiosity and dedication.{' '}
              <Link
                to="/get-involved"
                className="text-primary-foreground font-semibold border-b-2 border-primary-foreground/40 hover:border-primary-foreground transition-all duration-300"
              >
                Learn how to get involved
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;
