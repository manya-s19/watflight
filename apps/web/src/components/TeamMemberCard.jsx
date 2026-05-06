
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const TeamMemberCard = ({ name, role, bio, image, delay = 0 }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border-border hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="w-16 h-16 rounded-xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback className="rounded-xl bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-sm font-medium text-primary/80">{role}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
