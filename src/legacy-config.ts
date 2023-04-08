const legacyConfig = {
  // navigation bar
  navBar: {
    // website logo, displayed on the top left
    logo: {
      // the logo url. "/logo.jpg" means in folder "public", file "logo.jpg"
      url: '/mem_logo2.jpg',

      // description of the logo. This is useful when the a reader fails to load the logo, this text will be displayed instead.
      alt: 'Ngo Huan',
    },

    // navigation bar buttons, displayed in top right
    buttons: [
      {
        // button text
        text: 'Research Blogs',

        // button link. This should not be changed.
        href: '/blogs/research-blogs',
      },
      {
        // button text
        text: 'Personal Blogs',

        // button link. This should not be changed.
        href: '/blogs/personal-blogs',
      },
      {
        // button text
        text: 'Journal Papers',

        // button link. This should not be changed.
        href: '/publications/journal-papers',
      },
      {
        // button text
        text: 'Conference Proceedings',

        // button link. This should not be changed.
        href: '/publications/conference-proceedings',
      },
      {
        // button text
        text: 'Technical Reports',

        // button link. This should not be changed.
        href: '/publications/technical-reports',
      },
    ],
  },

  // footer, displayed on bottom
  footer: {
    // title displayed on the left of footer
    title: 'Get in touch',

    // infomation of the top left grid
    topLeft: {
      // title for top left grid
      title: 'Huan Hoang Ngo, E.I.T',

      // description of what text1 is. Useful for screen reader.
      text1_screen_reader_info: 'Email',

      // text1 value
      text1: 'hhngo[at]memphis[dot]com',

      // description of what text2 is. Useful for screen reader.
      text2_screen_reader_info: 'Phone Number',

      // text2 value
      text2: '309 Engineering Science Building',

      // description of what text3 is. Useful for screen reader.
      text3_screen_reader_info: 'Phone Number',

      // text3 value
      text3: 'Department of Civil Engineering',

      // description of what text4 is. Useful for screen reader.
      text4_screen_reader_info: 'Phone Number',
      // text4 value
      text4: 'The University of Memphis',
    },
  },

  // home page
  homePage: {
    // title displayed on a tab
    title: 'Ngo Huan Website',

    // description of website. Useful for screen readers
    description:
      "Ngo Huan's personal website for posting blogs and publications",

    // resume url
    resumeURL: 'pdf/Huan_CV3.pdf',

    // home page banner config
    banner: {
      // url of banner image
      imageURL: '/images/home/IMG_1495_2.png',

      // description of banner image
      imageAlt: 'Huan Ngo',

      // header1 value
      header1: '',

      // header2 value
      header2: 'Huan Ngo',

      // paragraph1 value
      paragraph1: `Hello, I am a final year Ph.D. Candidate majoring in Transportation Engineering under my advisor Professor Sabya Mishra. My dissertation is about “Data-driven Methodologies and its Application on Urban Mobility”. The dissertation covers four smaller studies which goes through various subjects such as optimization, algorithm design, big data analytic, graph convolution, and reinforcement learning. I believe this topic can prove equally useful to both the public and private sector as the transportation sector is moving toward electrification and automation.`,

      // paragraph2 value
      paragraph2:
        'You can learn more about my researches in the Research Blog section of this website. Beside my personal research, I also worked on funded projects for various agencies such as Tennessee Department of Transportation and Memphis Area Transit Authority. For a complete overview on my professional history, please follow the CV link below:',
    },

    // home page blog section
    blogs: {
      // title of blog section
      title: 'My Blogs',

      // subtitle of blog section
      subtitle: '',

      // list of card objects
      cards: [
        {
          // card title
          title: 'Research Blogs',

          // href of chard. This should not be changed.
          href: 'blogs/research-blogs',

          // card description
          description: 'This blog includes discussion on my research projects.',

          // card thumbnail url
          imageUrl: '/images/home/research.jpg',

          // card thubmnail description
          imageAlt: 'temporary implementation',
        },
        {
          // card title
          title: 'Personal Blogs',

          // href of card. This should not be changed
          href: 'blogs/personal-blogs',

          // card description
          description:
            'This blog includes my travel experiences, music, perspectives, and more.',

          // card thumbnail url
          imageUrl: '/images/home/personal.jpg',

          // card thubmnail description
          imageAlt: 'temporary implementation',
        },
      ],
    },

    // home page publications section
    publications: {
      // title of publication section
      title: 'My Publications',

      // subtitle of publication section
      subtitle: '',

      // list of card object
      cards: [
        {
          // card title
          title: 'Journal Papers',

          // href of card. This should not be changed
          href: '/publications/journal-papers',

          // card description
          description:
            'Researches published in scientific peer-reviewed journals.',

          // card thumbnail url
          imageUrl: '/images/home/journal2.jpg',

          // card thubmnail description
          imageAlt: 'temporary implementation',
        },
        {
          // card title
          title: 'Conference Proceedings',

          // href of card. This should not be changed
          href: '/publications/conference-proceedings',

          // card description
          description:
            'Researches submitted to conferences and selected for poster and/or presentation.',

          // card thumbnail url
          imageUrl: '/images/home/conference.jpg',

          // card thubmnail description
          imageAlt: 'temporary implementation',
        },
        {
          // card title
          title: 'Technical Reports',

          // href of card. This should not be changed
          href: '/publications/technical-reports',

          // card description
          description:
            'Technical reports on funded project.                                          ',

          // card thumbnail url
          imageUrl: '/images/home/technical.jpg',

          // card thubmnail description
          imageAlt: 'temporary implementation',
        },
      ],
    },
  },

  // research blog page
  researchBlogs: {
    // research blog banner
    banner: {
      // banner image url
      imageURL: '/images/home/research.jpg',

      // banner image description
      imageAlt: 'temporary implementation',

      // banner title
      title: 'Research Blog',

      // banner subtitle
      subtitle: 'This blog includes discussion on my research projects.',
    },
  },
  // personal blog page
  personalBlogs: {
    // pesronal blog banner
    banner: {
      // banner image url
      imageURL: '/images/home/personal.jpg',

      // banner image description
      imageAlt: 'temporary implementation',

      // banner title
      title: 'Personal Blog',

      // banner subtitle
      subtitle:
        'This blog includes my travel experiences, music, perspectives, and more.',
    },
  },

  // journal papers page
  journalPapers: {
    // journal page title
    title: 'Journal Papers',
  },

  // conference proceedings page
  conferenceProceedings: {
    // conference proceedings title
    title: 'Conference Proceedings',
  },

  // technical reports page
  technicalReports: {
    // technical reports title
    title: 'Technical Reports',
  },
};

export default legacyConfig;
