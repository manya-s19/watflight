
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SponsorCard from '@/components/SponsorCard.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { Button } from '@/components/ui/button';

const SponsorsPage = () => {
  const sponsors = {
    gold: [
      {
        name: 'Meridian Aerospace',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Gold',
        description: 'Leading aerospace manufacturer supporting advanced propulsion research'
      },
      {
        name: 'Quantum Dynamics',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Gold',
        description: 'Innovation partner for autonomous flight systems development'
      }
    ],
    silver: [
      {
        name: 'Apex Materials',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Silver',
        description: 'Composite materials supplier for structural components'
      },
      {
        name: 'Velocity Tech',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Silver',
        description: 'Electronics and avionics systems partner'
      },
      {
        name: 'Horizon Engineering',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Silver',
        description: 'CAD software and simulation tools provider'
      }
    ],
    bronze: [
      {
        name: 'Precision Machining Co',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Bronze',
        description: 'Manufacturing support and CNC services'
      },
      {
        name: 'Skyward Solutions',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Bronze',
        description: 'Testing facilities and equipment access'
      },
      {
        name: 'Atlas Components',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400',
        tier: 'Bronze',
        description: 'Hardware and component supplier'
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sponsors - WATFlight</title>
        <meta name="description" content="Meet the companies and organizations supporting WATFlight's aerospace innovation through partnerships and sponsorships." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance" style={{letterSpacing: '-0.02em'}}>
              Our Sponsors
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Partnering with industry leaders to advance aerospace technology and student innovation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Gold Tier Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsors.gold.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  tier={sponsor.tier}
                  description={sponsor.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Silver Tier Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsors.silver.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  tier={sponsor.tier}
                  description={sponsor.description}
                  delay={0.5 + index * 0.1}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8} className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Bronze Tier Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsors.bronze.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  tier={sponsor.tier}
                  description={sponsor.description}
                  delay={0.9 + index * 0.1}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.2} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Become a Sponsor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Support the next generation of aerospace engineers. Partner with WATFlight to gain visibility, access to talent, and opportunities to shape innovative projects.
            </p>
            <Button asChild size="lg">
              <Link to="/get-involved">Learn About Partnership</Link>
            </Button>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SponsorsPage;
