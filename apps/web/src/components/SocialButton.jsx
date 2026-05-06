import React from 'react';
import { Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialButton = ({ platform, href, label }) => {
  const platformConfig = {
    instagram: {
      icon: Instagram,
      hoverClass: 'group-hover:text-pink-500'
    },
    jira: {
      icon: ExternalLink,
      hoverClass: 'group-hover:text-blue-500'
    },
    discord: {
      icon: ExternalLink,
      hoverClass: 'group-hover:text-indigo-500'
    },
    linkedin: {
      icon: Linkedin,
      hoverClass: 'group-hover:text-blue-400'
    },
    github: {
      icon: Github,
      hoverClass: 'group-hover:text-accent'
    }
  };

  const config = platformConfig[platform.toLowerCase()] || platformConfig.github;
  const Icon = config.icon;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group transition-all duration-300"
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`w-5 h-5 text-background/80 transition-colors duration-300 ${config.hoverClass}`} />
      <span className={`text-sm text-background/80 transition-colors duration-300 ${config.hoverClass}`}>
        {label}
      </span>
    </motion.a>
  );
};

export default SocialButton;