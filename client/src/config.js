export default {
  // title and subtitle
  title: '地表最有誠意婚宴調查表',
  subtitle: '從慶 x 雪汾',

  // contdown
  countdownTime: '2018-05-26 00:00:00', // 'YYYY-MM-DD HH:mm:ss'

  registerDeadline: '2018-02-04 23:59:59',

  // info
  weddingTime: '2018/05/26 (六) 晚宴',
  weddingAddress: '北投南豐天玥泉會館 (台北市北投區中山路3號)',
  weddingAddressGoogleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.9564552461034!2d121.50325431519944!3d25.137162983924092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae451fa431a3%3A0xf6cac12c982fe923!2sBeitou+Hot+Springs+Resort!5e0!3m2!1szh-TW!2stw!4v1512908211812',

  // register
  form: {
    name: {
      title: '請問你叫什麼名字?',
      hint: '請問你叫什麼名字',
    },

    attendance: {
      title: '你會來嗎?',
      items: [
        // the value must be 'YES' or 'NO'
        { caption: '會出席', value: 'YES' },
        { caption: '無法出席，祝你們結婚快樂 <3', value: 'NO' },
      ],
    },

    invitor: {
      title: '請問你是誰的朋友?',
      items: [
        { caption: '從慶的朋友', value: '從慶的朋友' },
        { caption: '雪汾的朋友', value: '雪汾的朋友' },
        { caption: '共同朋友', value: '共同朋友' },
      ],
    },

    relation: {
      title: '與我們的關係是?',
      items: [
        { caption: '同事', value: '同事' },
        { caption: '交大武友會', value: '交大武友會' },
        { caption: '大學/研究所同學', value: '大學/研究所同學' },
        { caption: '高中同學', value: '高中同學' },
        { caption: '國中同學', value: '國中同學' },
      ],
    },

    needInvitation: {
      title: '是否需要寄送喜帖?',
      items: [
        // the value must be 'YES' or 'NO'
        { caption: '需要', value: 'YES' },
        { caption: '不用哦，婚禮相關資訊我知道了', value: 'NO' },
      ],
    },
  },

  qa: [
    {
      caption: '1. 為什麼要做這個',
      legend: '因為要有10倍的誠意啊',
      leftIcon: 'help',
    },
    {
      caption: '2. 這個好酷啊，有沒有open source?',
      legend: '有的!請看GitHub',
      leftIcon: 'favorite',
    },
  ],
};
