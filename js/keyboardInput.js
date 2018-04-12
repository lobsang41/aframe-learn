
var scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
  init();
} else {
  scene.addEventListener('loaded', init);
}
// To be exposed by the application
var inputActions = {
  task1: {
    changeTask: { label: 'Change task' },
    logdefault: { label: 'Test Log' },
    logtask1: { label: 'Test Log Task 1' },
    logtask2: { label: 'Test Log Task 2' },
    lefthand: { label: 'Left hand' },
    righthand: { label: 'Right hand' },
    longpress: { label: 'Long press' },
    doubletouch: { label: 'Double touch' },
    doublepress: { label: 'Double press' }
  },
  task2: {
    changeTask: { label: 'Change task' },
    logtask2: { label: 'Test Log Task 2' }
  }
}
AFRAME.registerInputActions(inputActions, 'task1');
// Could be defined by default by the app or the user, custom UI, external request, etc.
var mappings = {
  behaviours: {
    default: {
      'vive-controls': {
        trackpad: 'dpad'
      }
    }
  },
  mappings: {
    task1: {
      common: {
        triggerdown: {left: 'lefthand', right: 'righthand'}
      },
      'vive-controls': {
        'grip.down': 'changeTask',
        'trackpad.down': 'logtask1',
        'trackpad.doubletouch': 'doubletouch',
        'trackpad.doublepress': 'doublepress',
        // Activators for down, up, touchstart and touchend are optionals you can just write the event without the .
        'trackpaddpadleftdown': 'dpadleft',
        'trackpaddpadright.longpress': 'dpadrightlong'
      },
      'oculus-touch-controls': {
        'abutton.down': 'changeTask'
      },
      'windows-motion-controls': {
        'grip.down': 'changeTask'
      },
      keyboard: {
        't_up': 'logdefault',
        'c_up': 'changeTask'
      }
    },
    task2: {
      'vive-controls': {
        'trigger.down': 'logtask2',
        'grip.down': 'changeTask'
      },
      'oculus-touch-controls': {
        'trigger.down': 'logtask2',
        'abutton.down': 'changeTask'
      },
      'windows-motion-controls': {
        'trigger.down': 'logtask2',
        'grip.down': 'changeTask'
      },
      keyboard: {
        'y_up': 'logtask2',
        'c_up': 'changeTask'
      }
    }
  }
};
AFRAME.registerInputMappings(mappings);

var lastTimeout = null;
function drawText(message) {
  buttonsText.setAttribute('text', {value: message});
  clearTimeout(lastTimeout);
  lastTimeout = setTimeout(() => {
    buttonsText.setAttribute('text', {value: ''});
  }, 1000);
}
function init()
{




  scene.addEventListener('changeTask', function(evt) {

    console.log("Key c Pressed");


  });

}
