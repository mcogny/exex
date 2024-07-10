/************** 
 * Tower Test *
 **************/


// store info about the experiment session:
let expName = 'tower';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
psychoJS.start({
    expName,
    expInfo,
    resources: [
        //relative path to index.html
        {name: 'resources/instr01.png', path: 'resources/resources/instr01.png'},
        {name: 'resources/instr02.png', path: 'resources/resources/instr02.png'},
        {name: 'resources/instr03.png', path: 'resources/resources/instr03.png'},
        {name: 'resources/instr04.png', path: 'resources/resources/instr04.png'},
        {name: 'resources/instr05.png', path: 'resources/resources/instr05.png'},
        {name: 'resources/instr06.png', path: 'resources/resources/instr06.png'},
        {name: 'resources/instr07.png', path: 'resources/resources/instr07.png'},
        {name: 'resources/instr08.png', path: 'resources/resources/instr08.png'},
        {name: 'resources/instr09.png', path: 'resources/resources/instr09.png'},
        {name: 'resources/instr10.png', path: 'resources/resources/instr10.png'},
        {name: 'resources/instr11.png', path: 'resources/resources/instr11.png'},
        {name: 'resources/instr12.png', path: 'resources/resources/instr12.png'},
        {name: 'resources/instr13.png', path: 'resources/resources/instr13.png'},
        {name: 'resources/instr14.png', path: 'resources/resources/instr14.png'},
        {name: 'resources/instr15.png', path: 'resources/resources/instr15.png'},
        {name: 'resources/instr16.png', path: 'resources/resources/instr16.png'},
        {name: 'resources/instr17.png', path: 'resources/resources/instr17.png'},
        {name: 'resources/instr18.png', path: 'resources/resources/instr18.png'},
        {name: 'resources/instr_practice_m.png', path: 'resources/resources/instr_practice_m.png'},
        {name: 'resources/goal_3disk.png', path: 'resources/resources/goal_3disk.png'},
        {name: 'resources/goal_4disk.png', path: 'resources/resources/goal_4disk.png'},
        {name: 'resources/goal_5disk.png', path: 'resources/resources/goal_5disk.png'},
        {name: 'resources/instr_trial_01a.png', path: 'resources/resources/instr_trial_01a.png'},
        {name: 'resources/instr_trial_01b.png', path: 'resources/resources/instr_trial_01b.png'},
        {name: 'resources/instr_trial_01c.png', path: 'resources/resources/instr_trial_01c.png'},
        {name: 'resources/instr_trial_m.png', path: 'resources/resources/instr_trial_m.png'},
        {name: 'resources/instr_trial_c.png', path: 'resources/resources/instr_trial_c.png'},
        {name: 'resources/final_screen.png', path: 'resources/resources/final_screen.png'},
        {name: 'resources/imgJ.png', path: 'resources/resources/imgJ.png'},
        {name: 'resources/imgK.png', path: 'resources/resources/imgK.png'},
        {name: 'resources/imgL.png', path: 'resources/resources/imgL.png'},
        {name: 'resources/disk1.png', path: 'resources/resources/disk1.png'},
        {name: 'resources/disk2.png', path: 'resources/resources/disk2.png'},
        {name: 'resources/disk3.png', path: 'resources/resources/disk3.png'},
        {name: 'resources/disk4.png', path: 'resources/resources/disk4.png'},
        {name: 'resources/disk5.png', path: 'resources/resources/disk5.png'},
        {name: 'resources/instruction_images.xlsx', path: 'resources/resources/instruction_images.xlsx'},
        {name: 'resources/trial_conditions.xlsx', path: 'resources/resources/trial_conditions.xlsx'},
        {name: 'resources/trial_instr_images.xlsx', path: 'resources/resources/trial_instr_images.xlsx'},
        {name: 'resources/trial_loop.xlsx', path: 'resources/resources/trial_loop.xlsx'},
    ]
});


function get_stack_list(stack_letter) {
    if ((stack_letter === "j")) {
        return j_disks;
    } else {
        if ((stack_letter === "k")) {
            return k_disks;
        } else {
            if ((stack_letter === "l")) {
                return l_disks;
            }
        }
    }
}

function get_disk_stack_list(disk_number) {
    if (((j_disks.length > 0) && (j_disks.slice((- 1))[0] === Number.parseInt(disk_number)))) {
        return j_disks;
    } else {
        if (((k_disks.length > 0) && (k_disks.slice((- 1))[0] === Number.parseInt(disk_number)))) {
            return k_disks;
        } else {
            if (((l_disks.length > 0) && (l_disks.slice((- 1))[0] === Number.parseInt(disk_number)))) {
                return l_disks;
            }
        }
    }
}

var top_disks;
function get_top_disks() {
    var top_disks;
    top_disks = [];
    if ((j_disks.length > 0)) {
        top_disks.push(j_disks.slice((- 1))[0]);
    } else {
        top_disks.push(0);
    }
    if ((k_disks.length > 0)) {
        top_disks.push(k_disks.slice((- 1))[0]);
    } else {
        top_disks.push(0);
    }
    if ((l_disks.length > 0)) {
        top_disks.push(l_disks.slice((- 1))[0]);
    } else {
        top_disks.push(0);
    }
    return top_disks;
}


