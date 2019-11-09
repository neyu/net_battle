/**
 * Created by ming on 2015/12/29.
 */
var renderer;
var scene;
var camera;
var sphereArr = [];
var highlightArr = [];
var shadeArr = [];
var shadeTexture;
var sphereTexture = [];
var highlightTexture;
var ball3DR;
var sphereNum = 0;
function add3DBall(){
    var canvasEgret = document.getElementsByTagName("canvas")[1];
    var canvas3d = document.getElementById("canvas3d");
    canvas3d.style.width = canvasEgret.style.width;
    canvas3d.style.height = canvasEgret.style.height;

    canvas3d.style.top = canvasEgret.style.top;
    canvas3d.style.bottom = canvasEgret.style.bottom;
    canvas3d.style.left = canvasEgret.style.left;
    canvas3d.style.right = canvasEgret.style.right;

    var reg = /\d+/;
    var _w = canvas3d.style.width.match(reg)[0];
    var _h = canvas3d.style.height.match(reg)[0];
    renderer = new THREE.WebGLRenderer({ canvas: canvas3d,antialias:true,alpha:true});
    renderer.setSize(_w, _h);

    scene = new THREE.Scene();

    ball3DR = 17/_rate;
    camera = new THREE.OrthographicCamera(-_w/2, _w/2, -_h/2, _h/2, 10, 2*ball3DR+30);
    camera.position.x = _w/2;
    camera.position.y = _h/2;
    camera.position.z = 20 + 2*ball3DR;
    camera.lookAt(new THREE.Vector3(_w/2,_h/2,0));

    var bgw = 1251;
    var bgh = 734;
    var bgx = 90;
    var bgy = 9;

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(bgw/_rate, bgh/_rate),new THREE.MeshLambertMaterial());
    plane.position.x = bgx/_rate + (bgw/2)/_rate;
    plane.position.y = bgy/_rate + (bgh/2)/_rate;
    plane.position.z = -2;
    plane.rotation.x = Math.PI;

    var planetextureload = new THREE.TextureLoader();
    planetextureload.load("resource/assets/bg3.png",function(texture){
        var meshMaterial = new THREE.MeshBasicMaterial();
        meshMaterial.map = texture;
        plane.material = meshMaterial;
        renderer.render(scene, camera);
    });
    scene.add(plane);

    var shadetextureload = new THREE.TextureLoader();
    shadetextureload.load("resource/assets/shader.png",function(texture){
        shadeTexture = texture;
    });

    for(var i = 0;i<16;i++)
    {
        var textureload = new THREE.TextureLoader();
        textureload.load("resource/assets/"+ i +".jpg",function(texture){
            sphereTexture[sphereNum] = texture;
            sphereNum++;
        });
    }

    var highlighttextureload = new THREE.TextureLoader();
    highlighttextureload.load("resource/assets/highlight.png",function(texture){
        highlightTexture = texture;
    });
}
function IsDifferent(){
    var canvasEgret = document.getElementsByTagName("canvas")[1];
    var canvas3d = document.getElementById("canvas3d");
    if
    (
        canvas3d.style.width != canvasEgret.style.width ||
        canvas3d.style.height != canvasEgret.style.height ||
        canvas3d.style.top != canvasEgret.style.top ||
        canvas3d.style.bottom != canvasEgret.style.bottom ||
        canvas3d.style.left != canvasEgret.style.left ||
        canvas3d.style.right != canvasEgret.style.right
    )
    {
        //location.reload();
        //canvas3d.style.width = canvasEgret.style.width;
        //canvas3d.style.height = canvasEgret.style.height;
        //
        //canvas3d.style.top = canvasEgret.style.top;
        //canvas3d.style.bottom = canvasEgret.style.bottom;
        //canvas3d.style.left = canvasEgret.style.left;
        //canvas3d.style.right = canvasEgret.style.right;
    }
}

function Refresh3DBall()
{
    sphereArr = [];
    highlightArr = [];
    shadeArr = [];
}

