export default {
    title: 'NextAi',
    description: 'AI and ML Providers for next js.',
    themeConfig: {
      sidebar: [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/' },
            {text: 'Routes', link: '/routes'}
          ]
        },
        {
          text: 'Providers',
          items: [
            { text: 'Open Ai', link: '/providers/open-ai' },
            { text: 'AWS Rekognition', link: '/providers/rekognition' }, 
          ]
        },
        {
          text: 'Auth',
          items: [
            { text: 'Next Auth', link: '/auth/next-auth' },
            { text: 'Auth0', link: '/auth/auth0' },
          ]
        },
      ]
    }
  }