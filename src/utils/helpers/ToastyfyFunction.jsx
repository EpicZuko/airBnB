import { toast } from 'react-toastify'

export const showSuccessMessage = (message) => {
   toast.success(message, { status: 'success' })
}
export const showErrorMessage = (message) => {
   toast.error(message, { status: 'error' })
}
export const showInfoMessage = (message) => {
   toast.info(message, { status: 'info' })
}
export const showWarningMessage = (message) => {
   toast.warning(message, { status: 'warning' })
}
toast('This is a custom toast Notification!', {
   position: toast.POSITION.BOTTOM_LEFT,
   className: 'toast-message',
})
