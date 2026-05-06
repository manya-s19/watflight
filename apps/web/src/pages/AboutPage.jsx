
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const timeline = [
    { year: '2019', event: 'WATFlight founded by aerospace engineering students' },
    { year: '2020', event: 'First successful autonomous flight demonstration' },
    { year: '2021', event: 'Expanded to 30+ members across multiple disciplines' },
    { year: '2022', event: 'Won regional UAV competition with hybrid propulsion system' },
    { year: '2023', event: 'Launched advanced composites research program' },
    { year: '2024', event: 'Achieved 47 active members and 12 completed projects' },
    { year: '2027', event: 'Targeting the Airbus Fly Your Ideas Challenge with next-gen UAV concepts' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries through creative problem-solving and cutting-edge technology.'
    },
    {
      title: 'Collaboration',
      description: 'Building solutions together across disciplines and skill levels.'
    },
    {
      title: 'Excellence',
      description: 'Maintaining rigorous standards in design, testing, and execution.'
    },
    {
      title: 'Learning',
      description: 'Fostering continuous growth through hands-on engineering experience.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - WATFlight</title>
        <meta name="description" content="Learn about WATFlight's mission, history, and core values as we advance aerospace innovation at the University of Waterloo." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance" style={{letterSpacing: '-0.02em'}}>
              About WATFlight
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A student-led aerospace engineering team dedicated to advancing flight technology through innovation and collaboration.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mb-20">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
                WATFlight exists to provide University of Waterloo students with hands-on aerospace engineering experience. We design, build, and test unmanned aerial vehicles and propulsion systems, tackling real-world challenges while fostering a culture of innovation, technical excellence, and collaborative learning.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mb-20">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Key Initiative
                </span>
                <h2 className="text-3xl font-semibold mb-4">
                  2027 Airbus Fly Your Ideas Challenge
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  We are actively preparing for the prestigious 2027 Airbus Fly Your Ideas Challenge. This global competition pushes us to develop radical, eco-efficient aerospace innovations. Our current research and development cycles are heavily focused on creating a winning submission that redefines sustainable aviation and showcases the engineering talent at the University of Waterloo.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mb-20">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <AnimatedSection 
                    key={index} 
                    delay={0.5 + index * 0.1}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="inline-block hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                          <p className="text-foreground">{item.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                    <div className="flex-1" />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8} className="mb-20">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={0.9 + index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.2} className="bg-muted rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Team Culture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At WATFlight, we believe in learning by doing. Our team welcomes students from all engineering disciplines and experience levels. Whether you're a first-year student curious about aerospace or a senior engineer ready to lead complex projects, you'll find a supportive environment where your contributions matter and your skills grow.
            </p>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
