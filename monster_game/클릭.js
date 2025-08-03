<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>몬스터 잡기 게임</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>몬스터 잡기 게임</h1>
  <div id="controls">
    <div id="scoreBoard">점수: <span id="score">0</span></div>
    <button id="startBtn">게임 시작</button>
  </div>
  <div id="gameArea"></div>

  <!-- JavaScript를 DOM 파싱 후 실행하도록 defer 속성 추가 -->
  <script src="script.js" defer></script>

  <!--
  파일 구조:
  - index.html
  - style.css
  - script.js
  -->
</body>
</html>
