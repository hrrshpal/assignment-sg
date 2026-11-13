export const plans = [
    {
      name: 'Starter',
      label: 'FREE',
      description: 'For individuals and freelancers building personal momentum.',
      price: '₹0',
      period: '/ month',
      features: [
        'Up to 3 active projects',
        'Unlimited Kanban boards (To Do, In Progress, Done)',
        'Personal deadline calendar',
        'Basic task creation & sub-task tracking',
        '100 MB file attachments'
      ],
      button: 'Get Started Free',
      popular: false,
      dark: false
    },
    {
      name: 'Pro',
      label: 'MOST POPULAR',
      description: 'For growing teams that need real-time metrics and smooth collaboration.',
      price: '₹649',
      period: '/ user / month',
      originalPrice: '₹799',
      features: [
        'Everything in Starter, plus:',
        'Unlimited projects & workspace boards',
        'Real-time progress bars & completion metrics',
        'Live team activity stream & member avatars',
        'Advanced calendar sync & recurring deadlines',
        '10 GB workspace storage',
        'Priority email support'
      ],
      button: 'Get Pro Access',
      popular: true,
      dark: false
    },
    {
      name: 'Enterprise',
      label: 'FOR TEAMS',
      description: 'For fast-scaling companies requiring custom workflows, analytics, and dedicated control.',
      price: '₹1,999',
      period: '/ user / month',
      features: [
        'Everything in Pro, plus:',
        'Unlimited workspace storage',
        'Custom task statuses & board templates',
        'Advanced workload & team capacity analytics',
        'Role-based permissions & SSO',
        'Dedicated account manager & 24/7 priority support',
        '99.9% Uptime SLA'
      ],
      button: 'Contact Sales',
      popular: false,
      dark: true
    }
  ]