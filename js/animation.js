AFRAME.registerComponent('moveup', {
  schema: {
    message: {type: 'string', default: 'Hello, World!'}
},
  init: function () {
        var scene = document.querySelector('a-scene');
        var el = this.el;
        var xPosition = Math.floor((Math.random() * -8) + 1);
        var zPosition = Math.floor((Math.random() * -8) + 1);

        var pos = {x: xPosition, y: 0, z: zPosition}
        var endPos = {x: xPosition, y: 50, z: zPosition}
        //var pos = el.object3D.position.set(xPosition,0,zPosition);
        //el.setAttribute('position',{x: xPosition, y: 0, z : zPosition});
        el.setAttribute('position',pos);
      ///  animation__position="property: position; dir: alternate; dur: 3000;easing: easeInSine; loop: false;"
        //console.log(el.getAttribute('animation').to);
        //el.setAttribute('animation',{dir: "alternate", dur:3000 , to: {x: xPosition , y: 50, z: zPosition}});
        el.setAttribute('animation',{autoplay : true,dir: "alternate", dur:3000 ,easing:'easeInSine', to: endPos});

        /*
       el.setAttribute('animation__position', {'dir': 'alternate'});
       el.setAttribute('animation__position', { 'dur': 3000});
       el.setAttribute('animation__position', { 'easing': 'easeInSine'});
       el.setAttribute('animation__position', { 'loop': false});
       el.setAttribute('animation__position', 'from', {x: xPosition, y: 0, z : zPosition});
       el.setAttribute('animation__position', 'to', {x: xPosition , y: 50, z: zPosition});
       */
        //el.setAttribute('animation__position', 'from', {x: 0 , y: 0, z: 0});
        //el.setAttribute('animation__position', 'to', {x: 0 , y: 50, z: 0});

        var lastBaseTimeout = setTimeout(() => {
            scene.components.pool__enemy.returnEntity(el)
          }, 3000);
        //this.el.setAttribute('position', {x: currentPosition.x + directionVec3.x, y: currentPosition.y + directionVec3.y, z: currentPosition.z + directionVec3.z});


        //console.log(el.getAttribute('position'));
  },


  update: function () {


  },
  tick: function () {
    console.log(" tick de moveup");
  },
  remove: function () {},
  pause: function () {},
  play: function () {}

});
