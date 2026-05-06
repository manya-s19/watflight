import React from 'react';
import { Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GetInvolvedSocialButton = ({ platform, href, label }) => {
  const platformConfig = {
    instagram: {
      icon: Instagram,
      hoverClass: 'group-hover:text-pink-500',
      borderHover: 'hover:border-pink-500/30'
    },
    jira: {
      icon: ExternalLink,
      hoverClass: 'group-hover:text-blue-500',
      borderHover: 'hover:border-blue-500/30'
    },
    discord: {
      icon: ExternalLink,
      hoverClass: 'group-hover:text-indigo-500',
      borderHover: 'hover:border-indigo-500/30'
    },
    linkedin: {
      icon: Linkedin,
      hoverClass: 'group-hover:text-blue-400',
      borderHover: 'hover:border-blue-400/30'
    },
    github: {
      icon: Github,
      hoverClass: 'group-hover:text-foreground',
      borderHover: 'hover:border-foreground/30'
    }
  };

  const config = platformConfig[platform.toLowerCase()] || platformConfig.github;
  const Icon = config.icon;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 group px-6 py-3 rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 ${config.borderHover}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`w-5 h-5 text-muted-foreground transition-colors duration-300 ${config.hoverClass}`} />
      <span className={`text-sm font-medium text-foreground transition-colors duration-300 ${config.hoverClass}`}>
        {label}
      </span>
    </motion.a>
  );
};

export default GetInvolvedSocialButton;