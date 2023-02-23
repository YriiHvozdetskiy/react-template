export * from './links';
export * from './routes';

export const SORT_TYPES = {
   nameAscending: 'name',
   nameDescending: '-name',
   dateAscending: '_updated_at',
   dateDescending: '-_updated_at',
};

export const DEVICE = {
   mobile: 666,
   desktop: 667,
};

export const TYPE_TABLES = {
   companies: {
      toggle: false,// to open under tables
      name: true,
      admin: true,
      group: true,
      actions: true,
      type: {
         edit: true,
      },
      size: {
         //should be 95%
         name: {
            flex: '0 1 40%',
            sort: false,
         },
         admin: {
            flex: '0 1 25%',
         },
         group: {
            flex: '0 1 10%',
            sort: false,
         },
         actions: {
            flex: '0 1 20%',
            sort: false,
         },

      },
      // structure sub table
      sizeQuestions: {
         //should be 100%
         number: {
            flex: '0 1 10%',
         },
         name: {
            flex: '0 1 45%',
         },
         email: {
            flex: '0 1 45%',
         },
      },
      // text in TableDesktop_header
      text: {
         name: 'Company',
         group: 'Users',
      },
      // text in  SubTable_header
      textQuestions: {
         name: 'Test name',
      },
      // variations what to show when 'opening' row
      variations: {
         subTable: true,
      },
   },
   // list-test page table AdminListPage
   listQuiz: {
      toggle: true,// to open under tables
      photo: true,
      name: true,
      date: true,
      group: true,
      assigned: true,
      actions: true,
      type: {
         edit: true,
      },
      size: {
         //should be 95%
         photo: {
            flex: '0 1 8%',
         },
         name: {
            flex: '0 1 32%',
            sort: true,
         },
         date: {
            flex: '0 1 15%',
            sort: true,
         },
         group: {
            flex: '0 1 10%',
         },
         assigned: {
            flex: '0 1 15%',
            sort: false,
         },
         actions: {
            flex: '0 1 15%',
            sort: false,
         },
      },
      sizeQuestions: {
         //should be 100%
         number: {
            flex: '0 1 10%',
         },
         name: {
            flex: '0 1 50%',
         },
         questions: {
            flex: '0 1 20%',
         },
         rightAnswer: {
            flex: '0 1 20%',
         },
      },
      // text in TableDesktop_header
      text: {
         name: 'Name',
         group: 'Group',
      },
      // text in  SubTable_header
      textQuestions: {
         name: 'Name of the question',
      },
      // variations what to show when 'opening' row
      variations: {
         subTable: true,
      },
   },
   // dashboard page table DashboardPage
   user: {
      toggle: true,// to open under tables
      photo: true,
      name: true,
      date: true,
      admin: true,
      score: true,
      actions: false,
      // content type inside the cell
      type: {
         score: true,
      },
      size: {
         //should be 95%
         photo: {
            flex: '0 1 8%',
         },
         name: {
            flex: '0 1 40%',
            sort: false,
         },
         date: {
            flex: '0 1 17%',
            sort: false,
         },
         admin: {
            flex: '0 1 15%',
            sort: true,
         },
         score: {
            flex: '0 1 15%',
            sort: true,
         },
      },
      sizeQuestions: {
         //should be 100%
         number: {
            flex: '0 1 10%',
         },
         name: {
            flex: '0 1 30%',
         },
         questions: {
            flex: '0 1 15%',
         },
         rightAnswer: {
            flex: '0 1 15%',
         },
         userAnswer: {
            flex: '0 1 15%',
         },
         score: {
            flex: '0 1 15%',
         },
      },
      // text in TableDesktop_header
      text: {
         name: 'Name',
      },
      // text in  SubTable_header
      textQuestions: {
         name: 'Name of the question',
      },
      // variations what to show when 'opening' row
      variations: {
         subTable: true,
      },
   },
   // Users page table SingleQuizPage
   commitUserAnswer: {
      toggle: false, // to open under tables
      name: true,
      question: true,
      rightAnswer: true,
      userAnswer: true,
      score: true,
      // content type inside the cell
      type: {
         evaluate: true,
      },
      size: {
         //should be 95%
         name: {
            flex: '0 1 34%',
         },
         question: {
            flex: '0 1 12%',
         },
         rightAnswer: {
            flex: '0 1 12%',
         },
         userAnswer: {
            flex: '0 1 13%',
         },
         score: {
            flex: '0 1 24%',
         },
      },
      // text in TableDesktop_header
      text: {
         name: 'Name of the question',
      },
      // text in  SubTable_header
      textQuestions: {
         name: 'Name of the question',
      },
      // variations what to show when 'opening' row
      variations: {
         rating: true,
      },
   },
   seniorAdmin: {
      toggle: true, // to open under tables
      name: true,
      mail: false,
      phone: false,
      date: false,
      admin: true,
      group: true,
      actions: true,
      type: {
         access: true,
         // evaluate: true,
      },
      size: {
         //should be 95%
         name: {
            flex: '0 1 12%',
            justifyContent: 'center',
            padding: 0,
         },
         admin: {
            flex: '0 1 22%',
            justifyContent: 'center',
            padding: 0,
            sort: false,
         },
         group: {
            flex: '0 1 22%',
            justifyContent: 'center',
            padding: 0,
            sort: false,
         },
         actions: {
            flex: '0 1 39%',
            justifyContent: 'center',
            padding: 0,
            sort: false,
         },
      },
      sizeQuestions: {
         //should be 100%
         mail: {
            flex: '0 1 33%',
         },
         phone: {
            flex: '0 1 33%',
         },
         date: {
            flex: '0 1 34%',
         },
      },
      // text in TableDesktop_header
      text: {
         name: 'Name',
      },
      variations: {
         requests: true,
      },

   },
   // single-quiz page table SingleQuizPage
   listTest: {
      toggle: false, // to open under tables
      photo: true,
      name: true,
      question: true,
      rightAnswer: true,
      userAnswer: true,
      score: true,
      // content type inside the cell
      type: {
         evaluate: true,
      },
      size: {
         //should be 95%
         photo: {
            flex: '0 1 8%',
         },
         name: {
            flex: '0 1 30%',
         },
         question: {
            flex: '0 1 12%',
         },
         rightAnswer: {
            flex: '0 1 12%',
         },
         userAnswer: {
            flex: '0 1 13%',
         },
         score: {
            flex: '0 1 20%',
         },
      },
      // text in TableDesktop_header
      text: {
         name: 'Name of the question',
      },
      // text in  SubTable_header
      textQuestions: {
         name: 'Name of the question',
      },
      // variations what to show when 'opening' row
      variations: {
         rating: true,
      },
   },
};