function show_display() {
    towerJ.opacity = 1;
    towerK.opacity = 1;
    towerL.opacity = 1;
    disk1.opacity = 1;
    disk2.opacity = 1;
    disk3.opacity = 1;
    disk4.opacity = 1;
    disk5.opacity = 1;
    goal_image.opacity = 0;
}

function show_countdown() {
    countdown_text.opacity = 1;    
}

function hide_display() {
    towerJ.opacity = 0;
    towerK.opacity = 0;
    towerL.opacity = 0;
    disk1.opacity = 0;
    disk2.opacity = 0;
    disk3.opacity = 0;
    disk4.opacity = 0;
    disk5.opacity = 0;
    goal_image.opacity = 1;
}


function hide_countdown() {
    countdown_text.opacity = 0;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
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
const instructionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructionsLoopBegin(instructionsLoopScheduler));
flowScheduler.add(instructionsLoopScheduler);
flowScheduler.add(instructionsLoopEnd);
flowScheduler.add(task_setupRoutineBegin());
flowScheduler.add(task_setupRoutineEachFrame());
flowScheduler.add(task_setupRoutineEnd());
flowScheduler.add(practice_c_setupRoutineBegin());
flowScheduler.add(practice_c_setupRoutineEachFrame());
flowScheduler.add(practice_c_setupRoutineEnd());
flowScheduler.add(trial_setupRoutineBegin());
flowScheduler.add(trial_setupRoutineEachFrame());
flowScheduler.add(trial_setupRoutineEnd());
const practice_cLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_cLoopBegin(practice_cLoopScheduler));
flowScheduler.add(practice_cLoopScheduler);
flowScheduler.add(practice_cLoopEnd);
flowScheduler.add(instr_practice_mRoutineBegin());
flowScheduler.add(instr_practice_mRoutineEachFrame());
flowScheduler.add(instr_practice_mRoutineEnd());
flowScheduler.add(practice_m_setupRoutineBegin());
flowScheduler.add(practice_m_setupRoutineEachFrame());
flowScheduler.add(practice_m_setupRoutineEnd());
flowScheduler.add(trial_setupRoutineBegin());
flowScheduler.add(trial_setupRoutineEachFrame());
flowScheduler.add(trial_setupRoutineEnd());
const practice_mLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_mLoopBegin(practice_mLoopScheduler));
flowScheduler.add(practice_mLoopScheduler);
flowScheduler.add(practice_mLoopEnd);
const instr_trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_trials_loopLoopBegin(instr_trials_loopLoopScheduler));
flowScheduler.add(instr_trials_loopLoopScheduler);
flowScheduler.add(instr_trials_loopLoopEnd);
const trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler));
flowScheduler.add(trials_loopLoopScheduler);
flowScheduler.add(trials_loopLoopEnd);
flowScheduler.add(final_screenRoutineBegin());
flowScheduler.add(final_screenRoutineEachFrame());
flowScheduler.add(final_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
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
  psychoJS.setRedirectUrls('https://umich.qualtrics.com/jfe/form/SV_a9rQXFntpg91Qgu', '');

  return Scheduler.Event.NEXT;
}


