const menus = [
    {
        id: 1,
        name: 'Hyperlink',
        links: '/',
    },
    {
        id: 2,
        name: 'Toolboxes',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Scholar',
                links: '/toolboxes/scholar'
            },
            {
                id: 2,
                sub: 'Secretary',
                links: '/toolboxes/secretary'
            },
            {
                id: 3,
                sub: 'Designer',
                links: '/toolboxes/designer'
            },
            {
                id: 4,
                sub: 'Marketing',
                links: '/toolboxes/marketing'
            },
            {
                id: 5,
                sub: 'Start-up',
                links: '/toolboxes/start-up'
            },
            {
                id: 6,
                sub: 'Custom',
                links: '/toolboxes/custom'
            },
        ]
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
    
]

export default menus;