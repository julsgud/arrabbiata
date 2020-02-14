export const requestNotificationsPermissions = () => {
  if (!('Notification' in window)) {
    alert('This browser does not support system notifications')
    return
  }

  if (Notification.permission === 'granted') return

  // @ts-ignore
  if (Notification.permission !== 'denied' || Notification.permission === 'default') {
    Notification.requestPermission().then(result => {
      if (result === 'granted') {
        new Notification('All set to receive notifications', { body: 'Start cycling!' })
      }
    })
  }
}