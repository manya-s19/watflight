
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SponsorCard = ({ name, logo, tier, description, delay = 0 }) => {
  const tierColors = {
    gold: 'from-yellow-400 to-yellow-600',
    silver: 'from-gray-300 to-gray-500',
    bronze: 'from-orange-400 to-orange-600'
  };

  const tierBadgeColors = {
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
    silver: 'bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900',
    bronze: 'bg-gradient-to-r from-orange-400 to-orange-600 text-white'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border-border hover:shadow-xl transition-all duration-300 group relative">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tierColors[tier.toLowerCase()]}`} />
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <Badge className={`${tierBadgeColors[tier.toLowerCase()]} font-semibold px-3 py-1`}>
            {tier}
          </Badge>
          <div className="w-full h-24 flex items-center justify-center bg-muted rounded-lg p-4">
            <img 
              src={logo} 
              alt={name}
              className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SponsorCard;
