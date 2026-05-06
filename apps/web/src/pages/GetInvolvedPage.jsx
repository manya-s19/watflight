import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, Award, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GetInvolvedSocialButton from '@/components/GetInvolvedSocialButton.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const GetInvolvedPage = () => {
  const socialLinks = [{
    platform: 'instagram',
    href: 'https://instagram.com/watflight',
    label: 'Instagram'
  }, {
    platform: 'linkedin',
    href: 'https://linkedin.com/company/watflight',
    label: 'LinkedIn'
  }, {
    platform: 'github',
    href: 'https://github.com/watflight',
    label: 'GitHub'
  }, {
    platform: 'discord',
    href: 'https://discord.gg/watflight',
    label: 'Discord'
  }, {
    platform: 'jira',
    href: 'https://watflight.atlassian.net',
    label: 'Jira'
  }];
  return <>
      <Helmet>
        <title>Get Involved - WATFlight</title>
        <meta name="description" content="Join WATFlight as a team member, support us as a sponsor, or follow our aerospace innovation journey on social media." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance" style={{
            letterSpacing: '-0.02em'
          }}>
              Get Involved
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join our mission to advance aerospace innovation. Whether you want to build, support, or follow along, there's a place for you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <AnimatedSection delay={0.2}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Join as Member</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Become part of our engineering team. Work on real aerospace projects, develop technical skills, and collaborate with passionate students.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Hands-on experience with UAV design and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Access to workshops, tools, and mentorship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Opportunities to lead projects and subteams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No prior aerospace experience required</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button className="w-full" size="lg">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Support as Sponsor</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Partner with WATFlight to support student innovation. Gain visibility, access to talent, and opportunities to shape aerospace projects.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Brand visibility at events, competitions, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Direct access to talented engineering students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Influence on project direction and technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Flexible partnership tiers and benefits</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button className="w-full" size="lg" variant="secondary">
                      Become a Sponsor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Follow Our Journey</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Stay connected with WATFlight. Follow our progress, see behind-the-scenes content, and engage with our aerospace community.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Project updates and technical insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Event announcements and competition results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Team member spotlights and achievements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground mt-1">•</span>
                      <span>Educational content about aerospace engineering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.6} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto text-center">
              Follow WATFlight on social media to stay updated on our latest projects, events, and aerospace innovations.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => <AnimatedSection key={index} delay={0.7 + index * 0.05}>
                  <GetInvolvedSocialButton platform={social.platform} href={social.href} label={social.label} />
                </AnimatedSection>)}
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>;
};
export default GetInvolvedPage;