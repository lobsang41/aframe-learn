AFRAME.registerComponent('msg', {
  schema: {},
  init: function () {
    console.log("Inicializando");
  },
  update: function () {},
  tick: function () {

  },
  remove: function () {},
  pause: function () {},
  play: function () {}
});

AFRAME.registerSystem('msg', {
  schema: {},  // System schema. Parses into `this.data`.

  init: function () {
    // Called on scene initialization.
  },

  // Other handlers and methods.
});


AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el;
  }
});


AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    console.log("Collider Added");
    this.el.addEventListener('raycaster-intersected',
    function () {
      console.log('Player hit something!');
    });
  }
});
