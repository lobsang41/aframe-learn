
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
        'c_up': 'changeTask',
        'p_up': 'fanny'
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
        'c_up': 'changeTask',
        'p_up': 'fanny'
      }
    }
  }
};
// Se registran las teclas / botones de los controles
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
  var EnemyTimerInterval = setInterval(EnemyCubeTimer, 1000);
  EnemyCubeTimer();





  //binding
  scene.addEventListener('changeTask', function(evt) {
    SpawnEnemyCube();
  });
  // binding
  scene.addEventListener('fanny', function(evt) {
    var el = scene.components.pool__enemy.requestEntity();

    el.setAttribute('moveup',{message : "hello"});

    el.setAttribute('animation', { 'property': 'position',
                                     'from': StartPos,
                                     'to': destinationStr,
                                     'autoplay': true,
                                     dur: 10000});
    //animation="property: position; dir: alternate; dur: 3000; easing: easeInSine; to: -1 20 -3"
    //el.setAttribute('animation',{property: "position",dir:"alternate",dur:"3000",easing:"easeInSine",to:"-1 20 -3"});
  });

}

function SpawnEnemyCube(){
  var EnemyCube = document.createElement('a-entity');
  console.log("Spawneando enemigo");

  // Use the mixin to make it a voxel.
  EnemyCube.setAttribute('mixin', 'enemy');

  EnemyCube.setAttribute('moveup',{message : "hello"});

  var destinationStr = '0 ' + 50 + ' 0';
  EnemyCube.setAttribute('animation', { 'property': 'position',
                                   'to': destinationStr,
                                   'autoplay': true,
                                   dur: 10000});
  // Set the position using intersection point. The `snap` component above which
  // is part of the mixin will snap it to the closest half meter.
  //newVoxelEl.setAttribute('position', evt.detail.intersection.point);

  // Add to the scene with `appendChild`.
  scene.appendChild(EnemyCube);

}
/////////////// pool



  /*
      scene.setAttribute('pool__' + mixinName,
          {
            size: item.poolSize,
            mixin: mixinName,
            dynamic: true
          });

          */
          /*
  returnEntity: function (name, entity) {
    var mixinName = this.groupName + name;
    var poolName = 'pool__' + mixinName;
    this.sceneEl.components[poolName].returnEntity(entity);
  },

  requestEntity: function (name) {
    var mixinName = this.groupName + name;
    var poolName = 'pool__' + mixinName;
    var entity = this.sceneEl.components[poolName].requestEntity();
    // entity.id= this.groupName + Math.floor(Math.random() * 1000);
    return entity;
  }
*/






////////////////////







function EnemyCubeTimer() {
    //SpawnEnemyCube();
}
/*
var lastBaseTimeout = null;
function EnemyCubeTimer() {

  clearTimeout(lastBaseTimeout);
  lastBaseTimeout = setTimeout(() => {
    SpawnEnemyCube();
  }, 1000);
}
*/

/*
document.querySelector('#blockHand').addEventListener(`click`, function (evt) {
  // Create a blank entity.
  var EnemyCube = document.createElement('a-entity');

  // Use the mixin to make it a voxel.
  EnemyCube.setAttribute('mixin', 'voxel');

  // Set the position using intersection point. The `snap` component above which
  // is part of the mixin will snap it to the closest half meter.
  //EnemyCube.setAttribute('position', evt.detail.intersection.point);
  EnemyCube.setAttribute('moveup');
  // Add to the scene with `appendChild`.
  this.appendChild(EnemyCube);
});
*/
