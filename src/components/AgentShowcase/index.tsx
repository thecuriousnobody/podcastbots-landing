import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { monoPalette } from '../../theme';

interface AgentInfo {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
}

const agents: AgentInfo[] = [
  {
    id: 'topic-analyzer',
    title: 'Topic Analyzer',
    description: 'Deeply understands your podcast\'s unique perspective and mission to find the perfect match.',
    capabilities: [
      'Analyzes podcast themes and goals',
      'Identifies key discussion areas',
      'Maps topic relationships',
      'Suggests unexplored angles'
    ]
  },
  {
    id: 'guest-finder',
    title: 'Guest Finder',
    description: 'Discovers experts and thought leaders who align with your podcast\'s vision.',
    capabilities: [
      'Finds experts in specific niches',
      'Evaluates guest relevance',
      'Discovers hidden connections',
      'Assesses expertise depth'
    ]
  },
  {
    id: 'contact-researcher',
    title: 'Contact Researcher',
    description: 'Builds personalized outreach strategies that respect and reflect your podcast\'s voice.',
    capabilities: [
      'Crafts personalized outreach',
      'Finds contact information',
      'Suggests conversation starters',
      'Prepares engagement points'
    ]
  }
];

const AgentShowcase: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: monoPalette.hover
      }}
    >
      {/* Bauhaus-inspired decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          backgroundColor: monoPalette.paper,
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          opacity: 0.5,
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          width: '200px',
          height: '200px',
          border: `2px solid ${monoPalette.border}`,
          transform: 'rotate(45deg)',
          opacity: 0.3,
          zIndex: 0
        }}
      />

      {/* Content */}
      <Box
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: monoPalette.text.primary,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700
          }}
        >
          Meet Your AI Team
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {agents.map((agent, index) => (
            <Accordion
              key={agent.id}
              expanded={expanded === agent.id}
              onChange={handleChange(agent.id)}
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                transform: { xs: 'none', md: `translateX(${index % 2 ? '5%' : '-5%'})` }
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronDown />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: 0
                  }
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    width: '100%',
                    backgroundColor: monoPalette.paper,
                    borderRadius: '16px',
                    border: `1px solid ${monoPalette.border}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 30px ${monoPalette.shadow}`
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: monoPalette.text.primary
                    }}
                  >
                    {agent.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: monoPalette.text.body,
                      mt: 1
                    }}
                  >
                    {agent.description}
                  </Typography>
                </Paper>
              </AccordionSummary>

              <AccordionDetails>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    backgroundColor: monoPalette.hover,
                    borderRadius: '16px',
                    border: `1px solid ${monoPalette.border}`,
                    ml: { xs: 0, md: 4 }
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: monoPalette.text.primary,
                      mb: 2,
                      fontWeight: 600
                    }}
                  >
                    Capabilities
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 2
                    }}
                  >
                    {agent.capabilities.map((capability, idx) => (
                      <Paper
                        key={idx}
                        elevation={0}
                        sx={{
                          p: 2,
                          backgroundColor: monoPalette.paper,
                          borderRadius: '12px',
                          border: `1px solid ${monoPalette.border}`
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: monoPalette.text.body
                          }}
                        >
                          {capability}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AgentShowcase;
