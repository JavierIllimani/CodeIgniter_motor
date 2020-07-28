/*Nombre: Javier Omar Illimani Yupanqui. fecha:27/07/2020 materia:inf 324
        Docente: Moises Martin Silva Choque 
        PREGUNTA 3 DEL EXAMEN: DIBUJAR MUÑECO DE NIEVE*/
var camera, scene, renderer;  
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(4,4,120);
    //camera.position.set(4,4,100);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
    
    //creando la escena
    scene = new THREE.Scene();
    // dando luz al escenario
        scene.add( light );
        scene.add( ambientLight );
    
    
    // el cuerpo
    var geometry = new THREE.SphereGeometry(   22, 20, 20 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(0,-24,0);
    //añadiendo el objeto al escenario
    scene.add( sphere );
    
    // la cabeza
    var geometry = new THREE.SphereGeometry(  15 , 13, 20 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(0,10,0);
    //añadiendo
	scene.add( sphere );
        
	
    // ojo izquierdo
    var geometry = new THREE.SphereGeometry(  2 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(-4,12,14);
    //añadiendo
	scene.add( sphere );
    
    //ojo derecho 
    var geometry = new THREE.SphereGeometry(  2 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(4,12,14);
    //añadiendo
	scene.add( sphere );
    
     
    //iris derecho
    var geometry = new THREE.SphereGeometry(  1 , 8, 30 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(4,12,16);
    //añadiendo
	scene.add( sphere );
    
    
    //iris izquierdo
    var geometry = new THREE.SphereGeometry(  1 , 8, 30 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(-4,12,16);
    //añadiendo
	scene.add( sphere );
    
    //nariz
    var geometry = new THREE.SphereGeometry(  2 , 7, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0xE4FA05} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(0,8,14);
    //añadiendo
	scene.add( sphere );

    //cachete izquierdo
    var geometry = new THREE.SphereGeometry(  2 , 7, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0xE84D9F} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(-8,8,12);
    //añadiendo
	scene.add( sphere );
    
    //cachete derecho
    var geometry = new THREE.SphereGeometry(  2 , 7, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0xE84D9F} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(8,8,12);
    //añadiendo
	scene.add( sphere );
	
    // sonrisa
    
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(-4,4,14);
    //añadiendo
	scene.add( sphere );
    
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(-2,3,14);
	scene.add( sphere );
    
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(0,3,14);
	scene.add( sphere );
    
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(2,3,14);
	scene.add( sphere );
    
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(4,4,14);
	scene.add( sphere );
  
    
    //bolitas del estomago
    
    //1
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(0,-16,21);
    //añadiendo
	scene.add( sphere );
    
    //2
    var geometry = new THREE.SphereGeometry(  1 , 4, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(0,-22,22);
    //añadiendo
	scene.add( sphere );
    
    //3
    var geometry = new THREE.SphereGeometry(  1 , 4, 4 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var sphere = new THREE.Mesh( geometry, material);
    sphere.position.set(0,-28,22);
    //añadiendo
	scene.add( sphere );

    
    // poner brazos
    function CustomSinCurve( scale ) {

	THREE.Curve.call( this );

	this.scale = ( scale === undefined ) ? 1 : scale;

    }

    CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
    CustomSinCurve.prototype.constructor = CustomSinCurve;

    CustomSinCurve.prototype.getPoint = function ( t ) {

        var tx = t * 3 - 1.5;
        var ty = Math.sin( 2 * Math.PI * t );
        var tz = 0;

        return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

    };

    //primer brazo
    var path = new CustomSinCurve( 5 );
    var geometry = new THREE.TubeGeometry( path, 100, 1, 5, false );
    var material = new THREE.MeshBasicMaterial( { color: 4E0808 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(-22,-12,2);
    scene.add( mesh );
    
    //segundo brazo
    
    var path = new CustomSinCurve( 5 );
    var geometry = new THREE.TubeGeometry( path, 100, 1, 5, false );
    var material = new THREE.MeshBasicMaterial( { color: 4E0808 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(24,-16,2);
    scene.add( mesh );
    
    // cilindro plano
    var geometry = new THREE.CylinderGeometry( 18, 18, 0, 40 );
    var material = new THREE.MeshBasicMaterial( {color: 0x060606} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(0,23,0);
    scene.add( cylinder );
    
    
    // cilindro sombrero
    var geometry = new THREE.CylinderGeometry( 5, 10, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(0,33,0);
    scene.add( cylinder );
    
    


}



function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
