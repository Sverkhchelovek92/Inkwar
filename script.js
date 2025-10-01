const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const cellSize = 10

const cols = Math.floor(canvas.width / cellSize)
const rows = Math.floor(canvas.height / cellSize)

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = '#ccc'
  for (let x = 0; x <= cols; x++) {
    ctx.beginPath()
    ctx.moveTo(x * cellSize, 0)
    ctx.lineTo(x * cellSize, canvas.height)
    ctx.stroke()
  }
  for (let y = 0; y <= rows; y++) {
    ctx.beginPath()
    ctx.moveTo(0, y * cellSize)
    ctx.lineTo(canvas.width, y * cellSize)
    ctx.stroke()
  }
}

drawGrid()

let currentPlayer = 1
let currentTurn = 1

const players = {
  1: { resources: 100, base: null, units: [] },
  2: { resources: 100, base: null, units: [] },
}

document.getElementById('startBtn').onclick = () => {
  document.getElementById('startPopup').style.display = 'none'
  document.getElementById('uiPanel').style.display = 'block'
  startGame()
}
document.getElementById('exitBtn').onclick = () => {
  window.location.href = 'https://google.com'
}

function updateUI() {
  document.getElementById(
    'turnInfo'
  ).textContent = `Ход игрока ${currentPlayer}`
  document.getElementById(
    'turnNumber'
  ).textContent = `Сейчас ход: ${currentTurn}`
}

document.getElementById('endTurnBtn').onclick = () => {
  if (currentPlayer === 1) {
    currentPlayer = 2
  } else {
    currentPlayer = 1
    currentTurn += 1
  }
  updateUI()
}

updateUI()
