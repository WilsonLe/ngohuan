const config = {
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
	  // text3 value
      text2: 'Department of Civil Engineering',
	  // text4 value
      text2: 'The University of Memphis',
    },
  },

  // home page
  homePage: {
    // title displayed on a tab
    title: 'Ngo Huan Website',

    // description of website. Useful for screen readers
    description:
      "Ngo Huan's personal website for posting blogs and publications",

    // home page banner config
    banner: {
      // url of banner image
      imageURL: '/images/home/IMG_1495_2.png',

      // description of banner image
      imageAlt: 'Huan Ngo',

      // header2 value
      header2: 'Huan Ngo',

      // paragraph1 value
      paragraph1: `I am a third year PhD Student in Transportation Engineering at the University of Memphis and my advisor is Professor Sabyasachee Mishra. My current main research areas are (1) minimizing the transportation environmental impact especially in dense urban area, (2) making informed transportation planning decision based on data, and (3) promoting mobility as a service and designing cities for people instead of car. I also work on funded projects for local and state transportation agencies. I am honored with the Herff Fellowship for the PhD program. For more information about my professional history, please follow the link below:`,

      // paragraph2 value
      paragraph2: <a href="/pdf/Huan_CV2.pdf">Download CV</a>,
    },

    // home page blog section
    blogs: {
      // title of blog section
      title: 'My Blogs',

      // subtitle of blog section
      subtitle:
        'Here lies my blogs. Temporary implementation, tell me what you want for this text.',

      // list of card objects
      cards: [
        {
          // card title
          title: 'Research Blogs',

          // href of chard. This should not be changed.
          href: 'blogs/research-blogs',

          // card description
          description:
            'Here lies my research blogs. Temporary implementation, tell me what you want for this text.',

          // card thumbnail url
          imageUrl: '/images/home/research-blog-banner.jpeg',

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
            'Here lies my personal blogs. Temporary implementation, tell me what you want for this text.',

          // card thumbnail url
          imageUrl: '/images/home/personal-blog-banner.jpeg',

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
      subtitle:
        'Here lies my Publications. Temporary implementation, tell me what you want for this text.',

      // list of card object
      cards: [
        {
          // card title
          title: 'Journal Papers',

          // href of card. This should not be changed
          href: '/publications/journal-papers',

          // card description
          description:
            'Here lies my journal paper. Temporary implementation, tell me what you want for this text.',

          // card thumbnail url
          imageUrl: '/images/home/journal-papers-banner.jpeg',

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
            'Here lies my conference proceedings. Temporary implementation, tell me what you want for this text.',

          // card thumbnail url
          imageUrl: '/images/home/conference-proceedings-banner.jpeg',

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
            'Here lies my technical reports. Temporary implementation, tell me what you want for this text.',

          // card thumbnail url
          imageUrl: '/images/home/technical-reports-banner.jpeg',

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
      imageURL: '/images/research-blogs/banner.jpeg',

      // banner image description
      imageAlt: 'temporary implementation',

      // banner title
      title: 'Research Blog',

      // banner subtitle
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  },
  // personal blog page
  personalBlogs: {
    // pesronal blog banner
    banner: {
      // banner image url
      imageURL: '/images/research-blogs/banner.jpeg',

      // banner image description
      imageAlt: 'temporary implementation',

      // banner title
      title: 'Personal Blog',

      // banner subtitle
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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

export default config;
