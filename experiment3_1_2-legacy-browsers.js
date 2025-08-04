/************************ 
 * Experiment3_1_2 Test *
 ************************/


// store info about the experiment session:
let expName = 'experiment3_1_2';  // from the Builder filename that created this script
let expInfo = {'编号*': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/0-10-6.jpg', 'path': 'stimuli/0-10-6.jpg'},
    {'name': 'stimuli/1-16-1.jpg', 'path': 'stimuli/1-16-1.jpg'},
    {'name': 'all_faces.json', 'path': 'all_faces.json'},
    {'name': 'slider.jpg', 'path': 'slider.jpg'},
    {'name': 'stimuli/1-7-19.jpg', 'path': 'stimuli/1-7-19.jpg'},
    {'name': 'stimuli/1-8-13.jpg', 'path': 'stimuli/1-8-13.jpg'},
    {'name': 'stimuli/attention_7.jpg', 'path': 'stimuli/attention_7.jpg'},
    {'name': 'stimuli/1-8-15.jpg', 'path': 'stimuli/1-8-15.jpg'},
    {'name': 'stimuli/1-16-2.jpg', 'path': 'stimuli/1-16-2.jpg'},
    {'name': 'stimuli/0-26-3.jpg', 'path': 'stimuli/0-26-3.jpg'},
    {'name': 'stimuli/0-17-3.jpg', 'path': 'stimuli/0-17-3.jpg'},
    {'name': 'stimuli/0-9-3.jpg', 'path': 'stimuli/0-9-3.jpg'},
    {'name': 'stimuli/0-10-13.jpg', 'path': 'stimuli/0-10-13.jpg'},
    {'name': 'stimuli/1-2-3.jpg', 'path': 'stimuli/1-2-3.jpg'},
    {'name': 'stimuli/1-4-13.jpg', 'path': 'stimuli/1-4-13.jpg'},
    {'name': 'stimuli/attention.jpg', 'path': 'stimuli/attention.jpg'},
    {'name': 'stimuli/0-9-20.jpg', 'path': 'stimuli/0-9-20.jpg'},
    {'name': 'stimuli/1-7-1.jpg', 'path': 'stimuli/1-7-1.jpg'},
    {'name': 'stimuli/0-20-19.jpg', 'path': 'stimuli/0-20-19.jpg'},
    {'name': 'stimuli/1-8-12.jpg', 'path': 'stimuli/1-8-12.jpg'},
    {'name': 'stimuli/0-17-7.jpg', 'path': 'stimuli/0-17-7.jpg'},
    {'name': 'stimuli/1-23-8.jpg', 'path': 'stimuli/1-23-8.jpg'},
    {'name': 'stimuli/1-23-19.jpg', 'path': 'stimuli/1-23-19.jpg'},
    {'name': 'stimuli/0-18-19.jpg', 'path': 'stimuli/0-18-19.jpg'},
    {'name': 'stimuli/0-3-16.jpg', 'path': 'stimuli/0-3-16.jpg'},
    {'name': 'stimuli/1-14-7.jpg', 'path': 'stimuli/1-14-7.jpg'},
    {'name': 'stimuli/0-17-1.jpg', 'path': 'stimuli/0-17-1.jpg'},
    {'name': 'stimuli/1-21-2.jpg', 'path': 'stimuli/1-21-2.jpg'},
    {'name': 'stimuli/0-17-11.jpg', 'path': 'stimuli/0-17-11.jpg'},
    {'name': 'stimuli/1-4-6.jpg', 'path': 'stimuli/1-4-6.jpg'},
    {'name': 'stimuli/0-25-20.jpg', 'path': 'stimuli/0-25-20.jpg'},
    {'name': 'stimuli/1-14-10.jpg', 'path': 'stimuli/1-14-10.jpg'},
    {'name': 'stimuli/0-25-13.jpg', 'path': 'stimuli/0-25-13.jpg'},
    {'name': 'stimuli/0-26-12.jpg', 'path': 'stimuli/0-26-12.jpg'},
    {'name': 'stimuli/1-23-20.jpg', 'path': 'stimuli/1-23-20.jpg'},
    {'name': 'stimuli/1-22-8.jpg', 'path': 'stimuli/1-22-8.jpg'},
    {'name': 'stimuli/0-15-18.jpg', 'path': 'stimuli/0-15-18.jpg'},
    {'name': 'stimuli/0-20-6.jpg', 'path': 'stimuli/0-20-6.jpg'},
    {'name': 'stimuli/1-22-1.jpg', 'path': 'stimuli/1-22-1.jpg'},
    {'name': 'stimuli/0-18-18.jpg', 'path': 'stimuli/0-18-18.jpg'},
    {'name': 'stimuli/0-3-4.jpg', 'path': 'stimuli/0-3-4.jpg'},
    {'name': 'stimuli/0-6-1.jpg', 'path': 'stimuli/0-6-1.jpg'},
    {'name': 'stimuli/0-15-4.jpg', 'path': 'stimuli/0-15-4.jpg'},
    {'name': 'stimuli/0-15-20.jpg', 'path': 'stimuli/0-15-20.jpg'},
    {'name': 'stimuli/0-20-3.jpg', 'path': 'stimuli/0-20-3.jpg'},
    {'name': 'stimuli/0-6-11.jpg', 'path': 'stimuli/0-6-11.jpg'},
    {'name': 'stimuli/1-24-5.jpg', 'path': 'stimuli/1-24-5.jpg'},
    {'name': 'all_faces.xlsx', 'path': 'all_faces.xlsx'},
    {'name': 'stimuli/0-20-20.jpg', 'path': 'stimuli/0-20-20.jpg'},
    {'name': 'stimuli/1-8-11.jpg', 'path': 'stimuli/1-8-11.jpg'},
    {'name': 'stimuli/1-21-18.jpg', 'path': 'stimuli/1-21-18.jpg'},
    {'name': 'stimuli/1-2-9.jpg', 'path': 'stimuli/1-2-9.jpg'},
    {'name': 'stimuli/1-24-13.jpg', 'path': 'stimuli/1-24-13.jpg'},
    {'name': 'stimuli/0-18-9.jpg', 'path': 'stimuli/0-18-9.jpg'},
    {'name': 'stimuli/1-2-8.jpg', 'path': 'stimuli/1-2-8.jpg'},
    {'name': 'blank.png', 'path': 'blank.png'},
    {'name': 'stimuli/1-7-18.jpg', 'path': 'stimuli/1-7-18.jpg'},
    {'name': 'stimuli/1-21-1.jpg', 'path': 'stimuli/1-21-1.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionClock;
var instru_text;
var trials_data;
var instru_key_resp;
var block_instruClock;
var block_instr_text;
var block_key_resp;
var fixationClock;
var fixation_text;
var image1Clock;
var img1_instr;
var image_t1;
var rating_T1_keys;
var slider_image;
var img1_one;
var img1_three;
var img1_five;
var img1_seven;
var img1_nine;
var confidence_1Clock;
var confidence_T1_text;
var confidence_T1_keys;
var slider_confidence_t1;
var con1_one;
var con1_three;
var con1_five;
var con1_seven;
var con1_nine;
var image2Clock;
var img2_instr;
var image_t2;
var rating_T2_keys;
var slider_image_t2;
var img2_one;
var img2_three;
var img2_five;
var img2_seven;
var img2_nine;
var confidence_2Clock;
var confidence2_text;
var confidence_T2_keys;
var slider_confidence_t2;
var con2_one;
var con2_three;
var con2_five;
var con2_seven;
var con2_nine;
var endClock;
var end_text;
var end_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instru_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instru_text',
    text: '欢迎参加本次实验！\n在实验中，你将扮演某二手交易平台上的买家。\n平台会给您提供某些卖家的个人照片。\n请你根据卖家的个人照片判断该卖家的可信度，\n以决定是否愿意与其进行交易（如购买课本、租借物品等）。\n\n请按空格键继续。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // 初始化全局变量
  var current_img = "blank.png";
  
  var thisExp = psychoJS.experiment;
  
  // 读取刺激列表 - 在线上实验中，您需要确保Excel文件已转换为JSON格式
  // 假设您已经将all_faces.xlsx转换为JSON格式并通过资源加载
  var faces_df = [
      {
          "identity": 6,
          "gender": "male",
          "high_trust_img": "stimuli/0-6-11.jpg",
          "low_trust_img": "stimuli/0-6-1.jpg",
          "range": 1.53125
      },
      {
          "identity": 26,
          "gender": "male",
          "high_trust_img": "stimuli/0-26-12.jpg",
          "low_trust_img": "stimuli/0-26-3.jpg",
          "range": 1.59375
      },
      {
          "identity": 2,
          "gender": "female",
          "high_trust_img": "stimuli/1-2-3.jpg",
          "low_trust_img": "stimuli/1-2-9.jpg",
          "range": 1.6875
      },
      {
          "identity": 21,
          "gender": "female",
          "high_trust_img": "stimuli/1-21-18.jpg",
          "low_trust_img": "stimuli/1-21-2.jpg",
          "range": 1.6875
      },
      {
          "identity": 10,
          "gender": "male",
          "high_trust_img": "stimuli/0-10-6.jpg",
          "low_trust_img": "stimuli/0-10-13.jpg",
          "range": 1.8125
      },
      {
          "identity": 4,
          "gender": "female",
          "high_trust_img": "stimuli/1-4-13.jpg",
          "low_trust_img": "stimuli/1-4-6.jpg",
          "range": 2.0
      },
      {
          "identity": 17,
          "gender": "male",
          "high_trust_img": "stimuli/0-17-11.jpg",
          "low_trust_img": "stimuli/0-17-3.jpg",
          "range": 0.6875
      },
      {
          "identity": 22,
          "gender": "female",
          "high_trust_img": "stimuli/1-22-1.jpg",
          "low_trust_img": "stimuli/1-22-8.jpg",
          "range": 0.6875
      },
      {
          "identity": 9,
          "gender": "male",
          "high_trust_img": "stimuli/0-9-3.jpg",
          "low_trust_img": "stimuli/0-9-20.jpg",
          "range": 0.78125
      },
      {
          "identity": 14,
          "gender": "female",
          "high_trust_img": "stimuli/1-14-7.jpg",
          "low_trust_img": "stimuli/1-14-10.jpg",
          "range": 0.875
      },
      {
          "identity": 20,
          "gender": "male",
          "high_trust_img": "stimuli/0-20-6.jpg",
          "low_trust_img": "stimuli/0-20-19.jpg",
          "range": 0.90625
      },
      {
          "identity": 3,
          "gender": "male",
          "high_trust_img": "stimuli/0-3-4.jpg",
          "low_trust_img": "stimuli/0-3-16.jpg",
          "range": 0.96875
      },
      {
          "identity": 25,
          "gender": "male",
          "high_trust_img": "stimuli/0-25-20.jpg",
          "low_trust_img": "stimuli/0-25-13.jpg",
          "range": 1.15625
      },
      {
          "identity": 15,
          "gender": "male",
          "high_trust_img": "stimuli/0-15-4.jpg",
          "low_trust_img": "stimuli/0-15-18.jpg",
          "range": 1.1875
      },
      {
          "identity": 18,
          "gender": "male",
          "high_trust_img": "stimuli/0-18-9.jpg",
          "low_trust_img": "stimuli/0-18-18.jpg",
          "range": 1.1875
      },
      {
          "identity": 23,
          "gender": "female",
          "high_trust_img": "stimuli/1-23-19.jpg",
          "low_trust_img": "stimuli/1-23-8.jpg",
          "range": 1.28125
      },
      {
          "identity": 8,
          "gender": "female",
          "high_trust_img": "stimuli/1-8-11.jpg",
          "low_trust_img": "stimuli/1-8-15.jpg",
          "range": 1.375
      },
      {
          "identity": 24,
          "gender": "female",
          "high_trust_img": "stimuli/1-24-13.jpg",
          "low_trust_img": "stimuli/1-24-5.jpg",
          "range": 1.40625
      },
      {
          "identity": 7,
          "gender": "female",
          "high_trust_img": "stimuli/1-7-18.jpg",
          "low_trust_img": "stimuli/1-7-1.jpg",
          "range": 1.46875
      },
      {
          "identity": 16,
          "gender": "female",
          "high_trust_img": "stimuli/1-16-2.jpg",
          "low_trust_img": "stimuli/1-16-1.jpg",
          "range": 1.5
      }
      // ... 添加您的所有数据
  ];
  
  // 分离男性和女性面孔
  var male_faces = faces_df.filter(face => face.gender === 'male')
                          .sort((a, b) => b.range - a.range); // 按range降序排列
  var female_faces = faces_df.filter(face => face.gender === 'female')
                            .sort((a, b) => b.range - a.range); // 按range降序排列
  
  // 存储到全局变量
  window.faces_df = faces_df;
  
  // 获取参与者编号
  var participant_id = parseInt(expInfo["编号*"]);
  
  // 初始化存储trials数据的数组
  var trials_data = [];
  
  // 处理男性面孔
  for (let i = 0; i < male_faces.length; i += 2) {
      if (i + 1 < male_faces.length) { // 确保有配对的人物
          var face1 = male_faces[i];
          var face2 = male_faces[i + 1];
          
          // 根据被试编号和配对索引决定分配方式
          if ((participant_id + Math.floor(i/2)) % 2 === 0) {
              // 人物1到条件1，人物2到条件2
              trials_data.push({...face1, condition: 1});
              trials_data.push({...face2, condition: 2});
          } else {
              // 人物1到条件2，人物2到条件1
              trials_data.push({...face1, condition: 2});
              trials_data.push({...face2, condition: 1});
          }
      }
  }
  
  // 处理女性面孔，使用相同的逻辑
  for (let i = 0; i < female_faces.length; i += 2) {
      if (i + 1 < female_faces.length) { // 确保有配对的人物
          var face1 = female_faces[i];
          var face2 = female_faces[i + 1];
          
          // 根据被试编号和配对索引决定分配方式
          if ((participant_id + Math.floor(i/2)) % 2 === 0) {
              trials_data.push({...face1, condition: 1});
              trials_data.push({...face2, condition: 2});
          } else {
              trials_data.push({...face1, condition: 2});
              trials_data.push({...face2, condition: 1});
          }
      }
  }
  
  // 随机化试次顺序
  function shuffleArray(array) {
      var shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
  }
  
  trials_data = shuffleArray(trials_data);
  
  // 检查两个条件下的性别平衡情况
  var condition1 = trials_data.filter(trial => trial.condition === 1);
  var condition2 = trials_data.filter(trial => trial.condition === 2);
  
  // 计算性别分布
  var condition1_male = condition1.filter(trial => trial.gender === 'male').length;
  var condition1_female = condition1.filter(trial => trial.gender === 'female').length;
  var condition2_male = condition2.filter(trial => trial.gender === 'male').length;
  var condition2_female = condition2.filter(trial => trial.gender === 'female').length;
  
  // 计算平均range
  var condition1_avg_range = condition1.reduce((sum, trial) => sum + trial.range, 0) / condition1.length;
  var condition2_avg_range = condition2.reduce((sum, trial) => sum + trial.range, 0) / condition2.length;
  
  // 打印平衡检查结果（在线上实验中可能需要使用console.log）
  console.log(`条件1: 男性 = ${condition1_male}, 女性 = ${condition1_female}`);
  console.log(`条件2: 男性 = ${condition2_male}, 女性 = ${condition2_female}`);
  console.log(`条件1 平均range: ${condition1_avg_range.toFixed(2)}`);
  console.log(`条件2 平均range: ${condition2_avg_range.toFixed(2)}`);
  
  // 在线上实验中，您可能需要将数据存储在全局变量中而不是文件
  // 设置全局变量供后续使用
  psychoJS.experiment.extraInfo['trials_file'] = trials_data;
  
  // 创建全局字典存储评分和确定性
  var T1_ratings = {};
  var T1_confidence = {};
  
  // 确保变量被添加到全局作用域
  window.T1_ratings = T1_ratings;
  window.T1_confidence = T1_confidence;
  window.trials_data = trials_data;
  trials_data = window.trials_data;
  
  // 如果需要创建TrialHandler，可以使用以下方式：
  // var trialHandler = new data.TrialHandler({
  //     trialList: trials_data,
  //     nReps: 1,
  //     method: data.TrialHandler.Method.SEQUENTIAL
  // });
  instru_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_instru"
  block_instruClock = new util.Clock();
  block_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_instr_text',
    text: '接下来是其中一位卖家的照片，\n请您判断是否愿意与其进行交易。\n\n请按空格键继续。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  block_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "image1"
  image1Clock = new util.Clock();
  img1_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'img1_instr',
    text: '你愿意与这位卖家进行交易吗？',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_t1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_t1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  rating_T1_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_image', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  img1_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'img1_one',
    text: '非常不愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  img1_three = new visual.TextStim({
    win: psychoJS.window,
    name: 'img1_three',
    text: '比较不愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.225), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  img1_five = new visual.TextStim({
    win: psychoJS.window,
    name: 'img1_five',
    text: '中立',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  img1_seven = new visual.TextStim({
    win: psychoJS.window,
    name: 'img1_seven',
    text: '比较愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.225, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  img1_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'img1_nine',
    text: '非常愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "confidence_1"
  confidence_1Clock = new util.Clock();
  confidence_T1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_T1_text',
    text: '您对刚才的可信度评分有多确定？',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  confidence_T1_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_confidence_t1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_confidence_t1', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  con1_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'con1_one',
    text: '非常不确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  con1_three = new visual.TextStim({
    win: psychoJS.window,
    name: 'con1_three',
    text: '比较不确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.225), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  con1_five = new visual.TextStim({
    win: psychoJS.window,
    name: 'con1_five',
    text: '中立',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  con1_seven = new visual.TextStim({
    win: psychoJS.window,
    name: 'con1_seven',
    text: '比较确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.225, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  con1_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'con1_nine',
    text: '非常确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "image2"
  image2Clock = new util.Clock();
  img2_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'img2_instr',
    text: '你愿意与这位卖家进行交易吗？',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_t2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_t2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  rating_T2_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_image_t2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_image_t2', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  img2_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'img2_one',
    text: '非常不愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  img2_three = new visual.TextStim({
    win: psychoJS.window,
    name: 'img2_three',
    text: '比较不愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.225), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  img2_five = new visual.TextStim({
    win: psychoJS.window,
    name: 'img2_five',
    text: '中立',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  img2_seven = new visual.TextStim({
    win: psychoJS.window,
    name: 'img2_seven',
    text: '比较愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.225, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  img2_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'img2_nine',
    text: '非常愿意',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "confidence_2"
  confidence_2Clock = new util.Clock();
  confidence2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence2_text',
    text: '您对刚才的可信度评分有多确定？',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  confidence_T2_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_confidence_t2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_confidence_t2', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  con2_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'con2_one',
    text: '非常不确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  con2_three = new visual.TextStim({
    win: psychoJS.window,
    name: 'con2_three',
    text: '比较不确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.225), (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  con2_five = new visual.TextStim({
    win: psychoJS.window,
    name: 'con2_five',
    text: '中立',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  con2_seven = new visual.TextStim({
    win: psychoJS.window,
    name: 'con2_seven',
    text: '比较确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.225, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  con2_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'con2_nine',
    text: '非常确定',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.27)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '感谢您参与本次研究！请按空格键退出。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instru_key_resp_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru_key_resp.keys = undefined;
    instru_key_resp.rt = undefined;
    _instru_key_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instru_text);
    instructionComponents.push(instru_key_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru_text* updates
    if (t >= 0.0 && instru_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_text.tStart = t;  // (not accounting for frame time here)
      instru_text.frameNStart = frameN;  // exact frame index
      
      instru_text.setAutoDraw(true);
    }

    
    // *instru_key_resp* updates
    if (t >= 0.0 && instru_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_key_resp.tStart = t;  // (not accounting for frame time here)
      instru_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru_key_resp.clearEvents(); });
    }

    if (instru_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru_key_resp_allKeys = _instru_key_resp_allKeys.concat(theseKeys);
      if (_instru_key_resp_allKeys.length > 0) {
        instru_key_resp.keys = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instru_key_resp.rt = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction'-------
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instru_key_resp.keys', instru_key_resp.keys);
    if (typeof instru_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instru_key_resp.rt', instru_key_resp.rt);
        routineTimer.reset();
        }
    
    instru_key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: window.trials_data,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(block_instruRoutineBegin(snapshot));
      trialsLoopScheduler.add(block_instruRoutineEachFrame());
      trialsLoopScheduler.add(block_instruRoutineEnd());
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(image1RoutineBegin(snapshot));
      trialsLoopScheduler.add(image1RoutineEachFrame());
      trialsLoopScheduler.add(image1RoutineEnd());
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(confidence_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(confidence_1RoutineEachFrame());
      trialsLoopScheduler.add(confidence_1RoutineEnd());
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(image2RoutineBegin(snapshot));
      trialsLoopScheduler.add(image2RoutineEachFrame());
      trialsLoopScheduler.add(image2RoutineEnd());
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(confidence_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(confidence_2RoutineEachFrame());
      trialsLoopScheduler.add(confidence_2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _block_key_resp_allKeys;
var block_instruComponents;
function block_instruRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'block_instru'-------
    t = 0;
    block_instruClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    block_key_resp.keys = undefined;
    block_key_resp.rt = undefined;
    _block_key_resp_allKeys = [];
    // keep track of which components have finished
    block_instruComponents = [];
    block_instruComponents.push(block_instr_text);
    block_instruComponents.push(block_key_resp);
    
    block_instruComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block_instruRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'block_instru'-------
    // get current time
    t = block_instruClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_instr_text* updates
    if (t >= 0.0 && block_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_instr_text.tStart = t;  // (not accounting for frame time here)
      block_instr_text.frameNStart = frameN;  // exact frame index
      
      block_instr_text.setAutoDraw(true);
    }

    
    // *block_key_resp* updates
    if (t >= 0.0 && block_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_key_resp.tStart = t;  // (not accounting for frame time here)
      block_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block_key_resp.clearEvents(); });
    }

    if (block_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = block_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _block_key_resp_allKeys = _block_key_resp_allKeys.concat(theseKeys);
      if (_block_key_resp_allKeys.length > 0) {
        block_key_resp.keys = _block_key_resp_allKeys[_block_key_resp_allKeys.length - 1].name;  // just the last key pressed
        block_key_resp.rt = _block_key_resp_allKeys[_block_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_instruComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_instruRoutineEnd() {
  return async function () {
    //------Ending Routine 'block_instru'-------
    block_instruComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('block_key_resp.keys', block_key_resp.keys);
    if (typeof block_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block_key_resp.rt', block_key_resp.rt);
        routineTimer.reset();
        }
    
    block_key_resp.stop();
    // the Routine "block_instru" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_text);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation'-------
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_text* updates
    if (t >= 0.0 && fixation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_text.tStart = t;  // (not accounting for frame time here)
      fixation_text.frameNStart = frameN;  // exact frame index
      
      fixation_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation'-------
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var current_img;
var _rating_T1_keys_allKeys;
var image1Components;
function image1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'image1'-------
    t = 0;
    image1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // 根据条件选择对应的图片
    if (thisTrial['condition'] === 1) {
        current_img = thisTrial['high_trust_img'];  // 高可信面孔
    } else {
        current_img = thisTrial['low_trust_img'];  // 低可信面孔
    }
    
    // 记录当前trial的信息，供下个routine使用
    psychoJS.experiment.addData('first_image', current_img);
    psychoJS.experiment.addData('identity', thisTrial['identity']);
    psychoJS.experiment.addData('condition', thisTrial['condition']);
    image_t1.setImage(current_img);
    rating_T1_keys.keys = undefined;
    rating_T1_keys.rt = undefined;
    _rating_T1_keys_allKeys = [];
    // keep track of which components have finished
    image1Components = [];
    image1Components.push(img1_instr);
    image1Components.push(image_t1);
    image1Components.push(rating_T1_keys);
    image1Components.push(slider_image);
    image1Components.push(img1_one);
    image1Components.push(img1_three);
    image1Components.push(img1_five);
    image1Components.push(img1_seven);
    image1Components.push(img1_nine);
    
    image1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function image1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'image1'-------
    // get current time
    t = image1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img1_instr* updates
    if (t >= 0.0 && img1_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_instr.tStart = t;  // (not accounting for frame time here)
      img1_instr.frameNStart = frameN;  // exact frame index
      
      img1_instr.setAutoDraw(true);
    }

    
    // *image_t1* updates
    if (t >= 0.0 && image_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_t1.tStart = t;  // (not accounting for frame time here)
      image_t1.frameNStart = frameN;  // exact frame index
      
      image_t1.setAutoDraw(true);
    }

    
    // *rating_T1_keys* updates
    if (t >= 0.0 && rating_T1_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_T1_keys.tStart = t;  // (not accounting for frame time here)
      rating_T1_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rating_T1_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rating_T1_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rating_T1_keys.clearEvents(); });
    }

    if (rating_T1_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = rating_T1_keys.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _rating_T1_keys_allKeys = _rating_T1_keys_allKeys.concat(theseKeys);
      if (_rating_T1_keys_allKeys.length > 0) {
        rating_T1_keys.keys = _rating_T1_keys_allKeys[_rating_T1_keys_allKeys.length - 1].name;  // just the last key pressed
        rating_T1_keys.rt = _rating_T1_keys_allKeys[_rating_T1_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_image* updates
    if (t >= 0.0 && slider_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_image.tStart = t;  // (not accounting for frame time here)
      slider_image.frameNStart = frameN;  // exact frame index
      
      slider_image.setAutoDraw(true);
    }

    
    // *img1_one* updates
    if (t >= 0.0 && img1_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_one.tStart = t;  // (not accounting for frame time here)
      img1_one.frameNStart = frameN;  // exact frame index
      
      img1_one.setAutoDraw(true);
    }

    
    // *img1_three* updates
    if (t >= 0.0 && img1_three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_three.tStart = t;  // (not accounting for frame time here)
      img1_three.frameNStart = frameN;  // exact frame index
      
      img1_three.setAutoDraw(true);
    }

    
    // *img1_five* updates
    if (t >= 0.0 && img1_five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_five.tStart = t;  // (not accounting for frame time here)
      img1_five.frameNStart = frameN;  // exact frame index
      
      img1_five.setAutoDraw(true);
    }

    
    // *img1_seven* updates
    if (t >= 0.0 && img1_seven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_seven.tStart = t;  // (not accounting for frame time here)
      img1_seven.frameNStart = frameN;  // exact frame index
      
      img1_seven.setAutoDraw(true);
    }

    
    // *img1_nine* updates
    if (t >= 0.0 && img1_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_nine.tStart = t;  // (not accounting for frame time here)
      img1_nine.frameNStart = frameN;  // exact frame index
      
      img1_nine.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    image1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var t1_rating;
function image1RoutineEnd() {
  return async function () {
    //------Ending Routine 'image1'-------
    image1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // 将按键转换为数字评分
    var t1_rating = null;
    if (rating_T1_keys.keys && rating_T1_keys.keys.length > 0) {
        // 获取最后一次按键
        var lastKey = rating_T1_keys.keys[rating_T1_keys.keys.length - 1];
        t1_rating = parseInt(lastKey);
    } else {
        t1_rating = null;
    }
    
    // 保存评分到全局字典
    window.T1_ratings[String(thisTrial['identity'])] = t1_rating;
    
    // 保存评分到数据文件
    psychoJS.experiment.addData('rating_T1', t1_rating);
    psychoJS.experiment.addData('rating_T1_keys.keys', rating_T1_keys.keys);
    if (typeof rating_T1_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rating_T1_keys.rt', rating_T1_keys.rt);
        routineTimer.reset();
        }
    
    rating_T1_keys.stop();
    // the Routine "image1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _confidence_T1_keys_allKeys;
var confidence_1Components;
function confidence_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'confidence_1'-------
    t = 0;
    confidence_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    confidence_T1_keys.keys = undefined;
    confidence_T1_keys.rt = undefined;
    _confidence_T1_keys_allKeys = [];
    // keep track of which components have finished
    confidence_1Components = [];
    confidence_1Components.push(confidence_T1_text);
    confidence_1Components.push(confidence_T1_keys);
    confidence_1Components.push(slider_confidence_t1);
    confidence_1Components.push(con1_one);
    confidence_1Components.push(con1_three);
    confidence_1Components.push(con1_five);
    confidence_1Components.push(con1_seven);
    confidence_1Components.push(con1_nine);
    
    confidence_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function confidence_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'confidence_1'-------
    // get current time
    t = confidence_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *confidence_T1_text* updates
    if (t >= 0.0 && confidence_T1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_T1_text.tStart = t;  // (not accounting for frame time here)
      confidence_T1_text.frameNStart = frameN;  // exact frame index
      
      confidence_T1_text.setAutoDraw(true);
    }

    
    // *confidence_T1_keys* updates
    if (t >= 0.0 && confidence_T1_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_T1_keys.tStart = t;  // (not accounting for frame time here)
      confidence_T1_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { confidence_T1_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { confidence_T1_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { confidence_T1_keys.clearEvents(); });
    }

    if (confidence_T1_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = confidence_T1_keys.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _confidence_T1_keys_allKeys = _confidence_T1_keys_allKeys.concat(theseKeys);
      if (_confidence_T1_keys_allKeys.length > 0) {
        confidence_T1_keys.keys = _confidence_T1_keys_allKeys[_confidence_T1_keys_allKeys.length - 1].name;  // just the last key pressed
        confidence_T1_keys.rt = _confidence_T1_keys_allKeys[_confidence_T1_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_confidence_t1* updates
    if (t >= 0.0 && slider_confidence_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_confidence_t1.tStart = t;  // (not accounting for frame time here)
      slider_confidence_t1.frameNStart = frameN;  // exact frame index
      
      slider_confidence_t1.setAutoDraw(true);
    }

    
    // *con1_one* updates
    if (t >= 0.0 && con1_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con1_one.tStart = t;  // (not accounting for frame time here)
      con1_one.frameNStart = frameN;  // exact frame index
      
      con1_one.setAutoDraw(true);
    }

    
    // *con1_three* updates
    if (t >= 0.0 && con1_three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con1_three.tStart = t;  // (not accounting for frame time here)
      con1_three.frameNStart = frameN;  // exact frame index
      
      con1_three.setAutoDraw(true);
    }

    
    // *con1_five* updates
    if (t >= 0.0 && con1_five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con1_five.tStart = t;  // (not accounting for frame time here)
      con1_five.frameNStart = frameN;  // exact frame index
      
      con1_five.setAutoDraw(true);
    }

    
    // *con1_seven* updates
    if (t >= 0.0 && con1_seven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con1_seven.tStart = t;  // (not accounting for frame time here)
      con1_seven.frameNStart = frameN;  // exact frame index
      
      con1_seven.setAutoDraw(true);
    }

    
    // *con1_nine* updates
    if (t >= 0.0 && con1_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con1_nine.tStart = t;  // (not accounting for frame time here)
      con1_nine.frameNStart = frameN;  // exact frame index
      
      con1_nine.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    confidence_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var conf_rating;
var T1_confidence;
function confidence_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'confidence_1'-------
    confidence_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('confidence_T1_keys.keys', confidence_T1_keys.keys);
    if (typeof confidence_T1_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('confidence_T1_keys.rt', confidence_T1_keys.rt);
        routineTimer.reset();
        }
    
    confidence_T1_keys.stop();
    // 处理置信度评分的按键响应
    var conf_rating = null;
    
    if (confidence_T1_keys.keys) {
        if (Array.isArray(confidence_T1_keys.keys)) {
            // 如果keys是数组，取最后一次按键
            if (confidence_T1_keys.keys.length > 0) {
                var lastKey = confidence_T1_keys.keys[confidence_T1_keys.keys.length - 1];
                conf_rating = parseInt(lastKey);
            }
        } else {
            // 如果keys是单个值
            conf_rating = parseInt(confidence_T1_keys.keys);
        }
    }
    
    // 初始化全局字典（如果尚未初始化）
    if (typeof T1_confidence === 'undefined') {
        T1_confidence = {};
    }
    
    // 保存确定性评分到全局字典
    window.T1_confidence[String(thisTrial['identity'])] = conf_rating;
    
    // 保存确定性评分到数据文件
    psychoJS.experiment.addData('confidence_T1', conf_rating);
    // the Routine "confidence_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _rating_T2_keys_allKeys;
var image2Components;
function image2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'image2'-------
    t = 0;
    image2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // 根据条件决定显示哪张图片
    if (thisTrial['condition'] === 1) {
        current_img = thisTrial['low_trust_img'];  // 低可信面孔
    } else {
        current_img = thisTrial['high_trust_img'];  // 高可信面孔
    }
        
    // 记录当前trial的第二张图片
    psychoJS.experiment.addData('second_image', current_img);
    image_t2.setImage(current_img);
    rating_T2_keys.keys = undefined;
    rating_T2_keys.rt = undefined;
    _rating_T2_keys_allKeys = [];
    // keep track of which components have finished
    image2Components = [];
    image2Components.push(img2_instr);
    image2Components.push(image_t2);
    image2Components.push(rating_T2_keys);
    image2Components.push(slider_image_t2);
    image2Components.push(img2_one);
    image2Components.push(img2_three);
    image2Components.push(img2_five);
    image2Components.push(img2_seven);
    image2Components.push(img2_nine);
    
    image2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function image2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'image2'-------
    // get current time
    t = image2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img2_instr* updates
    if (t >= 0.0 && img2_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_instr.tStart = t;  // (not accounting for frame time here)
      img2_instr.frameNStart = frameN;  // exact frame index
      
      img2_instr.setAutoDraw(true);
    }

    
    // *image_t2* updates
    if (t >= 0.0 && image_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_t2.tStart = t;  // (not accounting for frame time here)
      image_t2.frameNStart = frameN;  // exact frame index
      
      image_t2.setAutoDraw(true);
    }

    
    // *rating_T2_keys* updates
    if (t >= 0.0 && rating_T2_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_T2_keys.tStart = t;  // (not accounting for frame time here)
      rating_T2_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rating_T2_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rating_T2_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rating_T2_keys.clearEvents(); });
    }

    if (rating_T2_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = rating_T2_keys.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _rating_T2_keys_allKeys = _rating_T2_keys_allKeys.concat(theseKeys);
      if (_rating_T2_keys_allKeys.length > 0) {
        rating_T2_keys.keys = _rating_T2_keys_allKeys[_rating_T2_keys_allKeys.length - 1].name;  // just the last key pressed
        rating_T2_keys.rt = _rating_T2_keys_allKeys[_rating_T2_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_image_t2* updates
    if (t >= 0.0 && slider_image_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_image_t2.tStart = t;  // (not accounting for frame time here)
      slider_image_t2.frameNStart = frameN;  // exact frame index
      
      slider_image_t2.setAutoDraw(true);
    }

    
    // *img2_one* updates
    if (t >= 0.0 && img2_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_one.tStart = t;  // (not accounting for frame time here)
      img2_one.frameNStart = frameN;  // exact frame index
      
      img2_one.setAutoDraw(true);
    }

    
    // *img2_three* updates
    if (t >= 0.0 && img2_three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_three.tStart = t;  // (not accounting for frame time here)
      img2_three.frameNStart = frameN;  // exact frame index
      
      img2_three.setAutoDraw(true);
    }

    
    // *img2_five* updates
    if (t >= 0.0 && img2_five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_five.tStart = t;  // (not accounting for frame time here)
      img2_five.frameNStart = frameN;  // exact frame index
      
      img2_five.setAutoDraw(true);
    }

    
    // *img2_seven* updates
    if (t >= 0.0 && img2_seven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_seven.tStart = t;  // (not accounting for frame time here)
      img2_seven.frameNStart = frameN;  // exact frame index
      
      img2_seven.setAutoDraw(true);
    }

    
    // *img2_nine* updates
    if (t >= 0.0 && img2_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_nine.tStart = t;  // (not accounting for frame time here)
      img2_nine.frameNStart = frameN;  // exact frame index
      
      img2_nine.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    image2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var t2_rating;
var rating_change;
function image2RoutineEnd() {
  return async function () {
    //------Ending Routine 'image2'-------
    image2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // End Routine
    
    // 获取T1的评分（从全局字典中）
    var t1_rating = null;
    if (typeof T1_ratings !== 'undefined' && T1_ratings[String(thisTrial['identity'])]) {
        t1_rating = T1_ratings[String(thisTrial['identity'])];
    }
    
    // 获取T2评分
    var t2_rating = null;
    if (rating_T2_keys && rating_T2_keys.keys) {
        if (Array.isArray(rating_T2_keys.keys)) {
            // 如果keys是数组，取最后一次按键
            if (rating_T2_keys.keys.length > 0) {
                var lastKey = rating_T2_keys.keys[rating_T2_keys.keys.length - 1];
                t2_rating = parseInt(lastKey);
            }
        } else {
            // 如果keys是单个值
            t2_rating = parseInt(rating_T2_keys.keys);
        }
    }
    
    // 计算评分变化（需要防止null值）
    var rating_change = null;
    if (t1_rating !== null && t2_rating !== null) {
        rating_change = t2_rating - t1_rating;
    }
    
    // 保存数据到实验文件
    psychoJS.experiment.addData('rating_T2', t2_rating);
    psychoJS.experiment.addData('rating_change', rating_change);
    
    // 记录反应时间（可选）
    if (rating_T2_keys && rating_T2_keys.rt) {
        var t2_rt = Array.isArray(rating_T2_keys.rt) ? 
                    rating_T2_keys.rt[rating_T2_keys.rt.length - 1] : 
                    rating_T2_keys.rt;
        psychoJS.experiment.addData('rating_T2_rt', t2_rt);
    }
    psychoJS.experiment.addData('rating_T2_keys.keys', rating_T2_keys.keys);
    if (typeof rating_T2_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rating_T2_keys.rt', rating_T2_keys.rt);
        routineTimer.reset();
        }
    
    rating_T2_keys.stop();
    // the Routine "image2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _confidence_T2_keys_allKeys;
var confidence_2Components;
function confidence_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'confidence_2'-------
    t = 0;
    confidence_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    confidence_T2_keys.keys = undefined;
    confidence_T2_keys.rt = undefined;
    _confidence_T2_keys_allKeys = [];
    // keep track of which components have finished
    confidence_2Components = [];
    confidence_2Components.push(confidence2_text);
    confidence_2Components.push(confidence_T2_keys);
    confidence_2Components.push(slider_confidence_t2);
    confidence_2Components.push(con2_one);
    confidence_2Components.push(con2_three);
    confidence_2Components.push(con2_five);
    confidence_2Components.push(con2_seven);
    confidence_2Components.push(con2_nine);
    
    confidence_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function confidence_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'confidence_2'-------
    // get current time
    t = confidence_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *confidence2_text* updates
    if (t >= 0.0 && confidence2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence2_text.tStart = t;  // (not accounting for frame time here)
      confidence2_text.frameNStart = frameN;  // exact frame index
      
      confidence2_text.setAutoDraw(true);
    }

    
    // *confidence_T2_keys* updates
    if (t >= 0.0 && confidence_T2_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_T2_keys.tStart = t;  // (not accounting for frame time here)
      confidence_T2_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { confidence_T2_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { confidence_T2_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { confidence_T2_keys.clearEvents(); });
    }

    if (confidence_T2_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = confidence_T2_keys.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _confidence_T2_keys_allKeys = _confidence_T2_keys_allKeys.concat(theseKeys);
      if (_confidence_T2_keys_allKeys.length > 0) {
        confidence_T2_keys.keys = _confidence_T2_keys_allKeys[_confidence_T2_keys_allKeys.length - 1].name;  // just the last key pressed
        confidence_T2_keys.rt = _confidence_T2_keys_allKeys[_confidence_T2_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_confidence_t2* updates
    if (t >= 0.0 && slider_confidence_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_confidence_t2.tStart = t;  // (not accounting for frame time here)
      slider_confidence_t2.frameNStart = frameN;  // exact frame index
      
      slider_confidence_t2.setAutoDraw(true);
    }

    
    // *con2_one* updates
    if (t >= 0.0 && con2_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con2_one.tStart = t;  // (not accounting for frame time here)
      con2_one.frameNStart = frameN;  // exact frame index
      
      con2_one.setAutoDraw(true);
    }

    
    // *con2_three* updates
    if (t >= 0.0 && con2_three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con2_three.tStart = t;  // (not accounting for frame time here)
      con2_three.frameNStart = frameN;  // exact frame index
      
      con2_three.setAutoDraw(true);
    }

    
    // *con2_five* updates
    if (t >= 0.0 && con2_five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con2_five.tStart = t;  // (not accounting for frame time here)
      con2_five.frameNStart = frameN;  // exact frame index
      
      con2_five.setAutoDraw(true);
    }

    
    // *con2_seven* updates
    if (t >= 0.0 && con2_seven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con2_seven.tStart = t;  // (not accounting for frame time here)
      con2_seven.frameNStart = frameN;  // exact frame index
      
      con2_seven.setAutoDraw(true);
    }

    
    // *con2_nine* updates
    if (t >= 0.0 && con2_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      con2_nine.tStart = t;  // (not accounting for frame time here)
      con2_nine.frameNStart = frameN;  // exact frame index
      
      con2_nine.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    confidence_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var t1_conf;
var conf_change;
function confidence_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'confidence_2'-------
    confidence_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('confidence_T2_keys.keys', confidence_T2_keys.keys);
    if (typeof confidence_T2_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('confidence_T2_keys.rt', confidence_T2_keys.rt);
        routineTimer.reset();
        }
    
    confidence_T2_keys.stop();
    // 处理第二次置信度评分
    
    // 获取T2置信度评分
    var conf_rating = null;
    if (confidence_T2_keys && confidence_T2_keys.keys) {
        if (Array.isArray(confidence_T2_keys.keys)) {
            // 如果keys是数组，取最后一次按键
            if (confidence_T2_keys.keys.length > 0) {
                var lastKey = confidence_T2_keys.keys[confidence_T2_keys.keys.length - 1];
                conf_rating = parseInt(lastKey);
            }
        } else {
            // 如果keys是单个值
            conf_rating = parseInt(confidence_T2_keys.keys);
        }
    }
    
    // 获取T1评分的确定性（JavaScript中没有.get()方法，需要手动检查）
    var t1_conf = null;
    var identity_key = String(thisTrial['identity']);
    if (typeof T1_confidence !== 'undefined' && T1_confidence.hasOwnProperty(identity_key)) {
        t1_conf = T1_confidence[identity_key];
    }
    
    // 计算确定性变化
    var conf_change = null;
    if (t1_conf !== null && conf_rating !== null) {
        conf_change = conf_rating - t1_conf;
    }
    
    // 保存数据到实验文件
    psychoJS.experiment.addData('confidence_T2', conf_rating);
    psychoJS.experiment.addData('confidence_change', conf_change);
    // the Routine "confidence_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_key_resp.keys = undefined;
    end_key_resp.rt = undefined;
    _end_key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_key_resp);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_key_resp* updates
    if (t >= 0.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key_resp.tStart = t;  // (not accounting for frame time here)
      end_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.clearEvents(); });
    }

    if (end_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
      if (_end_key_resp_allKeys.length > 0) {
        end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
        end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_key_resp.keys', end_key_resp.keys);
    if (typeof end_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key_resp.rt', end_key_resp.rt);
        routineTimer.reset();
        }
    
    end_key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
