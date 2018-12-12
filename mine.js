document.addEventListener('DOMContentLoaded', function () {
  loadStates()
  bindStateChanges()
})

const loadStates = () => {
  document.querySelectorAll('input').forEach(function (e) {
    persistance.reload(e)
  })
}

const bindStateChanges = () => {
  document.querySelectorAll('input').forEach(
    (e) => e.addEventListener('change', (ev) => persistance.persist(ev.target))
  )
}

persistance = {
  'persist': (e) => localStorage.setItem(e.getAttribute('name'), e.checked),
  'reload' : (e) => e.checked = (localStorage.getItem(e.getAttribute('name')) === 'true')
}
