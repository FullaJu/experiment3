#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on 七月 29, 2025, at 21:52
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'experiment3_1'  # from the Builder filename that created this script
expInfo = {'编号*': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['编号*'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\prograduate\\2xia\\experiment3_1\\experiment3_1\\experiment3_1_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1707, 1067], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instruction"
instructionClock = core.Clock()
instru_text = visual.TextStim(win=win, name='instru_text',
    text='Any text\n\nincluding line breaks',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
# 导入必要的库
import random
import pandas as pd
import os
import numpy as np


current_img = "blank.png"  
# 读取刺激列表
stim_file = 'all_faces.xlsx'
faces_df = pd.read_excel(stim_file)

# 分离男性和女性面孔
male_faces = faces_df[faces_df['gender'] == 'male'].sort_values(by='range', ascending=False).reset_index(drop=True)
female_faces = faces_df[faces_df['gender'] == 'female'].sort_values(by='range', ascending=False).reset_index(drop=True)

# 获取参与者编号，用于确定配对方式
participant_id = int(expInfo["编号*"])

# 初始化存储trials数据的列表
trials_data = []

# 处理男性面孔
for i in range(0, len(male_faces), 2):
    if i + 1 < len(male_faces):  # 确保有配对的人物
        face1 = male_faces.iloc[i]
        face2 = male_faces.iloc[i+1]
        
        # 根据被试编号和配对索引决定分配方式
        if (participant_id + i//2) % 2 == 0:
            # 人物1到条件1，人物2到条件2
            trials_data.append({**face1.to_dict(), 'condition': 1})
            trials_data.append({**face2.to_dict(), 'condition': 2})
        else:
            # 人物1到条件2，人物2到条件1
            trials_data.append({**face1.to_dict(), 'condition': 2})
            trials_data.append({**face2.to_dict(), 'condition': 1})

# 处理女性面孔，使用相同的逻辑
for i in range(0, len(female_faces), 2):
    if i + 1 < len(female_faces):  # 确保有配对的人物
        face1 = female_faces.iloc[i]
        face2 = female_faces.iloc[i+1]
        
        # 根据被试编号和配对索引决定分配方式
        if (participant_id + i//2) % 2 == 0:
            trials_data.append({**face1.to_dict(), 'condition': 1})
            trials_data.append({**face2.to_dict(), 'condition': 2})
        else:
            trials_data.append({**face1.to_dict(), 'condition': 2})
            trials_data.append({**face2.to_dict(), 'condition': 1})

# 转换为数据框并随机化试次顺序
trials_df = pd.DataFrame(trials_data)
trials_df = trials_df.sample(frac=1).reset_index(drop=True)  # 随机化试次顺序

# 检查两个条件下的性别平衡情况
condition1 = trials_df[trials_df['condition'] == 1]
condition2 = trials_df[trials_df['condition'] == 2]

# 打印平衡检查结果
print(f"条件1: 男性 = {sum(condition1['gender'] == 'male')}, 女性 = {sum(condition1['gender'] == 'female')}")
print(f"条件2: 男性 = {sum(condition2['gender'] == 'male')}, 女性 = {sum(condition2['gender'] == 'female')}")
print(f"条件1 平均range: {condition1['range'].mean():.2f}")
print(f"条件2 平均range: {condition2['range'].mean():.2f}")

# 保存为临时文件供TrialHandler使用
temp_trials_file = os.path.join('data', f'temp_trials_{expInfo["编号*"]}.csv')
trials_df.to_csv(temp_trials_file, index=False)

# 设置为全局变量，供后续使用
thisExp.extraInfo['trials_file'] = temp_trials_file

# 创建全局字典存储评分和确定性
T1_ratings = {}
T1_confidence = {}
instru_key_resp = keyboard.Keyboard()

# Initialize components for Routine "block_instru"
block_instruClock = core.Clock()
block_instr_text = visual.TextStim(win=win, name='block_instr_text',
    text='下面是另一位人物',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
block_key_resp = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_text = visual.TextStim(win=win, name='fixation_text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "image1"
image1Clock = core.Clock()
image_t1 = visual.ImageStim(
    win=win,
    name='image_t1', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.1), size=(0.27, 0.37),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
rating_T1_keys = keyboard.Keyboard()
slider_image = visual.ImageStim(
    win=win,
    name='slider_image', 
    image='slider.jpg', mask=None,
    ori=0.0, pos=(0, -0.37), size=(0.9, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_text = visual.TextStim(win=win, name='fixation_text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "confidence_1"
confidence_1Clock = core.Clock()
confidence_T1_text = visual.TextStim(win=win, name='confidence_T1_text',
    text='您对刚才的可信度评分有多确定？',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
confidence_T1_keys = keyboard.Keyboard()
slider_confidence_t1 = visual.ImageStim(
    win=win,
    name='slider_confidence_t1', 
    image='slider.jpg', mask=None,
    ori=0.0, pos=(0, -0.37), size=(0.9, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_text = visual.TextStim(win=win, name='fixation_text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "image2"
image2Clock = core.Clock()
image_t2 = visual.ImageStim(
    win=win,
    name='image_t2', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.1), size=(0.27, 0.37),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
rating_T2_keys = keyboard.Keyboard()
slider_image_t2 = visual.ImageStim(
    win=win,
    name='slider_image_t2', 
    image='slider.jpg', mask=None,
    ori=0.0, pos=(0, -0.37), size=(0.9, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_text = visual.TextStim(win=win, name='fixation_text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "confidence_2"
confidence_2Clock = core.Clock()
confidence2_text = visual.TextStim(win=win, name='confidence2_text',
    text='您对刚才的可信度评分有多确定？',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
confidence_T2_keys = keyboard.Keyboard()
slider_confidence_t2 = visual.ImageStim(
    win=win,
    name='slider_confidence_t2', 
    image='slider.jpg', mask=None,
    ori=0.0, pos=(0, -0.37), size=(0.9, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "end"
endClock = core.Clock()
end_text = visual.TextStim(win=win, name='end_text',
    text='感谢您参与本次研究！请按空格键退出。',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_key_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instruction"-------
continueRoutine = True
# update component parameters for each repeat
instru_key_resp.keys = []
instru_key_resp.rt = []
_instru_key_resp_allKeys = []
# keep track of which components have finished
instructionComponents = [instru_text, instru_key_resp]
for thisComponent in instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction"-------
while continueRoutine:
    # get current time
    t = instructionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instru_text* updates
    if instru_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instru_text.frameNStart = frameN  # exact frame index
        instru_text.tStart = t  # local t and not account for scr refresh
        instru_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instru_text, 'tStartRefresh')  # time at next scr refresh
        instru_text.setAutoDraw(True)
    
    # *instru_key_resp* updates
    waitOnFlip = False
    if instru_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instru_key_resp.frameNStart = frameN  # exact frame index
        instru_key_resp.tStart = t  # local t and not account for scr refresh
        instru_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instru_key_resp, 'tStartRefresh')  # time at next scr refresh
        instru_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instru_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instru_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instru_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = instru_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _instru_key_resp_allKeys.extend(theseKeys)
        if len(_instru_key_resp_allKeys):
            instru_key_resp.keys = _instru_key_resp_allKeys[-1].name  # just the last key pressed
            instru_key_resp.rt = _instru_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction"-------
for thisComponent in instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instru_text.started', instru_text.tStartRefresh)
thisExp.addData('instru_text.stopped', instru_text.tStopRefresh)
# check responses
if instru_key_resp.keys in ['', [], None]:  # No response was made
    instru_key_resp.keys = None
thisExp.addData('instru_key_resp.keys',instru_key_resp.keys)
if instru_key_resp.keys != None:  # we had a response
    thisExp.addData('instru_key_resp.rt', instru_key_resp.rt)
thisExp.addData('instru_key_resp.started', instru_key_resp.tStartRefresh)
thisExp.addData('instru_key_resp.stopped', instru_key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(thisExp.extraInfo['trials_file']),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "block_instru"-------
    continueRoutine = True
    # update component parameters for each repeat
    block_key_resp.keys = []
    block_key_resp.rt = []
    _block_key_resp_allKeys = []
    # keep track of which components have finished
    block_instruComponents = [block_instr_text, block_key_resp]
    for thisComponent in block_instruComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    block_instruClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "block_instru"-------
    while continueRoutine:
        # get current time
        t = block_instruClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=block_instruClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *block_instr_text* updates
        if block_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            block_instr_text.frameNStart = frameN  # exact frame index
            block_instr_text.tStart = t  # local t and not account for scr refresh
            block_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(block_instr_text, 'tStartRefresh')  # time at next scr refresh
            block_instr_text.setAutoDraw(True)
        
        # *block_key_resp* updates
        waitOnFlip = False
        if block_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            block_key_resp.frameNStart = frameN  # exact frame index
            block_key_resp.tStart = t  # local t and not account for scr refresh
            block_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(block_key_resp, 'tStartRefresh')  # time at next scr refresh
            block_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(block_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(block_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if block_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = block_key_resp.getKeys(keyList=['space'], waitRelease=False)
            _block_key_resp_allKeys.extend(theseKeys)
            if len(_block_key_resp_allKeys):
                block_key_resp.keys = _block_key_resp_allKeys[-1].name  # just the last key pressed
                block_key_resp.rt = _block_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in block_instruComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "block_instru"-------
    for thisComponent in block_instruComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('block_instr_text.started', block_instr_text.tStartRefresh)
    trials.addData('block_instr_text.stopped', block_instr_text.tStopRefresh)
    # check responses
    if block_key_resp.keys in ['', [], None]:  # No response was made
        block_key_resp.keys = None
    trials.addData('block_key_resp.keys',block_key_resp.keys)
    if block_key_resp.keys != None:  # we had a response
        trials.addData('block_key_resp.rt', block_key_resp.rt)
    trials.addData('block_key_resp.started', block_key_resp.tStartRefresh)
    trials.addData('block_key_resp.stopped', block_key_resp.tStopRefresh)
    # the Routine "block_instru" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fixation_text]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_text* updates
        if fixation_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_text.frameNStart = frameN  # exact frame index
            fixation_text.tStart = t  # local t and not account for scr refresh
            fixation_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_text, 'tStartRefresh')  # time at next scr refresh
            fixation_text.setAutoDraw(True)
        if fixation_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fixation_text.tStop = t  # not accounting for scr refresh
                fixation_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_text, 'tStopRefresh')  # time at next scr refresh
                fixation_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_text.started', fixation_text.tStartRefresh)
    trials.addData('fixation_text.stopped', fixation_text.tStopRefresh)
    
    # ------Prepare to start Routine "image1"-------
    continueRoutine = True
    # update component parameters for each repeat
    # Begin Routine
    
    if thisTrial['condition'] == 1:
        current_img = thisTrial['high_trust_img']  # 高可信面孔
    else:
        current_img = thisTrial['low_trust_img']  # 低可信面孔
        
    # 记录当前trial的信息，供下个routine使用
    thisExp.addData('first_image', current_img)
    thisExp.addData('identity', thisTrial['identity'])
    thisExp.addData('condition', thisTrial['condition'])
    image_t1.setImage(current_img)
    rating_T1_keys.keys = []
    rating_T1_keys.rt = []
    _rating_T1_keys_allKeys = []
    # keep track of which components have finished
    image1Components = [image_t1, rating_T1_keys, slider_image]
    for thisComponent in image1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    image1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "image1"-------
    while continueRoutine:
        # get current time
        t = image1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=image1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_t1* updates
        if image_t1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_t1.frameNStart = frameN  # exact frame index
            image_t1.tStart = t  # local t and not account for scr refresh
            image_t1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_t1, 'tStartRefresh')  # time at next scr refresh
            image_t1.setAutoDraw(True)
        
        # *rating_T1_keys* updates
        waitOnFlip = False
        if rating_T1_keys.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_T1_keys.frameNStart = frameN  # exact frame index
            rating_T1_keys.tStart = t  # local t and not account for scr refresh
            rating_T1_keys.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_T1_keys, 'tStartRefresh')  # time at next scr refresh
            rating_T1_keys.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(rating_T1_keys.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(rating_T1_keys.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if rating_T1_keys.status == STARTED and not waitOnFlip:
            theseKeys = rating_T1_keys.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _rating_T1_keys_allKeys.extend(theseKeys)
            if len(_rating_T1_keys_allKeys):
                rating_T1_keys.keys = _rating_T1_keys_allKeys[-1].name  # just the last key pressed
                rating_T1_keys.rt = _rating_T1_keys_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *slider_image* updates
        if slider_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_image.frameNStart = frameN  # exact frame index
            slider_image.tStart = t  # local t and not account for scr refresh
            slider_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_image, 'tStartRefresh')  # time at next scr refresh
            slider_image.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in image1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "image1"-------
    for thisComponent in image1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # 将按键转换为数字评分
    if rating_T1_keys.keys:
        t1_rating = int(rating_T1_keys.keys)
    else:
        t1_rating = None
    
    # 保存评分到全局字典
    T1_ratings[str(thisTrial['identity'])] = t1_rating
    
    # 保存评分到数据文件
    thisExp.addData('rating_T1', t1_rating)
    trials.addData('image_t1.started', image_t1.tStartRefresh)
    trials.addData('image_t1.stopped', image_t1.tStopRefresh)
    # check responses
    if rating_T1_keys.keys in ['', [], None]:  # No response was made
        rating_T1_keys.keys = None
    trials.addData('rating_T1_keys.keys',rating_T1_keys.keys)
    if rating_T1_keys.keys != None:  # we had a response
        trials.addData('rating_T1_keys.rt', rating_T1_keys.rt)
    trials.addData('rating_T1_keys.started', rating_T1_keys.tStartRefresh)
    trials.addData('rating_T1_keys.stopped', rating_T1_keys.tStopRefresh)
    trials.addData('slider_image.started', slider_image.tStartRefresh)
    trials.addData('slider_image.stopped', slider_image.tStopRefresh)
    # the Routine "image1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fixation_text]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_text* updates
        if fixation_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_text.frameNStart = frameN  # exact frame index
            fixation_text.tStart = t  # local t and not account for scr refresh
            fixation_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_text, 'tStartRefresh')  # time at next scr refresh
            fixation_text.setAutoDraw(True)
        if fixation_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fixation_text.tStop = t  # not accounting for scr refresh
                fixation_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_text, 'tStopRefresh')  # time at next scr refresh
                fixation_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_text.started', fixation_text.tStartRefresh)
    trials.addData('fixation_text.stopped', fixation_text.tStopRefresh)
    
    # ------Prepare to start Routine "confidence_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    confidence_T1_keys.keys = []
    confidence_T1_keys.rt = []
    _confidence_T1_keys_allKeys = []
    # keep track of which components have finished
    confidence_1Components = [confidence_T1_text, confidence_T1_keys, slider_confidence_t1]
    for thisComponent in confidence_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    confidence_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "confidence_1"-------
    while continueRoutine:
        # get current time
        t = confidence_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=confidence_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *confidence_T1_text* updates
        if confidence_T1_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            confidence_T1_text.frameNStart = frameN  # exact frame index
            confidence_T1_text.tStart = t  # local t and not account for scr refresh
            confidence_T1_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(confidence_T1_text, 'tStartRefresh')  # time at next scr refresh
            confidence_T1_text.setAutoDraw(True)
        
        # *confidence_T1_keys* updates
        waitOnFlip = False
        if confidence_T1_keys.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            confidence_T1_keys.frameNStart = frameN  # exact frame index
            confidence_T1_keys.tStart = t  # local t and not account for scr refresh
            confidence_T1_keys.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(confidence_T1_keys, 'tStartRefresh')  # time at next scr refresh
            confidence_T1_keys.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(confidence_T1_keys.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(confidence_T1_keys.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if confidence_T1_keys.status == STARTED and not waitOnFlip:
            theseKeys = confidence_T1_keys.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _confidence_T1_keys_allKeys.extend(theseKeys)
            if len(_confidence_T1_keys_allKeys):
                confidence_T1_keys.keys = _confidence_T1_keys_allKeys[-1].name  # just the last key pressed
                confidence_T1_keys.rt = _confidence_T1_keys_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *slider_confidence_t1* updates
        if slider_confidence_t1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_confidence_t1.frameNStart = frameN  # exact frame index
            slider_confidence_t1.tStart = t  # local t and not account for scr refresh
            slider_confidence_t1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_confidence_t1, 'tStartRefresh')  # time at next scr refresh
            slider_confidence_t1.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in confidence_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "confidence_1"-------
    for thisComponent in confidence_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('confidence_T1_text.started', confidence_T1_text.tStartRefresh)
    trials.addData('confidence_T1_text.stopped', confidence_T1_text.tStopRefresh)
    # check responses
    if confidence_T1_keys.keys in ['', [], None]:  # No response was made
        confidence_T1_keys.keys = None
    trials.addData('confidence_T1_keys.keys',confidence_T1_keys.keys)
    if confidence_T1_keys.keys != None:  # we had a response
        trials.addData('confidence_T1_keys.rt', confidence_T1_keys.rt)
    trials.addData('confidence_T1_keys.started', confidence_T1_keys.tStartRefresh)
    trials.addData('confidence_T1_keys.stopped', confidence_T1_keys.tStopRefresh)
    trials.addData('slider_confidence_t1.started', slider_confidence_t1.tStartRefresh)
    trials.addData('slider_confidence_t1.stopped', slider_confidence_t1.tStopRefresh)
    if confidence_T1_keys.keys:
        conf_rating = int(confidence_T1_keys.keys)
    else:
        conf_rating = None
    
    # 保存确定性评分
    T1_confidence[str(thisTrial['identity'])] = conf_rating
    thisExp.addData('confidence_T1', conf_rating)
    # the Routine "confidence_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fixation_text]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_text* updates
        if fixation_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_text.frameNStart = frameN  # exact frame index
            fixation_text.tStart = t  # local t and not account for scr refresh
            fixation_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_text, 'tStartRefresh')  # time at next scr refresh
            fixation_text.setAutoDraw(True)
        if fixation_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fixation_text.tStop = t  # not accounting for scr refresh
                fixation_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_text, 'tStopRefresh')  # time at next scr refresh
                fixation_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_text.started', fixation_text.tStartRefresh)
    trials.addData('fixation_text.stopped', fixation_text.tStopRefresh)
    
    # ------Prepare to start Routine "image2"-------
    continueRoutine = True
    # update component parameters for each repeat
    # Begin Routine
    
    
    # 根据条件决定显示哪张图片
    if thisTrial['condition'] == 1:
        current_img = thisTrial['low_trust_img']  # 低可信面孔
    else:
        current_img = thisTrial['high_trust_img']  # 高可信面孔
        
    # 记录当前trial的第二张图片
    thisExp.addData('second_image', current_img)
    image_t2.setImage(current_img)
    rating_T2_keys.keys = []
    rating_T2_keys.rt = []
    _rating_T2_keys_allKeys = []
    # keep track of which components have finished
    image2Components = [image_t2, rating_T2_keys, slider_image_t2]
    for thisComponent in image2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    image2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "image2"-------
    while continueRoutine:
        # get current time
        t = image2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=image2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_t2* updates
        if image_t2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_t2.frameNStart = frameN  # exact frame index
            image_t2.tStart = t  # local t and not account for scr refresh
            image_t2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_t2, 'tStartRefresh')  # time at next scr refresh
            image_t2.setAutoDraw(True)
        
        # *rating_T2_keys* updates
        waitOnFlip = False
        if rating_T2_keys.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_T2_keys.frameNStart = frameN  # exact frame index
            rating_T2_keys.tStart = t  # local t and not account for scr refresh
            rating_T2_keys.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_T2_keys, 'tStartRefresh')  # time at next scr refresh
            rating_T2_keys.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(rating_T2_keys.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(rating_T2_keys.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if rating_T2_keys.status == STARTED and not waitOnFlip:
            theseKeys = rating_T2_keys.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _rating_T2_keys_allKeys.extend(theseKeys)
            if len(_rating_T2_keys_allKeys):
                rating_T2_keys.keys = _rating_T2_keys_allKeys[-1].name  # just the last key pressed
                rating_T2_keys.rt = _rating_T2_keys_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *slider_image_t2* updates
        if slider_image_t2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_image_t2.frameNStart = frameN  # exact frame index
            slider_image_t2.tStart = t  # local t and not account for scr refresh
            slider_image_t2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_image_t2, 'tStartRefresh')  # time at next scr refresh
            slider_image_t2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in image2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "image2"-------
    for thisComponent in image2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # End Routine
    # 获取T1的评分
    t1_rating = T1_ratings[str(thisTrial['identity'])]
    
    # 获取T2评分
    if rating_T2_keys.keys:
        t2_rating = int(rating_T2_keys.keys)
    else:
        t2_rating = None
    
    # 计算评分变化（需要防止None值）
    if t1_rating is not None and t2_rating is not None:
        rating_change = t2_rating - t1_rating
    else:
        rating_change = None
    
    # 保存数据
    thisExp.addData('rating_T2', t2_rating)
    thisExp.addData('rating_change', rating_change)
    trials.addData('image_t2.started', image_t2.tStartRefresh)
    trials.addData('image_t2.stopped', image_t2.tStopRefresh)
    # check responses
    if rating_T2_keys.keys in ['', [], None]:  # No response was made
        rating_T2_keys.keys = None
    trials.addData('rating_T2_keys.keys',rating_T2_keys.keys)
    if rating_T2_keys.keys != None:  # we had a response
        trials.addData('rating_T2_keys.rt', rating_T2_keys.rt)
    trials.addData('rating_T2_keys.started', rating_T2_keys.tStartRefresh)
    trials.addData('rating_T2_keys.stopped', rating_T2_keys.tStopRefresh)
    trials.addData('slider_image_t2.started', slider_image_t2.tStartRefresh)
    trials.addData('slider_image_t2.stopped', slider_image_t2.tStopRefresh)
    # the Routine "image2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fixation_text]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_text* updates
        if fixation_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_text.frameNStart = frameN  # exact frame index
            fixation_text.tStart = t  # local t and not account for scr refresh
            fixation_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_text, 'tStartRefresh')  # time at next scr refresh
            fixation_text.setAutoDraw(True)
        if fixation_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fixation_text.tStop = t  # not accounting for scr refresh
                fixation_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_text, 'tStopRefresh')  # time at next scr refresh
                fixation_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_text.started', fixation_text.tStartRefresh)
    trials.addData('fixation_text.stopped', fixation_text.tStopRefresh)
    
    # ------Prepare to start Routine "confidence_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    confidence_T2_keys.keys = []
    confidence_T2_keys.rt = []
    _confidence_T2_keys_allKeys = []
    # keep track of which components have finished
    confidence_2Components = [confidence2_text, confidence_T2_keys, slider_confidence_t2]
    for thisComponent in confidence_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    confidence_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "confidence_2"-------
    while continueRoutine:
        # get current time
        t = confidence_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=confidence_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *confidence2_text* updates
        if confidence2_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            confidence2_text.frameNStart = frameN  # exact frame index
            confidence2_text.tStart = t  # local t and not account for scr refresh
            confidence2_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(confidence2_text, 'tStartRefresh')  # time at next scr refresh
            confidence2_text.setAutoDraw(True)
        
        # *confidence_T2_keys* updates
        waitOnFlip = False
        if confidence_T2_keys.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            confidence_T2_keys.frameNStart = frameN  # exact frame index
            confidence_T2_keys.tStart = t  # local t and not account for scr refresh
            confidence_T2_keys.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(confidence_T2_keys, 'tStartRefresh')  # time at next scr refresh
            confidence_T2_keys.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(confidence_T2_keys.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(confidence_T2_keys.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if confidence_T2_keys.status == STARTED and not waitOnFlip:
            theseKeys = confidence_T2_keys.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease=False)
            _confidence_T2_keys_allKeys.extend(theseKeys)
            if len(_confidence_T2_keys_allKeys):
                confidence_T2_keys.keys = _confidence_T2_keys_allKeys[-1].name  # just the last key pressed
                confidence_T2_keys.rt = _confidence_T2_keys_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *slider_confidence_t2* updates
        if slider_confidence_t2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_confidence_t2.frameNStart = frameN  # exact frame index
            slider_confidence_t2.tStart = t  # local t and not account for scr refresh
            slider_confidence_t2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_confidence_t2, 'tStartRefresh')  # time at next scr refresh
            slider_confidence_t2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in confidence_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "confidence_2"-------
    for thisComponent in confidence_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('confidence2_text.started', confidence2_text.tStartRefresh)
    trials.addData('confidence2_text.stopped', confidence2_text.tStopRefresh)
    # check responses
    if confidence_T2_keys.keys in ['', [], None]:  # No response was made
        confidence_T2_keys.keys = None
    trials.addData('confidence_T2_keys.keys',confidence_T2_keys.keys)
    if confidence_T2_keys.keys != None:  # we had a response
        trials.addData('confidence_T2_keys.rt', confidence_T2_keys.rt)
    trials.addData('confidence_T2_keys.started', confidence_T2_keys.tStartRefresh)
    trials.addData('confidence_T2_keys.stopped', confidence_T2_keys.tStopRefresh)
    trials.addData('slider_confidence_t2.started', slider_confidence_t2.tStartRefresh)
    trials.addData('slider_confidence_t2.stopped', slider_confidence_t2.tStopRefresh)
    if confidence_T2_keys.keys:
        conf_rating = int(confidence_T2_keys.keys)
    else:
        conf_rating = None
    
    # 获取T1评分的确定性
    t1_conf = T1_confidence.get(str(thisTrial['identity']), None)
    
    # 计算确定性变化
    if t1_conf is not None and conf_rating is not None:
        conf_change = conf_rating - t1_conf
    else:
        conf_change = None
    
    # 保存数据
    thisExp.addData('confidence_T2', conf_rating)
    thisExp.addData('confidence_change', conf_change)
    # the Routine "confidence_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
end_key_resp.keys = []
end_key_resp.rt = []
_end_key_resp_allKeys = []
# keep track of which components have finished
endComponents = [end_text, end_key_resp]
for thisComponent in endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end"-------
while continueRoutine:
    # get current time
    t = endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end_text* updates
    if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_text.frameNStart = frameN  # exact frame index
        end_text.tStart = t  # local t and not account for scr refresh
        end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
        end_text.setAutoDraw(True)
    
    # *end_key_resp* updates
    waitOnFlip = False
    if end_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_key_resp.frameNStart = frameN  # exact frame index
        end_key_resp.tStart = t  # local t and not account for scr refresh
        end_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_key_resp, 'tStartRefresh')  # time at next scr refresh
        end_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = end_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _end_key_resp_allKeys.extend(theseKeys)
        if len(_end_key_resp_allKeys):
            end_key_resp.keys = _end_key_resp_allKeys[-1].name  # just the last key pressed
            end_key_resp.rt = _end_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('end_text.started', end_text.tStartRefresh)
thisExp.addData('end_text.stopped', end_text.tStopRefresh)
# check responses
if end_key_resp.keys in ['', [], None]:  # No response was made
    end_key_resp.keys = None
thisExp.addData('end_key_resp.keys',end_key_resp.keys)
if end_key_resp.keys != None:  # we had a response
    thisExp.addData('end_key_resp.rt', end_key_resp.rt)
thisExp.addData('end_key_resp.started', end_key_resp.tStartRefresh)
thisExp.addData('end_key_resp.stopped', end_key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