function create3DBall(_idx)
{
    var shade = new THREE.Mesh(new THREE.PlaneGeometry(64/_rate, 64/_rate),new THREE.MeshBasicMaterial({transparent: true}));
    shade.position.z = -1;
    shade.rotation.x = Math.PI;
    scene.add(shade);
    shadeArr.push(shade);
    var meshMaterial1 = new THREE.MeshBasicMaterial({transparent: true});
    meshMaterial1.map = shadeTexture;
    shadeArr[_idx].material = meshMaterial1;

    var sphere = new THREE.Mesh(new THREE.SphereGeometry(ball3DR, 130, 130),new THREE.MeshBasicMaterial());
    sphere.position.z = ball3DR;
    scene.add(sphere);
    sphereArr.push(sphere);
    var mat = new THREE.MeshBasicMaterial();
    mat.map = sphereTexture[_idx];
    sphereArr[_idx].material = mat;

    var highlight = new THREE.Mesh(new THREE.PlaneGeometry(64/_rate, 64/_rate),new THREE.MeshBasicMaterial({transparent: true}));
    highlight.position.z = 2*ball3DR + 1;
    highlight.rotation.x = Math.PI;
    scene.add(highlight);
    highlightArr.push(highlight);
    var meshMaterial2 = new THREE.MeshBasicMaterial({transparent: true});
    meshMaterial2.map = highlightTexture;
    highlightArr[_idx].material = meshMaterial2;
}

function setBallPos(nx,ny,cx,cy,_idx)
{
    var _nx = nx/_rate;
    var _ny = ny/_rate;
    var _cx = cx/_rate;
    var _cy = cy/_rate;

    if(_nx == _cx && _ny == _cy)
    {
        return;
    }

    shadeArr[_idx].position.x = _nx;
    shadeArr[_idx].position.y = _ny;

    sphereArr[_idx].position.x = _nx;
    sphereArr[_idx].position.y = _ny;

    highlightArr[_idx].position.x = _nx;
    highlightArr[_idx].position.y = _ny;

    var dx = _nx - _cx;
    var dy = _ny - _cy;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var _w = dist/ball3DR;

    var xAxis = new THREE.Vector3(_ny-_cy,-(_nx-_cx),0);
    rotateAroundWorldAxis(sphereArr[_idx], xAxis, _w);
}

function setBallPos1(_nx,_ny,_idx)
{
    sphereArr[_idx].position.x = _nx / _rate;
    sphereArr[_idx].position.y = _ny / _rate;
    sphereArr[_idx].rotation.z = Math.PI;

    shadeArr[_idx].position.x = _nx / _rate;
    shadeArr[_idx].position.y = _ny / _rate;

    highlightArr[_idx].position.x = _nx / _rate;
    highlightArr[_idx].position.y = _ny / _rate;
}

function setBaiPos(_nx,_ny)
{
    sphereArr[0].position.x = _nx / _rate;
    sphereArr[0].position.y = _ny / _rate;

    shadeArr[0].position.x = _nx / _rate;
    shadeArr[0].position.y = _ny / _rate;

    highlightArr[0].position.x = _nx / _rate;
    highlightArr[0].position.y = _ny / _rate;
}

function setBallScale(_s)
{
    sphereArr[0].position.scaleX = _s;
    sphereArr[0].position.scale = _s;

    shadeArr[0].position.scale = _s;
    shadeArr[0].position.y = _s;

    highlightArr[0].position.x = _s;
    highlightArr[0].position.y = _s;
}

function refreshUI()
{
    renderer.render(scene, camera);
}

function remove3DBall(_idx)
{
    scene.remove(sphereArr[_idx]);
    sphereArr.splice(_idx, 1);

    scene.remove(highlightArr[_idx]);
    highlightArr.splice(_idx, 1);

    scene.remove(shadeArr[_idx]);
    shadeArr.splice(_idx, 1);
}

function rotateAroundWorldAxis(object, axis, radians) {
    var rotWorldMatrix = new THREE.Matrix4();

    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

    rotWorldMatrix.multiply(object.matrix);

    object.matrix = rotWorldMatrix;

    object.rotation.setFromRotationMatrix(object.matrix);
}

function rotateAroundObjectAxis(object, axis, radians) {
    var rotObjectMatrix = new THREE.Matrix4();

    rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);

    object.matrix.multiply(rotObjectMatrix);

    object.rotation.setFromRotationMatrix(object.matrix);
}