var instr01Clock;
var bkgd_01;
var img_instr_01;
var key_resp_instr_01;
var task_setupClock;
var x_coords;
var y_coords;
var disk_size;
var show_error;
var error_text;
var disk_pos;
var disk_count;
var j_disks;
var k_disks;
var l_disks;
var input1;
var input2;
var practice_c_setupClock;
var trial_setupClock;
var trialClock;
var polygon;
var goal_image;
var towerJ;
var towerK;
var towerL;
var disk1;
var disk2;
var disk3;
var disk4;
var disk5;
var disks;
var display_timer;
var trial_timer;
var key_resp_1;
var error_text_stim;
var countdown_text;
var instr_practice_mClock;
var instr_pract_m_bkgd;
var instr_pract_m;
var key_resp_pract_m;
var practice_m_setupClock;
var instr_trialsClock;
var bkgd_trials_01;
var image;
var key_resp;
var get_trial_varsClock;
var instr_trialClock;
var bkgd_trial_instr;
var img_trial_instr;
var key_end_trial_instr;
var final_screenClock;
var final_bkgd;
var final_screen_image;
var key_final;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr01"
  instr01Clock = new util.Clock();
  bkgd_01 = new visual.Rect ({
    win: psychoJS.window, name: 'bkgd_01', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  img_instr_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_instr_01', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.45, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -1.0 
  });
  key_resp_instr_01 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_setup"
  task_setupClock = new util.Clock();
  x_coords = {"j": (- 0.45), "k": 0, "l": 0.45};
  y_coords = [(- 0.308), (- 0.258), (- 0.208), (- 0.158), (- 0.108)];
  disk_size = [0.35, 0.05];
  show_error = false;
  error_text = "";
  disk_pos = [[(- 0.45), (- 0.308)], [(- 0.45), (- 0.258)], [(- 0.45), (- 0.208)], [(- 0.45), (- 0.158)], [(- 0.45), (- 0.108)]];
  disk_count = 3;
  j_disks = function () {
      var _pj_a = [], _pj_b = util.range(1, (disk_count + 1));
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var x = _pj_b[_pj_c];
          _pj_a.push(x);
      }
      return _pj_a;
  }
  .call(this);
  k_disks = [];
  l_disks = [];
  input1 = "";
  input2 = "";
  
  // Initialize components for Routine "practice_c_setup"
  practice_c_setupClock = new util.Clock();
  // Initialize components for Routine "trial_setup"
  trial_setupClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  goal_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'goal_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.45, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -1.0 
  });
  towerJ = new visual.ImageStim({
    win : psychoJS.window,
    name : 'towerJ', units : undefined, 
    image : 'resources/imgJ.png', mask : undefined,
    ori : 0.0, pos : [(- 0.45), 0], size : [0.3, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -2.0 
  });
  towerK = new visual.ImageStim({
    win : psychoJS.window,
    name : 'towerK', units : undefined, 
    image : 'resources/imgK.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -3.0 
  });
  towerL = new visual.ImageStim({
    win : psychoJS.window,
    name : 'towerL', units : undefined, 
    image : 'resources/imgL.png', mask : undefined,
    ori : 0.0, pos : [0.45, 0], size : [0.3, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -4.0 
  });
  disk1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'disk1', units : undefined, 
    image : 'resources/disk1.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  disk2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'disk2', units : undefined, 
    image : 'resources/disk2.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -6.0 
  });
  disk3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'disk3', units : undefined, 
    image : 'resources/disk3.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -7.0 
  });
  disk4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'disk4', units : undefined, 
    image : 'resources/disk4.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -8.0 
  });
  disk5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'disk5', units : undefined, 
    image : 'resources/disk5.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -9.0 
  });
  disks = {"1": disk1, "2": disk2, "3": disk3, "4": disk4, "5": disk5};
  display_timer = new util.Clock;
  trial_timer = new util.Clock;
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  error_text_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'error_text_stim',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -13.0 
  });
  
  countdown_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -14.0 
  });
  
  // Initialize components for Routine "instr_practice_m"
  instr_practice_mClock = new util.Clock();
  instr_pract_m_bkgd = new visual.Rect ({
    win: psychoJS.window, name: 'instr_pract_m_bkgd', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  instr_pract_m = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_pract_m', units : undefined, 
    image : 'resources/instr_practice_m.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.45, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -1.0 
  });
  key_resp_pract_m = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_m_setup"
  practice_m_setupClock = new util.Clock();
  // Initialize components for Routine "instr_trials"
  instr_trialsClock = new util.Clock();
  bkgd_trials_01 = new visual.Rect ({
    win: psychoJS.window, name: 'bkgd_trials_01', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.45, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "get_trial_vars"
  get_trial_varsClock = new util.Clock();
  // Initialize components for Routine "instr_trial"
  instr_trialClock = new util.Clock();
  bkgd_trial_instr = new visual.Rect ({
    win: psychoJS.window, name: 'bkgd_trial_instr', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  img_trial_instr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_trial_instr', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.45, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_end_trial_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "final_screen"
  final_screenClock = new util.Clock();
  final_bkgd = new visual.Rect ({
    win: psychoJS.window, name: 'final_bkgd', units : 'norm', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  final_screen_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'final_screen_image', units : undefined, 
    image : 'resources/final_screen.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.45, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -1.0 
  });
  key_final = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var instructions;
var currentLoop;
function instructionsLoopBegin(instructionsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/instruction_images.xlsx',
      seed: undefined, name: 'instructions'
    });
    psychoJS.experiment.addLoop(instructions); // add the loop to the experiment
    currentLoop = instructions;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instructions.forEach(function() {
      const snapshot = instructions.getSnapshot();
    
      instructionsLoopScheduler.add(importConditions(snapshot));
      instructionsLoopScheduler.add(instr01RoutineBegin(snapshot));
      instructionsLoopScheduler.add(instr01RoutineEachFrame());
      instructionsLoopScheduler.add(instr01RoutineEnd());
      instructionsLoopScheduler.add(endLoopIteration(instructionsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instructionsLoopEnd() {
  psychoJS.experiment.removeLoop(instructions);

  return Scheduler.Event.NEXT;
}


var practice_c;
function practice_cLoopBegin(practice_cLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_c = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_c'
    });
    psychoJS.experiment.addLoop(practice_c); // add the loop to the experiment
    currentLoop = practice_c;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_c.forEach(function() {
      const snapshot = practice_c.getSnapshot();
    
      practice_cLoopScheduler.add(importConditions(snapshot));
      practice_cLoopScheduler.add(trialRoutineBegin(snapshot));
      practice_cLoopScheduler.add(trialRoutineEachFrame());
      practice_cLoopScheduler.add(trialRoutineEnd());
      practice_cLoopScheduler.add(endLoopIteration(practice_cLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_cLoopEnd() {
  psychoJS.experiment.removeLoop(practice_c);

  return Scheduler.Event.NEXT;
}


var practice_m;
function practice_mLoopBegin(practice_mLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_m = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_m'
    });
    psychoJS.experiment.addLoop(practice_m); // add the loop to the experiment
    currentLoop = practice_m;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_m.forEach(function() {
      const snapshot = practice_m.getSnapshot();
    
      practice_mLoopScheduler.add(importConditions(snapshot));
      practice_mLoopScheduler.add(trialRoutineBegin(snapshot));
      practice_mLoopScheduler.add(trialRoutineEachFrame());
      practice_mLoopScheduler.add(trialRoutineEnd());
      practice_mLoopScheduler.add(endLoopIteration(practice_mLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_mLoopEnd() {
  psychoJS.experiment.removeLoop(practice_m);

  return Scheduler.Event.NEXT;
}


var instr_trials_loop;
function instr_trials_loopLoopBegin(instr_trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instr_trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/trial_instr_images.xlsx',
      seed: undefined, name: 'instr_trials_loop'
    });
    psychoJS.experiment.addLoop(instr_trials_loop); // add the loop to the experiment
    currentLoop = instr_trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instr_trials_loop.forEach(function() {
      const snapshot = instr_trials_loop.getSnapshot();
    
      instr_trials_loopLoopScheduler.add(importConditions(snapshot));
      instr_trials_loopLoopScheduler.add(instr_trialsRoutineBegin(snapshot));
      instr_trials_loopLoopScheduler.add(instr_trialsRoutineEachFrame());
      instr_trials_loopLoopScheduler.add(instr_trialsRoutineEnd());
      instr_trials_loopLoopScheduler.add(endLoopIteration(instr_trials_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instr_trials_loopLoopEnd() {
  psychoJS.experiment.removeLoop(instr_trials_loop);

  return Scheduler.Event.NEXT;
}


var trials_loop;
function trials_loopLoopBegin(trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/trial_loop.xlsx',
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_loop.forEach(function() {
      const snapshot = trials_loop.getSnapshot();
    
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(get_trial_varsRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(get_trial_varsRoutineEachFrame());
      trials_loopLoopScheduler.add(get_trial_varsRoutineEnd());
      trials_loopLoopScheduler.add(trial_setupRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(trial_setupRoutineEachFrame());
      trials_loopLoopScheduler.add(trial_setupRoutineEnd());
      const conditions_loopLoopScheduler = new Scheduler(psychoJS);
      trials_loopLoopScheduler.add(conditions_loopLoopBegin(conditions_loopLoopScheduler, snapshot));
      trials_loopLoopScheduler.add(conditions_loopLoopScheduler);
      trials_loopLoopScheduler.add(conditions_loopLoopEnd);
      trials_loopLoopScheduler.add(endLoopIteration(trials_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var conditions_loop;
function conditions_loopLoopBegin(conditions_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    conditions_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'resources/trial_conditions.xlsx', cond_row),
      seed: undefined, name: 'conditions_loop'
    });
    psychoJS.experiment.addLoop(conditions_loop); // add the loop to the experiment
    currentLoop = conditions_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    conditions_loop.forEach(function() {
      const snapshot = conditions_loop.getSnapshot();
    
      conditions_loopLoopScheduler.add(importConditions(snapshot));
      conditions_loopLoopScheduler.add(instr_trialRoutineBegin(snapshot));
      conditions_loopLoopScheduler.add(instr_trialRoutineEachFrame());
      conditions_loopLoopScheduler.add(instr_trialRoutineEnd());
      const trial_inner_loopLoopScheduler = new Scheduler(psychoJS);
      conditions_loopLoopScheduler.add(trial_inner_loopLoopBegin(trial_inner_loopLoopScheduler, snapshot));
      conditions_loopLoopScheduler.add(trial_inner_loopLoopScheduler);
      conditions_loopLoopScheduler.add(trial_inner_loopLoopEnd);
      conditions_loopLoopScheduler.add(endLoopIteration(conditions_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trial_inner_loop;
function trial_inner_loopLoopBegin(trial_inner_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial_inner_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trial_inner_loop'
    });
    psychoJS.experiment.addLoop(trial_inner_loop); // add the loop to the experiment
    currentLoop = trial_inner_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trial_inner_loop.forEach(function() {
      const snapshot = trial_inner_loop.getSnapshot();
    
      trial_inner_loopLoopScheduler.add(importConditions(snapshot));
      trial_inner_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      trial_inner_loopLoopScheduler.add(trialRoutineEachFrame());
      trial_inner_loopLoopScheduler.add(trialRoutineEnd());
      trial_inner_loopLoopScheduler.add(endLoopIteration(trial_inner_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trial_inner_loopLoopEnd() {
  psychoJS.experiment.removeLoop(trial_inner_loop);

  return Scheduler.Event.NEXT;
}


async function conditions_loopLoopEnd() {
  psychoJS.experiment.removeLoop(conditions_loop);

  return Scheduler.Event.NEXT;
}


async function trials_loopLoopEnd() {
  psychoJS.experiment.removeLoop(trials_loop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_instr_01_allKeys;
var instr01Components;
function instr01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr01'-------
    t = 0;
    instr01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    img_instr_01.setImage(instr_img_file);
    key_resp_instr_01.keys = undefined;
    key_resp_instr_01.rt = undefined;
    _key_resp_instr_01_allKeys = [];
    // keep track of which components have finished
    instr01Components = [];
    instr01Components.push(bkgd_01);
    instr01Components.push(img_instr_01);
    instr01Components.push(key_resp_instr_01);
    
    instr01Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr01RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr01'-------
    // get current time
    t = instr01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bkgd_01* updates
    if (t >= 0.0 && bkgd_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bkgd_01.tStart = t;  // (not accounting for frame time here)
      bkgd_01.frameNStart = frameN;  // exact frame index
      
      bkgd_01.setAutoDraw(true);
    }

    
    // *img_instr_01* updates
    if (t >= 0.0 && img_instr_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_instr_01.tStart = t;  // (not accounting for frame time here)
      img_instr_01.frameNStart = frameN;  // exact frame index
      
      img_instr_01.setAutoDraw(true);
    }

    
    // *key_resp_instr_01* updates
    if (t >= 0.0 && key_resp_instr_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_01.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_01.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_01.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_01.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_01.clearEvents(); });
    }

    if (key_resp_instr_01.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_01.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_01_allKeys = _key_resp_instr_01_allKeys.concat(theseKeys);
      if (_key_resp_instr_01_allKeys.length > 0) {
        key_resp_instr_01.keys = _key_resp_instr_01_allKeys[_key_resp_instr_01_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_01.rt = _key_resp_instr_01_allKeys[_key_resp_instr_01_allKeys.length - 1].rt;
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
    instr01Components.forEach( function(thisComponent) {
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


function instr01RoutineEnd() {
  return async function () {
    //------Ending Routine 'instr01'-------
    instr01Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_instr_01.stop();
    // the Routine "instr01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var task_setupComponents;
function task_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_setup'-------
    t = 0;
    task_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    task_setupComponents = [];
    
    task_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_setup'-------
    // get current time
    t = task_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_setupComponents.forEach( function(thisComponent) {
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


function task_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'task_setup'-------
    task_setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "task_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_cond;
var trial_valid_keys;
var valid_key_list;
var trial_duration;
var practice_c_setupComponents;
function practice_c_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_c_setup'-------
    t = 0;
    practice_c_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    disk_count = 3;
    trial_cond = "c";
    trial_valid_keys = ["1", "2", "3", "4", "5", "j", "k", "l"];
    valid_key_list = trial_valid_keys;
    trial_duration = (5 * 60);
    
    // keep track of which components have finished
    practice_c_setupComponents = [];
    
    practice_c_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_c_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_c_setup'-------
    // get current time
    t = practice_c_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_c_setupComponents.forEach( function(thisComponent) {
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


function practice_c_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_c_setup'-------
    practice_c_setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_c_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var first_in_trial;
var display_on;
var countdown_time;
var cond_list;
var cond_row;
var trial_setupComponents;
function trial_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_setup'-------
    t = 0;
    trial_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    show_error = false;
    error_text = "";
    disk_pos = [[(- 0.45), (- 0.308)], [(- 0.45), (- 0.258)], [(- 0.45), (- 0.208)], [(- 0.45), (- 0.158)], [(- 0.45), (- 0.108)]];
    j_disks = function () {
        var _pj_a = [], _pj_b = util.range(1, (disk_count + 1));
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var x = _pj_b[_pj_c];
            _pj_a.push(x);
        }
        return _pj_a;
    }
    .call(this);
    k_disks = [];
    l_disks = [];
    input1 = "";
    input2 = "";
    first_in_trial = true;
    display_on = false;
    countdown_time = 0;
    cond_list = ["0:1", "1:2"];
    util.shuffle(cond_list);
    cond_row = cond_list[0];
    
    // keep track of which components have finished
    trial_setupComponents = [];
    
    trial_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_setup'-------
    // get current time
    t = trial_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_setupComponents.forEach( function(thisComponent) {
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


function trial_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_setup'-------
    trial_setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_timeout;
var goal_image_file;
var _key_resp_1_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    goal_image.setImage(goal_image_file);
    disk1.setPos(disk_pos[0]);
    disk2.setPos(disk_pos[1]);
    disk3.setPos(disk_pos[2]);
    disk4.setPos(disk_pos[3]);
    disk5.setPos(disk_pos[4]);
    if (first_in_trial) {
        first_in_trial = false;
        trial_timer.reset();
        trial_timeout = false;
        if ((disk_count === 3)) {
            disk4.size = [0, 0];
            disk5.size = [0, 0];
            goal_image_file = "resources/goal_3disk.png";
        } else {
            if ((disk_count === 4)) {
                disk4.size = disk_size;
                disk5.size = [0, 0];
                goal_image_file = "resources/goal_4disk.png";
            } else {
                disk4.size = disk_size;
                disk5.size = disk_size;
                goal_image_file = "resources/goal_5disk.png";
            }
        }
        goal_image.setImage(goal_image_file);
        if ((trial_cond === "c")) {
            show_display();
        } else {
            hide_display();
        }
    }
    
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    key_resp_1.clearEvents({"eventType": "keyboard"});
    
    error_text_stim.setText(error_text);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(polygon);
    trialComponents.push(goal_image);
    trialComponents.push(towerJ);
    trialComponents.push(towerK);
    trialComponents.push(towerL);
    trialComponents.push(disk1);
    trialComponents.push(disk2);
    trialComponents.push(disk3);
    trialComponents.push(disk4);
    trialComponents.push(disk5);
    trialComponents.push(key_resp_1);
    trialComponents.push(error_text_stim);
    trialComponents.push(countdown_text);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys_pressed;
var cd_time;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    
    // *goal_image* updates
    if (t >= 0.0 && goal_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goal_image.tStart = t;  // (not accounting for frame time here)
      goal_image.frameNStart = frameN;  // exact frame index
      
      goal_image.setAutoDraw(true);
    }

    
    // *towerJ* updates
    if (t >= 0.0 && towerJ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      towerJ.tStart = t;  // (not accounting for frame time here)
      towerJ.frameNStart = frameN;  // exact frame index
      
      towerJ.setAutoDraw(true);
    }

    
    // *towerK* updates
    if (t >= 0.0 && towerK.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      towerK.tStart = t;  // (not accounting for frame time here)
      towerK.frameNStart = frameN;  // exact frame index
      
      towerK.setAutoDraw(true);
    }

    
    // *towerL* updates
    if (t >= 0.0 && towerL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      towerL.tStart = t;  // (not accounting for frame time here)
      towerL.frameNStart = frameN;  // exact frame index
      
      towerL.setAutoDraw(true);
    }

    
    // *disk1* updates
    if (t >= 0.0 && disk1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disk1.tStart = t;  // (not accounting for frame time here)
      disk1.frameNStart = frameN;  // exact frame index
      
      disk1.setAutoDraw(true);
    }

    
    // *disk2* updates
    if (t >= 0.0 && disk2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disk2.tStart = t;  // (not accounting for frame time here)
      disk2.frameNStart = frameN;  // exact frame index
      
      disk2.setAutoDraw(true);
    }

    
    // *disk3* updates
    if (t >= 0.0 && disk3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disk3.tStart = t;  // (not accounting for frame time here)
      disk3.frameNStart = frameN;  // exact frame index
      
      disk3.setAutoDraw(true);
    }

    
    // *disk4* updates
    if (t >= 0.0 && disk4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disk4.tStart = t;  // (not accounting for frame time here)
      disk4.frameNStart = frameN;  // exact frame index
      
      disk4.setAutoDraw(true);
    }

    
    // *disk5* updates
    if (t >= 0.0 && disk5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disk5.tStart = t;  // (not accounting for frame time here)
      disk5.frameNStart = frameN;  // exact frame index
      
      disk5.setAutoDraw(true);
    }

    
    // *key_resp_1* updates
    if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
    }

    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({keyList: ['1', '2', '3', '4', '5', 'j', 'k', 'l', 'z', 'space'], waitRelease: false});
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys.map((key) => key.name);  // storing all keys
        key_resp_1.rt = _key_resp_1_allKeys.map((key) => key.rt);
      }
    }
    
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    function keys_pressed_func(keys_in) {
        return function () {
        var _pj_a = [], _pj_b = keys_in;
        if(keys_in){
            for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
                var x = _pj_b[_pj_c];
                if (_pj.in_es6(x, valid_key_list)) {
                    _pj_a.push(x);
                }
            }
        }
        return _pj_a;
    }
    .call(this);
    }
    keys_pressed = keys_pressed_func(key_resp_1.keys);
    if (((keys_pressed.length >= 1) && _pj.in_es6(keys_pressed[0], ["z", "space"]))) {
        input1 = keys_pressed[0];
        input2 = "";
        continueRoutine = false;
    } else {
        if ((keys_pressed.length >= 1)) {
            if (_pj.in_es6(keys_pressed[0], ["1", "2", "3", "4", "5"])) {
                input1 = keys_pressed[0];
            } else {
                if (_pj.in_es6(keys_pressed[0], ["j", "k", "l"])) {
                    input2 = keys_pressed[0];
                }
            }
            continueRoutine = false;
        }
    }
    if (display_on){
        cd_time=display_timer.getTime();
        countdown_time = Math.round(10-cd_time).toString();
        if (cd_time >= 10) {
            input1 = 'hide';
            input2 = '';
            continueRoutine = false;
         }
    }
    if ((trial_timer.getTime() >= trial_duration)) {
        trial_timeout = true;
        continueRoutine = false;
        currentLoop.finished = true;
    }
    
    
    // *error_text_stim* updates
    if (t >= 0.0 && error_text_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      error_text_stim.tStart = t;  // (not accounting for frame time here)
      error_text_stim.frameNStart = frameN;  // exact frame index
      
      error_text_stim.setAutoDraw(true);
    }

    
    // *countdown_text* updates
    if (t >= 0.0 && countdown_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_text.tStart = t;  // (not accounting for frame time here)
      countdown_text.frameNStart = frameN;  // exact frame index
      
      countdown_text.setAutoDraw(true);
    }

    
    if (countdown_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_text.setText(countdown_time, false);
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
    trialComponents.forEach( function(thisComponent) {
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


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        }
    
    key_resp_1.stop();
    var _pj;
    var to_tower;
    var from_tower;
    var moved;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((input1 === "space")) {
        show_error = false;
        error_text = "";
        valid_key_list = trial_valid_keys;
    } else if ((input1 === "hide")) {
        show_error = false;
        valid_key_list = trial_valid_keys;
        key_resp_1.keys = [];
        hide_display();
        hide_countdown();
        display_on = false;
    } else if ((((input1 === "z") || (input2 === "z")) && _pj.in_es6("z", valid_key_list))) {
        show_error = false;
        error_text = "";
        show_display();
        show_countdown();
        display_on = true;
        valid_key_list = [];
        display_timer.reset();
    } else if ((input2.length === 0)) {
        show_error = false;
        error_text = "";
    } else if (((! _pj.in_es6(input1, ["1", "2", "3", "4", "5"])) || (! _pj.in_es6(input2, ["j", "k", "l"])))) {
        show_error = true;
        error_text = "Please enter a single disk number followed by a single tower letter.";
    } else if ((Number.parseInt(input1) > disk_count)) {
        show_error = true;
        error_text = "Please enter a valid disk number.";
    } else if ((! _pj.in_es6(Number.parseInt(input1), get_top_disks()))) {
        show_error = true;
        error_text = "You cannot move a disk with another disk on top of it.";
    } else if (((get_stack_list(input2).length > 0) && (get_stack_list(input2).slice((- 1))[0] === Number.parseInt(input1)))) {
        show_error = true;
        error_text = "The selected disk is already on the selected tower.";
    } else if (((get_stack_list(input2).length > 0) && (get_stack_list(input2).slice((- 1))[0] > Number.parseInt(input1)))) {
        show_error = true;
        error_text = "You cannot put a wider disk on top of a smaller disk.";
    } else {
        valid_key_list = trial_valid_keys;
        error_text = "";
        from_tower = get_disk_stack_list(input1);
        to_tower = get_stack_list(input2);
        moved = from_tower.pop();
        to_tower.push(moved);
        disk_pos[(Number.parseInt(input1) - 1)] = [x_coords[input2], y_coords[(to_tower.length - 1)]];
        input1 = "";
        input2 = "";
        if ((l_disks.length === disk_count)) {
        currentLoop.finished = true;
        }
    }
    
    if (show_error) {
        error_text = error_text;
        input1 = "";
        input2 = "";
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_pract_m_allKeys;
var instr_practice_mComponents;
function instr_practice_mRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_practice_m'-------
    t = 0;
    instr_practice_mClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_pract_m.keys = undefined;
    key_resp_pract_m.rt = undefined;
    _key_resp_pract_m_allKeys = [];
    // keep track of which components have finished
    instr_practice_mComponents = [];
    instr_practice_mComponents.push(instr_pract_m_bkgd);
    instr_practice_mComponents.push(instr_pract_m);
    instr_practice_mComponents.push(key_resp_pract_m);
    
    instr_practice_mComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_practice_mRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_practice_m'-------
    // get current time
    t = instr_practice_mClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_pract_m_bkgd* updates
    if (t >= 0.0 && instr_pract_m_bkgd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_pract_m_bkgd.tStart = t;  // (not accounting for frame time here)
      instr_pract_m_bkgd.frameNStart = frameN;  // exact frame index
      
      instr_pract_m_bkgd.setAutoDraw(true);
    }

    
    // *instr_pract_m* updates
    if (t >= 0.0 && instr_pract_m.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_pract_m.tStart = t;  // (not accounting for frame time here)
      instr_pract_m.frameNStart = frameN;  // exact frame index
      
      instr_pract_m.setAutoDraw(true);
    }

    
    // *key_resp_pract_m* updates
    if (t >= 0.0 && key_resp_pract_m.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_pract_m.tStart = t;  // (not accounting for frame time here)
      key_resp_pract_m.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_pract_m.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_pract_m.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_pract_m.clearEvents(); });
    }

    if (key_resp_pract_m.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_pract_m.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_pract_m_allKeys = _key_resp_pract_m_allKeys.concat(theseKeys);
      if (_key_resp_pract_m_allKeys.length > 0) {
        key_resp_pract_m.keys = _key_resp_pract_m_allKeys[_key_resp_pract_m_allKeys.length - 1].name;  // just the last key pressed
        key_resp_pract_m.rt = _key_resp_pract_m_allKeys[_key_resp_pract_m_allKeys.length - 1].rt;
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
    instr_practice_mComponents.forEach( function(thisComponent) {
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


function instr_practice_mRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_practice_m'-------
    instr_practice_mComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_pract_m.keys', key_resp_pract_m.keys);
    if (typeof key_resp_pract_m.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_pract_m.rt', key_resp_pract_m.rt);
        routineTimer.reset();
        }
    
    key_resp_pract_m.stop();
    // the Routine "instr_practice_m" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_m_setupComponents;
function practice_m_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_m_setup'-------
    t = 0;
    practice_m_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    disk_count = 3;
    trial_cond = "m";
    trial_valid_keys = ["1", "2", "3", "4", "5", "j", "k", "l", "z"];
    valid_key_list = trial_valid_keys;
    trial_duration = (5 * 60);
    
    // keep track of which components have finished
    practice_m_setupComponents = [];
    
    practice_m_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_m_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_m_setup'-------
    // get current time
    t = practice_m_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_m_setupComponents.forEach( function(thisComponent) {
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


function practice_m_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_m_setup'-------
    practice_m_setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_m_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var instr_trialsComponents;
function instr_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_trials'-------
    t = 0;
    instr_trialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image.setImage(img_file);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instr_trialsComponents = [];
    instr_trialsComponents.push(bkgd_trials_01);
    instr_trialsComponents.push(image);
    instr_trialsComponents.push(key_resp);
    
    instr_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_trialsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_trials'-------
    // get current time
    t = instr_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bkgd_trials_01* updates
    if (t >= 0.0 && bkgd_trials_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bkgd_trials_01.tStart = t;  // (not accounting for frame time here)
      bkgd_trials_01.frameNStart = frameN;  // exact frame index
      
      bkgd_trials_01.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    instr_trialsComponents.forEach( function(thisComponent) {
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


function instr_trialsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_trials'-------
    instr_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var get_trial_varsComponents;
function get_trial_varsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'get_trial_vars'-------
    t = 0;
    get_trial_varsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    disk_count = trials_loop.thisTrial.disk_count;
    trial_duration = trials_loop.thisTrial.trial_duration;
    // keep track of which components have finished
    get_trial_varsComponents = [];
    
    get_trial_varsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function get_trial_varsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'get_trial_vars'-------
    // get current time
    t = get_trial_varsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    get_trial_varsComponents.forEach( function(thisComponent) {
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


function get_trial_varsRoutineEnd() {
  return async function () {
    //------Ending Routine 'get_trial_vars'-------
    get_trial_varsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "get_trial_vars" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_end_trial_instr_allKeys;
var instr_trialComponents;
function instr_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_trial'-------
    t = 0;
    instr_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    img_trial_instr.setImage(trial_instr_image);
    key_end_trial_instr.keys = undefined;
    key_end_trial_instr.rt = undefined;
    _key_end_trial_instr_allKeys = [];
    trial_cond = conditions_loop.thisTrial.trial_cond;
    trial_valid_keys = conditions_loop.thisTrial.trial_valid_keys;
    // valid_key_list = conditions_loop.thisTrial.valid_key_list;
    
    // Remove the '' characters in the key list variables
    for(let x = 0; x < trial_valid_keys.length; x++)
    {
        trial_valid_keys[x] = trial_valid_keys[x].replace("'", "");
        trial_valid_keys[x] = trial_valid_keys[x].replace("'", "");
    }
    
    valid_key_list = trial_valid_keys;
    // keep track of which components have finished
    instr_trialComponents = [];
    instr_trialComponents.push(bkgd_trial_instr);
    instr_trialComponents.push(img_trial_instr);
    instr_trialComponents.push(key_end_trial_instr);
    
    instr_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_trial'-------
    // get current time
    t = instr_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bkgd_trial_instr* updates
    if (t >= 0.0 && bkgd_trial_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bkgd_trial_instr.tStart = t;  // (not accounting for frame time here)
      bkgd_trial_instr.frameNStart = frameN;  // exact frame index
      
      bkgd_trial_instr.setAutoDraw(true);
    }

    
    // *img_trial_instr* updates
    if (t >= 0.0 && img_trial_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_trial_instr.tStart = t;  // (not accounting for frame time here)
      img_trial_instr.frameNStart = frameN;  // exact frame index
      
      img_trial_instr.setAutoDraw(true);
    }

    
    // *key_end_trial_instr* updates
    if (t >= 0.0 && key_end_trial_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_end_trial_instr.tStart = t;  // (not accounting for frame time here)
      key_end_trial_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_end_trial_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_end_trial_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_end_trial_instr.clearEvents(); });
    }

    if (key_end_trial_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_end_trial_instr.getKeys({keyList: ['space'], waitRelease: false});
      _key_end_trial_instr_allKeys = _key_end_trial_instr_allKeys.concat(theseKeys);
      if (_key_end_trial_instr_allKeys.length > 0) {
        key_end_trial_instr.keys = _key_end_trial_instr_allKeys[_key_end_trial_instr_allKeys.length - 1].name;  // just the last key pressed
        key_end_trial_instr.rt = _key_end_trial_instr_allKeys[_key_end_trial_instr_allKeys.length - 1].rt;
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
    instr_trialComponents.forEach( function(thisComponent) {
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


function instr_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_trial'-------
    instr_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_end_trial_instr.keys', key_end_trial_instr.keys);
    if (typeof key_end_trial_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_end_trial_instr.rt', key_end_trial_instr.rt);
        routineTimer.reset();
        }
    
    key_end_trial_instr.stop();
    // the Routine "instr_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_final_allKeys;
var final_screenComponents;
function final_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'final_screen'-------
    t = 0;
    final_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_final.keys = undefined;
    key_final.rt = undefined;
    _key_final_allKeys = [];
    // keep track of which components have finished
    final_screenComponents = [];
    final_screenComponents.push(final_bkgd);
    final_screenComponents.push(final_screen_image);
    final_screenComponents.push(key_final);
    
    final_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function final_screenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'final_screen'-------
    // get current time
    t = final_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *final_bkgd* updates
    if (t >= 0.0 && final_bkgd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_bkgd.tStart = t;  // (not accounting for frame time here)
      final_bkgd.frameNStart = frameN;  // exact frame index
      
      final_bkgd.setAutoDraw(true);
    }

    
    // *final_screen_image* updates
    if (t >= 0.0 && final_screen_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_screen_image.tStart = t;  // (not accounting for frame time here)
      final_screen_image.frameNStart = frameN;  // exact frame index
      
      final_screen_image.setAutoDraw(true);
    }

    
    // *key_final* updates
    if (t >= 0.0 && key_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_final.tStart = t;  // (not accounting for frame time here)
      key_final.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_final.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_final.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_final.clearEvents(); });
    }

    if (key_final.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_final.getKeys({keyList: ['space'], waitRelease: false});
      _key_final_allKeys = _key_final_allKeys.concat(theseKeys);
      if (_key_final_allKeys.length > 0) {
        key_final.keys = _key_final_allKeys[_key_final_allKeys.length - 1].name;  // just the last key pressed
        key_final.rt = _key_final_allKeys[_key_final_allKeys.length - 1].rt;
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
    final_screenComponents.forEach( function(thisComponent) {
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


function final_screenRoutineEnd() {
  return async function () {
    //------Ending Routine 'final_screen'-------
    final_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_final.keys', key_final.keys);
    if (typeof key_final.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_final.rt', key_final.rt);
        routineTimer.reset();
        }
    
    key_final.stop();
    // the Routine "final_screen" was not non-slip safe, so reset the non-slip timer
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
