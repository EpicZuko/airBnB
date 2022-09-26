import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import ToastifySnackbar from './components/ToastifySnackbar'
import AdminRoute from './routes/AdminRoute'
import UserRoute from './routes/UserRoute'
import { LocalStorageFunction } from './utils/helpers/LocalStorageFunctions/LocalStorajeFunction'

function App() {
   const role = useSelector((store) => store.login.login)
   const roleloc = LocalStorageFunction({
      key: 'login',
      type: 'getItem',
   })
   const nav = useNavigate()
   useEffect(() => {
      if (role?.role === 'ADMIN' && roleloc?.role === 'ADMIN') {
         nav('/application')
      }
   }, [role?.role, roleloc?.role])
   return (
      <>
         <UserRoute />
         <AdminRoute />
         {/* <ToastifySnackbar /> */}
      </>
   )
}

export default App
