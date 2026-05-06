import React from 'react';
import { Link } from 'react-router-dom';
import SocialButton from './SocialButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/get-involved', label: 'Get Involved' }
  ];

  const socialLinks = [
    { platform: 'instagram', href: 'https://instagram.com/watflight', label: 'Instagram' },
    { platform: 'linkedin', href: 'https://linkedin.com/company/watflight', label: 'LinkedIn' },
    { platform: 'github', href: 'https://github.com/watflight', label: 'GitHub' },
    { platform: 'discord', href: 'https://discord.gg/watflight', label: 'Discord' },
    { platform: 'jira', href: 'https://watflight.atlassian.net', label: 'Jira' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://horizons-cdn.hostinger.com/04926cd8-9f1d-456a-9abb-01fdb16107d0/639bf295d038c63d902ebef24b92bfe1.png" 
                alt="WATFlight Logo" 
                className="h-16 md:h-20 w-auto object-contain invert"
              />
            </div>
            <p className="text-sm text-background/80 leading-relaxed max-w-xs">
              Advancing aerospace innovation through student-led research and development at the University of Waterloo.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-6 block text-accent">Quick Links</span>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-background/80 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider mb-6 block text-accent">Connect With Us</span>
            <div className="flex flex-col gap-3">
              {socialLinks.slice(0, 4).map((social) => (
                <SocialButton
                  key={social.platform}
                  platform={social.platform}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} WATFlight. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-background/70 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-background/70 hover:text-accent transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;