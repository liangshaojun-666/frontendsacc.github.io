
const stuList = [
  {
    id: 0,
    name: '谁被抽中呢？',
    student_number: "",
    src: "./statics/avatar/unKnown.jpg"
  },
  {
    id: 1,
    name: '孤独的游标卡尺',
    student_number: "B22042219",
    src: "./statics/avatar/B22042219.jpg"
  },
  {
    id: 2,
    name: 'B21030126杨航',
    student_number: "B21030126",
    src: "./statics/avatar/B21030126.jpg"
  },
  {
    id: 3,
    name: '曾经的可乐',
    student_number: "B23040213",
    src: "./statics/avatar/B23040213.jpg"
  }, {
    id: 4,
    name: '胡总（白茶）',
    student_number: "B23040217",
    src: "./statics/avatar/B23040217.jpg"
  }, {
    id: 5,
    name: '条条大路当牛马',
    student_number: "B23040218",
    src: "./statics/avatar/B23040218.jpg"
  }, {
    id: 6,
    name: 'Ethereal',
    student_number: "B23040305",
    src: "./statics/avatar/B23040305.jpg"
  }, {
    id: 7,
    name: '小狗有叶绿体',
    student_number: "B23040407",
    src: "./statics/avatar/B23040407.jpg"
  }, {
    id: 8,
    name: '胡不不不不归',
    student_number: "B23040523",
    src: "./statics/avatar/B23040523.jpg"
  }, {
    id: 9,
    name: '我爱睡觉',
    student_number: "B23041703",
    src: "./statics/avatar/B23041703.jpg"
  }, {
    id: 10,
    name: 'Glittering*^o^*',
    student_number: "B23041802",
    src: "./statics/avatar/B23041802.jpg"
  }, {
    id: 11,
    name: '佚',
    student_number: "B23042008",
    src: "./statics/avatar/B23042008.jpg"
  }, {
    id: 12,
    name: '换个出v换个u',
    student_number: "B23042103",
    src: "./statics/avatar/B23042103.jpg"
  }, {
    id: 13,
    name: 'FuZY',
    student_number: "B23042318",
    src: "./statics/avatar/B23042318.jpg"
  }, {
    id: 14,
    name: '那我关月亮了',
    student_number: "B23042506",
    src: "./statics/avatar/B23042506.jpg"
  }, {
    id: 15,
    name: '小能猫',
    student_number: "B23040101",
    src: "./statics/avatar/B23040101.jpg"
  }, {
    id: 16,
    name: '阳光下的茉莉',
    student_number: "B23042406",
    src: "./statics/avatar/B23042406.jpg"
  }, {
    id: 17,
    name: 'gnauhsl',
    student_number: "B23040723",
    src: "./statics/avatar/B23040723.jpg"
  },
  //  {
  //   id: 18,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 19,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 20,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // },
  // {
  //   id: 21,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 22,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 23,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 24,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 25,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // }, {
  //   id: 26,
  //   name: '路人甲',
  //   student_number: "B22042218",
  //   src: "./statics/avatar/B23040213.jpg"
  // },



]


let info = document.querySelector('.info')
let id = document.querySelector('.id')
let avatar = document.querySelector('.avatar img')
let button = document.querySelector('.btn')

//创建函数getrandom生成一个随机数作为数组的index
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function renderData () {
  let RandomIndex = getRandom(1, stuList.length - 1)

  info.innerHTML = stuList[RandomIndex].name
  id.innerHTML = stuList[RandomIndex].student_number
  avatar.src = stuList[RandomIndex].src
}


let time = self.setInterval("renderData()", 50)
time = window.clearInterval(time)
//设置默认信息
info.innerHTML = stuList[0].name
id.innerHTML = stuList[0].student_number
avatar.src = stuList[0].src
let flag = false


button.addEventListener('click', function () {
  if (flag == false) {
    time = window.clearInterval(time)
    button.innerHTML = '开始抽取'
    flag = true
  } else {
    time = self.setInterval("renderData()", 50)
    button.innerHTML = '停止抽取'
    flag = false
  }
})

