import React, { Component, createRef } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';

let renderer,camera;

// 创建相机
camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100000
);
camera.updateProjectionMatrix(); // 更新相机投影矩阵
camera.position.set(100, 100, 100); // 设置相机位置
camera.lookAt(0, 0, 0); // 设置相机焦点

// const clock = new THREE.Clock(); // 创建时钟对象Clock

// 创建渲染器
const createRender = (dom) => {
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: dom,
    antialias: true, // 开启硬件反走样
    alpha: true, // 背景透明
    precision: 'highp', // 着色精度选择
    powerPreference: 'high-performance', // 高性能模式-优先使用GPU
  }); // 创建渲染器
  renderer.gammaOutput = true; // 设置输出为sRGB格式
  renderer.physicallyCorrectLights = true; // 设置光照正确性
  renderer.setPixelRatio(window.devicePixelRatio); // 设置设备像素比 作用：防止高分屏下模糊
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器尺寸
  renderer.logarithmicDepthBuffer = true;
};

// 创建场景
const createScene = () => {
  const scene = new THREE.Scene(); // 创建场景
  scene.background = new THREE.Color(0xffffff); // 设置背景颜色
  return scene;
};

// 创建坐标轴辅助
const createAxesHelper = () => {
  const axesHelper = new THREE.AxesHelper(1000); // 创建坐标轴辅助
  return axesHelper;
};

// 创建网格辅助
const createGridHelper = () => {
  const gridHelper = new THREE.GridHelper(1000, 100); // 创建网格辅助
  gridHelper.name = 'gridHelperHelper';
  gridHelper.material.opacity = 0.2; // 设置网格透明度
  gridHelper.material.transparent = true; // 设置网格透明度
  gridHelper.position.y = 0; // 设置网格位置
  gridHelper.position.x = 0; // 设置网格位置
  gridHelper.position.z = 0; // 设置网格位置
  // gridHelper.visible = true; // 设置网格是否可见
  gridHelper.material.depthTest = true; // 设置网格材质是否深度测试
  // gridHelper.renderOrder = -1; // 设置网格渲染顺序
  return gridHelper;
};

// 射线拾取
const clickScene = (event) => {
  const raycaster = new THREE.Raycaster(); // 创建射线
  const mouse = new THREE.Vector2(); // 创建鼠标向量
  const dom = this.container.current; // 获取dom
  const rect = dom.getBoundingClientRect(); // 获取dom的尺寸和位置
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // 获取鼠标点击位置x
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // 获取鼠标点击位置y
  mouse.x = x; // 设置鼠标向量x
  mouse.y = y; // 设置鼠标向量y
  raycaster.setFromCamera(mouse, camera); // 设置射线相机和鼠标向量
  const intersects = raycaster.intersectObjects(this.scene.children, true); // 获取射线和模型相交的数组
  if (intersects.length > 0) {
    // 判断是否有相交的模型
    const obj = intersects[0].object; // 获取相交的模型
    console.log(obj);
  }
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.container = createRef(); // threejs 场景dom
    this.state = createRef(); // 性能监视器dom
    this.stats = null; // 性能监视器
    this.scene = null; // 场景
  };

  initState(dom) {
    this.stats = new Stats(); // 创建性能监视器
    this.stats.showPanel(0, 1, 2); // 0: fps:帧率, 1: ms:渲染时间, 2: mb:内存占用
    dom.appendChild(this.stats.dom);
  };

  
// 创建渲染器
 createRender(dom){
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: dom,
    antialias: true, // 开启硬件反走样
    alpha: true, // 背景透明
    precision: 'highp', // 着色精度选择
    powerPreference: 'high-performance', // 高性能模式-优先使用GPU
  }); // 创建渲染器
  renderer.gammaOutput = true; // 设置输出为sRGB格式
  renderer.physicallyCorrectLights = true; // 设置光照正确性
  renderer.setPixelRatio(window.devicePixelRatio); // 设置设备像素比 作用：防止高分屏下模糊
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器尺寸
  renderer.logarithmicDepthBuffer = true;
};

// 创建场景
 createScene ()  {
  const scene = new THREE.Scene(); // 创建场景
  scene.background = new THREE.Color(0xffffff); // 设置背景颜色
  return scene;
};

// 创建坐标轴辅助
 createAxesHelper  ()  {
  const axesHelper = new THREE.AxesHelper(1000); // 创建坐标轴辅助
  return axesHelper;
};

// 创建网格辅助
 createGridHelper () {
  const gridHelper = new THREE.GridHelper(1000, 100); // 创建网格辅助
  gridHelper.name = 'gridHelperHelper';
  gridHelper.material.opacity = 0.2; // 设置网格透明度
  gridHelper.material.transparent = true; // 设置网格透明度
  gridHelper.position.y = 0; // 设置网格位置
  gridHelper.position.x = 0; // 设置网格位置
  gridHelper.position.z = 0; // 设置网格位置
  // gridHelper.visible = true; // 设置网格是否可见
  gridHelper.material.depthTest = true; // 设置网格材质是否深度测试
  // gridHelper.renderOrder = -1; // 设置网格渲染顺序
  return gridHelper;
};

// 射线拾取
 clickScene  (event)  {
  const raycaster = new THREE.Raycaster(); // 创建射线
  const mouse = new THREE.Vector2(); // 创建鼠标向量
  const dom = this.container.current; // 获取dom
  const rect = dom.getBoundingClientRect(); // 获取dom的尺寸和位置
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // 获取鼠标点击位置x
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // 获取鼠标点击位置y
  mouse.x = x; // 设置鼠标向量x
  mouse.y = y; // 设置鼠标向量y
  raycaster.setFromCamera(mouse, camera); // 设置射线相机和鼠标向量
  const intersects = raycaster.intersectObjects(this.scene.children, true); // 获取射线和模型相交的数组
  if (intersects.length > 0) {
    // 判断是否有相交的模型
    const obj = intersects[0].object; // 获取相交的模型
    console.log(obj);
  }
};

  componentDidMount() {
    // 性能监视器
    this.initState(this.state.current);
    this.createRender(this.container.current); // 创建渲染器
    this.createGridHelper(); // 创建网格辅助
    // debugger;
    this.scene = createScene(); // 创建场景
    this.createAxesHelper(); // 创建坐标轴辅助
    const render = () => {
      // 渲染函数
      this.stats.begin(); // 开始性能监视器
      // const delta = clock.getDelta(); // 获取间隔时间
      renderer.render(this.scene, camera); // 渲染
      this.stats.end(); // 结束性能监视器
      requestAnimationFrame(render); // 请求再次执行渲染函数render
    };
    render();

    // resize自适应
    window.addEventListener(
      'resize',
      () => {
        camera.aspect = window.innerWidth / window.innerHeight; // 设置相机长宽比
        camera.updateProjectionMatrix(); // 更新相机投影矩阵
        renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器尺寸
      },
      false
    );
  }

  render() {
    return (
      //  创建threejs 场景入口
      <div className='content'>

        {/* threejs 场景 */}
        <canvas
          id='container'
          ref={this.container}
          style={{ width: '100%', height: '100%' }}
          onClick={clickScene}
        ></canvas>
        
        {/* 性能监视器 */}
        <div
          className='state'
          ref={this.state}
        ></div>
      </div>
    );
  }
}
