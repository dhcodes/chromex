setInterval(function() {
    console.log("Button is: ")
    var button = document.getElementsByClassName('timer')[1]
    if (button.hasAttribute('href')){
      document.getElementsByClassName('timer')[1].click()
      console.log('clicked')
    }
    else {
      console.log("not ready")
    }
  }, 5000)
