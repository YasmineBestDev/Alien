window.addEventListener('DOMContentLoaded', main() {
    
    var canvas = document.getElementById('canvas');
    var Engine = new BABYLON.Engine(canvas, true);
    var createScene = function() {

        var scene = new BABYLON.Scene(Engine);
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        var camera = new BABYLON.FreeCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);

    }

    });
