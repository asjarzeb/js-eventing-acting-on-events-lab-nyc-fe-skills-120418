// 1. Find the getElementById

const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this?
  
  const currentPosition = parseInt(dodger.style.left)
  // currentPosition  -? 180 ('180px' -> 180 from parseInt)
  
    dodger.style.left = currentPosition - 5 + 'px'  // (175)
    
  } else if (event.keycode === 39) {
     const currentPosition = parseInt(dodger.style.left)
  
    dodger.style.left = currentPosition + 5 + 'px'
  }
}

function moveDodgerRight() {
  const currentPosition = parseInt(dodger.style.left)
  
   dodger.style.left = currentPosition + 5 + 'px'
}

// 2. Add eventListener

document.addEventListener('keydown', onKeyDown)


