(function (window, document) {
  var layout = document.getElementById('layout')
  var menu = document.getElementById('menu')
  var menuLink = document.getElementById('menuLink')

  function toggleClass (element, className) {
    var classes = element.className.split(/\s+/)
    var length = classes.length
    var i = 0

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1)
        break
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className)
    }

    element.className = classes.join(' ')
  }

  menuLink.onclick = function (e) {
    var active = 'active'

    e.preventDefault()
    toggleClass(layout, active)
    toggleClass(menu, active)
    toggleClass(menuLink, active)
  }
}(this, this.document))
