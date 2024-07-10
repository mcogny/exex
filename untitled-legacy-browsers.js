/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
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


flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/instruction_images.xlsx', 'path': 'resources/instruction_images.xlsx'},
    {'name': 'resources/instr01.png', 'path': 'resources/instr01.png'},
    {'name': 'resources/instr02.png', 'path': 'resources/instr02.png'},
    {'name': 'resources/instr03.png', 'path': 'resources/instr03.png'},
    {'name': 'resources/instr04.png', 'path': 'resources/instr04.png'},
    {'name': 'resources/instr05.png', 'path': 'resources/instr05.png'},
    {'name': 'resources/instr06.png', 'path': 'resources/instr06.png'},
    {'name': 'resources/instr07.png', 'path': 'resources/instr07.png'},
    {'name': 'resources/instr08.png', 'path': 'resources/instr08.png'},
    {'name': 'resources/instr09.png', 'path': 'resources/instr09.png'},
    {'name': 'resources/instr10.png', 'path': 'resources/instr10.png'},
    {'name': 'resources/instr11.png', 'path': 'resources/instr11.png'},
    {'name': 'resources/instr12.png', 'path': 'resources/instr12.png'},
    {'name': 'resources/instr13.png', 'path': 'resources/instr13.png'},
    {'name': 'resources/instr14.png', 'path': 'resources/instr14.png'},
    {'name': 'resources/instr15.png', 'path': 'resources/instr15.png'},
    {'name': 'resources/instr16.png', 'path': 'resources/instr16.png'},
    {'name': 'resources/instr17.png', 'path': 'resources/instr17.png'},
    {'name': 'resources/instr18.png', 'path': 'resources/instr18.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'tower-of-hanoi-master/resources/goal_3disk.png', 'path': 'tower-of-hanoi-master/resources/goal_3disk.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instr01Clock;
var key_resp_instr_01;
var img_instr_01;
var bkgd_01;
var trialClock;
var text;
var text_2;
var image;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr01"
  instr01Clock = new util.Clock();
  key_resp_instr_01 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  img_instr_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_instr_01', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  bkgd_01 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'bkgd_01', units : 'norm', 
    vertices: [[-[2, 2][0]/2.0, -[2, 2][1]/2.0], [+[2, 2][0]/2.0, -[2, 2][1]/2.0], [0, [2, 2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Any text\n\nincluding line breakssdfasdfasdfadsfsadfasdf',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'tower-of-hanoi-master/resources/goal_3disk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var instructions;
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
      snapshot = instructions.getSnapshot();
    
      instructionsLoopScheduler.add(importConditions(snapshot));
      instructionsLoopScheduler.add(instr01RoutineBegin(snapshot));
      instructionsLoopScheduler.add(instr01RoutineEachFrame());
      instructionsLoopScheduler.add(instr01RoutineEnd(snapshot));
      instructionsLoopScheduler.add(instructionsLoopEndIteration(instructionsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instructionsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructionsLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var _key_resp_instr_01_allKeys;
var instr01Components;
function instr01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr01' ---
    t = 0;
    instr01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr01.started', globalClock.getTime());
    key_resp_instr_01.keys = undefined;
    key_resp_instr_01.rt = undefined;
    _key_resp_instr_01_allKeys = [];
    img_instr_01.setImage(instr_img_file);
    // keep track of which components have finished
    instr01Components = [];
    instr01Components.push(key_resp_instr_01);
    instr01Components.push(img_instr_01);
    instr01Components.push(bkgd_01);
    
    instr01Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr01RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr01' ---
    // get current time
    t = instr01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
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
        key_resp_instr_01.duration = _key_resp_instr_01_allKeys[_key_resp_instr_01_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *img_instr_01* updates
    if (t >= 0.0 && img_instr_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_instr_01.tStart = t;  // (not accounting for frame time here)
      img_instr_01.frameNStart = frameN;  // exact frame index
      
      img_instr_01.setAutoDraw(true);
    }
    
    
    // *bkgd_01* updates
    if (t >= 0.0 && bkgd_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bkgd_01.tStart = t;  // (not accounting for frame time here)
      bkgd_01.frameNStart = frameN;  // exact frame index
      
      bkgd_01.setAutoDraw(true);
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


function instr01RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr01' ---
    instr01Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr01.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instr_01.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instr_01.keys', key_resp_instr_01.keys);
    if (typeof key_resp_instr_01.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instr_01.rt', key_resp_instr_01.rt);
        psychoJS.experiment.addData('key_resp_instr_01.duration', key_resp_instr_01.duration);
        routineTimer.reset();
        }
    
    key_resp_instr_01.stop();
    // the Routine "instr01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text);
    trialComponents.push(text_2);
    trialComponents.push(image);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
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


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
