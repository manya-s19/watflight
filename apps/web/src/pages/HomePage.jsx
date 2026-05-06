
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, Users, Rocket, Target, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import GliderSwarm from '@/components/GliderSwarm.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  const stats = [
    { icon: Users, value: '47', label: 'Active Members' },
    { icon: Rocket, value: '12', label: 'Projects Completed' },
    { icon: Target, value: '83%', label: 'Competition Success Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>WATFlight - Advancing Aerospace Innovation</title>
        <meta name="description" content="Student-led aerospace engineering team at the University of Waterloo, building the future of flight through innovative UAV and propulsion projects." />
      </Helmet>

      <Header />

      <main>
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <GliderSwarm />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium mb-8 shadow-lg"
            >
              <Plane className="w-4 h-4 text-accent" />
              <span>Preparing for the 2027 Airbus Fly Your Ideas Challenge</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg" style={{letterSpacing: '-0.02em'}}>
                Building the Future of Flight
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
            >
              Student-led aviation engineering innovation at the University of Waterloo, advancing flight technology and propulsion systems through hands-on engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="text-base bg-accent text-accent-foreground hover:bg-accent/90 border-none">
                <Link to="/get-involved">Join Our Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm">
                <Link to="/projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <ChevronDown className="w-8 h-8 text-primary animate-float drop-shadow-md" />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Engineering excellence through collaboration
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                WATFlight brings together passionate students to design, build, and test cutting-edge aerospace systems.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/10 bg-card">
                      <CardContent className="p-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-4">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>

            <AnimatedSection delay={0.3} className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
                  We are dedicated to advancing aerospace technology through innovative design, rigorous testing, and collaborative problem-solving. Our team tackles real-world engineering challenges, from autonomous flight systems to advanced propulsion mechanisms.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
