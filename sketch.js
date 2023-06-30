let positions = [];
let pointColor; // 点の色
let pointSpeed; // 点の速さ
let pointCount; // 点の数

function setup() {
  createCanvas(400, 400); // キャンバスの高さを拡張
  background('black');
  
  strokeWeight(3);
  
  // 初期値の設定
  pointColor = color('yellow');
  pointSpeed = 'medium';
  pointCount = 400;
  
  // 点の位置を初期化
  for (let i = 0; i < pointCount; i++) {
    positions.push(createVector(0, 0));
  }
  
  // UIの要素を作成
  createColorPickerUI();
  createSpeedSelectorUI();
  createPointCountRadioUI();
}

function draw() {
  translate(width / 2, height / 2); // キャンバスの中心に移動
  
  background('black');
  
  for (let i = 0; i < positions.length; i++) {
    let position = positions[i];
    stroke(pointColor); // 点の色を設定
    point(position.x, position.y);
    
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    
    // 点の速さに応じて座標の変化量を調整
    if (pointSpeed === 'slow') {
      dx *= 0.5;
      dy *= 0.5;
    } else if (pointSpeed === 'fast') {
      dx *= 2;
      dy *= 2;
    }
    
    position.x += dx;
    position.y += dy;
  }
}

// カラーピッカーを作成する関数
function createColorPickerUI() {
  let colorPicker = createColorPicker(pointColor);
  colorPicker.position(20, 420);
  colorPicker.input(function() {
    pointColor = colorPicker.color();
  });
}

// 速度選択リストを作成する関数
function createSpeedSelectorUI() {
  let speedSelector = createSelect();
  speedSelector.position(160, 420);
  speedSelector.option('slow');
  speedSelector.option('medium');
  speedSelector.option('fast');
  speedSelector.selected(pointSpeed);
  speedSelector.changed(function() {
    pointSpeed = speedSelector.value();
  });
}

// 点の数のラジオボタンを作成する関数
function createPointCountRadioUI() {
  let pointCountRadio = createRadio();
  pointCountRadio.position(300, 420);
  // pointCountRadio.option(50);
  pointCountRadio.option(200);
  pointCountRadio.option(400);
  pointCountRadio.option(800);
  pointCountRadio.selected(pointCount);
  pointCountRadio.changed(function() {
    pointCount = parseInt(pointCountRadio.value());
    updatePointPositions();
  });
}

// 点の位置を更新する関数
function updatePointPositions() {
  positions = [];
  for (let i = 0; i < pointCount; i++) {
    positions.push(createVector(0, 0));
  }
}
