export default {
  // title and subtitle
  title: '地表最有誠意婚宴調查表',
  subtitle: '蠢椒 x 智冥',

  // contdown
  countdownTime: '2020-05-20 00:00:00', // 'YYYY-MM-DD HH:mm:ss'

  registerDeadline: '2018-05-20 23:59:59',

  // info
  weddingTime: '2020/05/20 (八) 晚宴',
  weddingAddress: '我家門前的小河 (台灣海峽)',
  weddingAddressGoogleMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46426.38054292488!2d119.56287065126392!3d23.609766324752492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70733e72b2f452ee!2z6Kyb576OL-mOrua1t-ekvuWNgOa1t-WgpOWFrOWckg!5e0!3m2!1szh-TW!2stw!4v1515326149426',

  // register
  form: {
    name: {
      title: '請問你叫什麼名字?',
      hint: '這邊要填你的名字',
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
        { caption: '蠢椒的朋友', value: '蠢椒的朋友' },
        { caption: '智冥的朋友', value: '智冥的朋友' },
        { caption: '共同朋友', value: '共同朋友' },
      ],
    },

    relation: {
      title: '你怎麼認識我們的?',
      items: [
        { caption: '同事', value: '同事' },
        { caption: '大學/研究所同學', value: '大學/研究所同學' },
        { caption: '高中同學', value: '高中同學' },
        { caption: '國中同學', value: '國中同學' },
      ],
    },

    needInvitation: {
      title: '是否需要寄送喜帖?',
      items: [
        // the value must be 'YES' or 'NO'
        { caption: '需要，給我給我!', value: 'YES' },
        { caption: '不用哦，婚禮相關資訊我知道了', value: 'NO' },
      ],
    },
  },

  qa: [
    {
      caption: '1. 這是你們自己做的嗎?',
      legend: '對阿，hen厲害吧>.^',
      leftIcon: 'help',
    },
    {
      caption: '2. 為什麼要做這個啊?',
      legend: '自己做才叫做地表最有誠意阿^.<',
      leftIcon: 'help',
    },
    {
      caption: '3. 這個好酷啊，有沒有open source?',
      legend: '有有有!在這裡 → https://github.com/dy93/wedding-form/',
      leftIcon: 'favorite',
    },
    {
      caption: '4. 我想給你star',
      legend: '好啊',
      leftIcon: 'favorite',
    },
  ],
};
