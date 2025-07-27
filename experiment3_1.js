/********************** 
 * Experiment3_1 Test *
 **********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'experiment3_1';  // from the Builder filename that created this script
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
    {'name': 'all_faces.xlsx', 'path': 'all_faces.xlsx'},
    {'name': 'slider.jpg', 'path': 'slider.jpg'},
    {'name': 'blank.png', 'path': 'blank.png'}
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
var instru_key_resp;
var fixationClock;
var fixation_text;
var image1Clock;
var image_t1;
var rating_T1_keys;
var slider_image;
var confidence_1Clock;
var confidence_T1_text;
var confidence_T1_keys;
var slider_confidence_t1;
var image2Clock;
var image_t2;
var rating_T2_keys;
var slider_image_t2;
var confidence_2Clock;
var confidence2_text;
var confidence_T2_keys;
var slider_confidence_t2;
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
    text: 'Any text\n\nincluding line breaks',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // 定义当前图像变量
  let current_img = "blank.png";
  
  // 异步函数加载 Excel 文件
  async function loadExcelFile() {
      try {
          // 在 PsychoJS 中，Excel 文件会被预先转换为 JSON
          // 所以我们直接请求 JSON 文件
          // 注意：Pavlovia 会自动将您的 Excel 文件转换为 JSON
          const response = await fetch('all_faces.xlsx.json');
          const json_data = await response.json();
          
          // 处理数据
          processData(json_data);
      } catch (error) {
          console.error("加载数据失败:", error);
      }
  }
  
  // 处理数据的函数
  function processData(faces_data) {
      // 从数据中提取所有人物 ID 列表
      const all_persons = faces_data.map(row => row.identity);
      
      // 随机打乱人物顺序
      shuffleArray(all_persons);
      
      // 将一半人物分配给顺序1(高→低)，一半分配给顺序2(低→高)
      const half = Math.ceil(all_persons.length / 2);
      const condition1_persons = all_persons.slice(0, 3);  // 前N个人物分配到条件1
      const condition2_persons = all_persons.slice(3);     // 后N个人物分配到条件2
      
      // 创建一个新的数组，包含人物ID和对应的条件
      let trials_data = [];
      
      // 添加条件1的人物(高→低)
      for (let i = 0; i < condition1_persons.length; i++) {
          const person = condition1_persons[i];
          const person_data = faces_data.find(row => row.identity === person);
          if (person_data) {
              const trial_data = {...person_data};  // 创建副本
              trial_data.condition = 1;
              trials_data.push(trial_data);
          }
      }
      
      // 添加条件2的人物(低→高)
      for (let i = 0; i < condition2_persons.length; i++) {
          const person = condition2_persons[i];
          const person_data = faces_data.find(row => row.identity === person);
          if (person_data) {
              const trial_data = {...person_data};  // 创建副本
              trial_data.condition = 2;
              trials_data.push(trial_data);
          }
      }
      
      // 再次随机化试次顺序
      shuffleArray(trials_data);
      
      // 在 PsychoJS 中，我们不需要保存临时文件
      // 相反，我们直接将试次数据存储在全局变量中
      psychoJS.experiment.addData('trials_data', JSON.stringify(trials_data));
      
      // 创建一个 Loop 对象
      createLoop(trials_data);
  }
  
  // 随机打乱数组的辅助函数
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  // 创建试验循环
  function createLoop(trials_data) {
      // 在 PsychoJS 中，我们使用 TrialHandler 对象创建循环
      // 这部分在 PsychoJS 中已经自动处理，如果您使用 PsychoPy Builder
      // 但如果您需要手动处理，可以使用下面的代码
      
      // 将试次数据存储在 psychoJS 对象中，以便后续使用
      psychoJS.experiment.addData('trials_list', trials_data);
      
      // 创建全局字典存储 T1 评分，以便在 T2 使用
      window.T1_ratings = {};
  }
  
  // 在实验开始时执行
  function initExperiment() {
      // 获取参与者信息
      const expInfo = psychoJS.experiment.extraInfo;
      
      // 加载数据
      loadExcelFile();
  }
  
  // 当文档加载完成时初始化实验
  document.addEventListener('DOMContentLoaded', initExperiment);
  instru_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  image_t1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_t1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  rating_T1_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_image', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "confidence_1"
  confidence_1Clock = new util.Clock();
  confidence_T1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_T1_text',
    text: '您对刚才的可信度评分有多确定？',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
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
  // Initialize components for Routine "image2"
  image2Clock = new util.Clock();
  image_t2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_t2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  rating_T2_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_image_t2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_image_t2', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.37)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "confidence_2"
  confidence_2Clock = new util.Clock();
  confidence2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence2_text',
    text: '您对刚才的可信度评分有多确定？',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
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
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '感谢您参与本次研究！请按空格键退出。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
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
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
      trialList: psychoJS.experiment.extraInfo["trials_file"],
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(image1RoutineBegin(snapshot));
      trialsLoopScheduler.add(image1RoutineEachFrame());
      trialsLoopScheduler.add(image1RoutineEnd());
      trialsLoopScheduler.add(confidence_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(confidence_1RoutineEachFrame());
      trialsLoopScheduler.add(confidence_1RoutineEnd());
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(image2RoutineBegin(snapshot));
      trialsLoopScheduler.add(image2RoutineEachFrame());
      trialsLoopScheduler.add(image2RoutineEnd());
      trialsLoopScheduler.add(confidence_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(confidence_2RoutineEachFrame());
      trialsLoopScheduler.add(confidence_2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
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
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    // 检查 thisTrial 是否存在并包含所需属性
    if (thisTrial && 'condition' in thisTrial) {
        if (thisTrial.condition === 1) {
            current_img = thisTrial.high_trust_img;  // 高可信面孔
        } else {
            current_img = thisTrial.low_trust_img;  // 低可信面孔
        }
        
        // 记录当前trial的信息
        psychoJS.experiment.addData('first_image', current_img);
        psychoJS.experiment.addData('identity', thisTrial.identity);
        psychoJS.experiment.addData('condition', thisTrial.condition);
    } else {
        console.error('thisTrial 未定义或缺少必要属性');
        // 设置一个默认图像
        current_img = 'blank.png';
    }
    image_t1.setImage(current_img);
    rating_T1_keys.keys = undefined;
    rating_T1_keys.rt = undefined;
    _rating_T1_keys_allKeys = [];
    // keep track of which components have finished
    image1Components = [];
    image1Components.push(image_t1);
    image1Components.push(rating_T1_keys);
    image1Components.push(slider_image);
    
    for (const thisComponent of image1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of image1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of image1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    let t1_rating = null;
    if (rating_T1_keys.keys && rating_T1_keys.keys.length > 0) {
        // 在JavaScript中将字符串转换为整数
        t1_rating = parseInt(rating_T1_keys.keys);
        
        // 如果按键是数组，获取最后一个按键
        if (Array.isArray(rating_T1_keys.keys)) {
            t1_rating = parseInt(rating_T1_keys.keys[rating_T1_keys.keys.length - 1]);
        }
    }
    
    // 保存评分到全局字典
    // 确保T1_ratings已经在Begin Experiment中初始化为空对象
    if (typeof window.T1_ratings === 'undefined') {
        window.T1_ratings = {};
    }
    window.T1_ratings[thisTrial['identity'].toString()] = t1_rating;
    
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
    
    for (const thisComponent of confidence_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of confidence_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var conf_rating;
function confidence_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'confidence_1'-------
    for (const thisComponent of confidence_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('confidence_T1_keys.keys', confidence_T1_keys.keys);
    if (typeof confidence_T1_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('confidence_T1_keys.rt', confidence_T1_keys.rt);
        routineTimer.reset();
        }
    
    confidence_T1_keys.stop();
    if (confidence_T1_keys.keys) {
        conf_rating = Number.parseInt(confidence_T1_keys.keys);
    } else {
        conf_rating = null;
    }
    T1_confidence[thisTrial["identity"].toString()] = conf_rating;
    psychoJS.experiment.addData("confidence_T1", conf_rating);
    
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
    image2Components.push(image_t2);
    image2Components.push(rating_T2_keys);
    image2Components.push(slider_image_t2);
    
    for (const thisComponent of image2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of image2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of image2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // End Routine 代码 (rating_t2)
    // 获取T1的评分
    let t1_rating = null;
    // 确保T1_ratings已定义并包含当前identity
    if (typeof window.T1_ratings !== 'undefined' && window.T1_ratings[thisTrial['identity'].toString()] !== undefined) {
        t1_rating = window.T1_ratings[thisTrial['identity'].toString()];
    }
    
    // 获取T2评分
    let t2_rating = null;
    if (rating_T2_keys.keys && rating_T2_keys.keys.length > 0) {
        // 转换为整数
        t2_rating = parseInt(rating_T2_keys.keys);
        
        // 如果按键是数组，获取最后一个按键
        if (Array.isArray(rating_T2_keys.keys)) {
            t2_rating = parseInt(rating_T2_keys.keys[rating_T2_keys.keys.length - 1]);
        }
    }
    
    // 计算评分变化（需要防止null值）
    let rating_change = null;
    if (t1_rating !== null && t2_rating !== null) {
        rating_change = t2_rating - t1_rating;
    }
    
    // 保存数据
    psychoJS.experiment.addData('rating_T2', t2_rating);
    psychoJS.experiment.addData('rating_change', rating_change);
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
    
    for (const thisComponent of confidence_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of confidence_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of confidence_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('confidence_T2_keys.keys', confidence_T2_keys.keys);
    if (typeof confidence_T2_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('confidence_T2_keys.rt', confidence_T2_keys.rt);
        routineTimer.reset();
        }
    
    confidence_T2_keys.stop();
    if (confidence_T2_keys.keys) {
        conf_rating = Number.parseInt(confidence_T2_keys.keys);
    } else {
        conf_rating = null;
    }
    t1_conf = T1_confidence.get(thisTrial["identity"].toString(), null);
    if (((t1_conf !== null) && (conf_rating !== null))) {
        conf_change = (conf_rating - t1_conf);
    } else {
        conf_change = null;
    }
    psychoJS.experiment.addData("confidence_T2", conf_rating);
    psychoJS.experiment.addData("confidence_change", conf_change);
    
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
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
