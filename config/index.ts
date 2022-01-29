const config = {
  navBar: {
    logo: {
      url: '/logo.jpg',
      alt: 'Ngo Huan',
    },
    buttons: [
      {
        text: 'Research Blogs',
        href: '/blogs/research-blogs',
      },
      {
        text: 'Personal Blogs',
        href: '/blogs/personal-blogs',
      },
      {
        text: 'Journal Papers',
        href: '/publications/journal-papers',
      },
      {
        text: 'Conference Proceedings',
        href: '/publications/conference-proceedings',
      },
      {
        text: 'Technical Reports',
        href: '/publications/technical-reports',
      },
    ],
  },
  footer: {
    title: 'Get in touch',
    topLeft: {
      title: 'Collaborate',
      text1_screen_reader_info: 'Email',
      text1: 'support@example.com',
      text2_screen_reader_info: 'Phone Number',
      text2: '+1 (555) 123-4567',
    },
    topRight: {
      title: 'Press',
      text1_screen_reader_info: 'Email',
      text1: 'support@example.com',
      text2_screen_reader_info: 'Phone Number',
      text2: '+1 (555) 123-4567',
    },
    bottomLeft: {
      title: 'Join our team',
      text1_screen_reader_info: 'Email',
      text1: 'support@example.com',
      text2_screen_reader_info: 'Phone Number',
      text2: '+1 (555) 123-4567',
    },
    bottomRight: {
      title: 'Say hello',
      text1_screen_reader_info: 'Email',
      text1: 'support@example.com',
      text2_screen_reader_info: 'Phone Number',
      text2: '+1 (555) 123-4567',
    },
  },
  homePage: {
    banner: {
      imageURL: '/images/home/banner.jpeg',
      imageAlt: 'temporary implementation. replace this',
      header1: 'Case study',
      header2: 'Meet Whitney',
      paragraph1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      paragraph2: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    blogs: {
      title: 'My Blogs',
      subtitle:
        'Here lies my blogs. Temporary implementation, tell me what you want for this text.',
      cards: [
        {
          title: 'Research Blogs',
          href: 'blogs/research-blogs',
          description:
            'Here lies my research blogs. Temporary implementation, tell me what you want for this text.',
          imageUrl: '/images/home/research-blog-banner.jpeg',
          imageAlt: 'temporary implementation',
        },
        {
          title: 'Personal Blogs',
          href: 'blogs/personal-blogs',
          description:
            'Here lies my personal blogs. Temporary implementation, tell me what you want for this text.',
          imageUrl: '/images/home/personal-blog-banner.jpeg',
          imageAlt: 'temporary implementation',
        },
      ],
    },
    publications: {
      title: 'My Publications',
      subtitle:
        'Here lies my Publications. Temporary implementation, tell me what you want for this text.',
      cards: [
        {
          title: 'Journal Papers',
          href: '/publications/journal-papers',
          description:
            'Here lies my journal paper. Temporary implementation, tell me what you want for this text.',
          imageUrl: '/images/home/journal-papers-banner.jpeg',
          imageAlt: 'temporary implementation',
        },
        {
          title: 'Conference Proceedings',
          href: '/publications/conference-proceedings',
          description:
            'Here lies my conference proceedings. Temporary implementation, tell me what you want for this text.',
          imageUrl: '/images/home/conference-proceedings-banner.jpeg',
          imageAlt: 'temporary implementation',
        },
        {
          title: 'Technical Reports',
          href: '/publications/technical-reports',
          description:
            'Here lies my technical reports. Temporary implementation, tell me what you want for this text.',
          imageUrl: '/images/home/technical-reports-banner.jpeg',
          imageAlt: 'temporary implementation',
        },
      ],
    },
  },
  researchBlogs: {
    banner: {
      imageURL: '/images/research-blogs/banner.jpeg',
      imageAlt: 'temporary implementation',
      title: 'Research Blog',
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  },
  personalBlogs: {
    banner: {
      imageURL: '/images/research-blogs/banner.jpeg',
      imageAlt: 'temporary implementation',
      title: 'Personal Blog',
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  },
  journalPapers: {
    title: 'Journal Papers',
  },
  conferenceProceedings: {
    title: 'Conference Proceedings',
  },
  technicalReports: {
    title: 'Technical Reports',
  },
};
export default config;
