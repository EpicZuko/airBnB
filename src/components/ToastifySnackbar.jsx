import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import styled from 'styled-components'

const contextClass = {
   success: 'bg-green-600',
   error: 'bg-pink-600',
   default: 'bg-indigo-600',
   dark: 'bg-white-600 font-gray-300',
}
const ToastifySnackbar = () => {
   //    const { status } = props
   //    const style = {
   //       height: '20px',
   //       width: '290px',
   //    }
   //    if (status === 'success') {
   //       style.backgroundColor = '#8639B5'
   //       style.color = '#328048'
   //    } else if (status === 'error') {
   //       style.backgroundColor = '#FFEBEB'
   //       style.color = '#f1d2d2'
   //    }
   return (
      <ToastContainer
         toastClassName={({ type }) =>
            `${
               contextClass[type || 'default']
            } relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer`
         }
         bodyClassName={() => 'text-sm font-white font-med block p-3'}
         position="bottom-left"
         //  autoClose={3000}
         //  autoClose={5000}
         //  hideProgressBar={false}
         //  newestOnTop={false}
         //  closeOnClick
         //  rtl={false}
         //  theme="colored"
         //  pauseOnFocusLoss
         //  draggable
         //  pauseOnHover
         style={{ width: '500px', height: '50px' }}
         //  toastStyle={style}
      />
   )
}
export default ToastifySnackbar
