const menus = [
  {
    id: 1,
    name: 'Hyperlink',
    links: '/',
  },
  {
    id: 2,
    name: 'Toolboxes',
    links: '/toolboxes',
    namesub: [
      {
        id: 1,
        sub: 'Modern Web Studio',
        links: '/toolboxes/modern_web_studio',
      },
      {
        id: 2,
        sub: 'Growth Ops Command',
        links: '/toolboxes/growth_ops_command',
      },
      {
        id: 3,
        sub: 'AI Product Squad',
        links: '/toolboxes/ai_product_squad',
      },
    ],
  },
  {
    id: 3,
    name: 'Blogs',
    links: '/blogs',
  },
  {
    id: 4,
    name: 'Roadmap',
    links: '/roadmap',
  },

  {
    id: 6,
    name: 'About us',
    links: '/aboutUs',
  },
];

export default menus;
