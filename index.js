// 1. Find the getElementById

const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this?
    
    console.log(dodger.style.left)
    
  }
}

// 2. Add eventListener

dodger.eventListener('keydown', onKeyDown)
