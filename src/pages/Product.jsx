import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import ClientApartmentCard from '../components/ClientUserApartmentCard/ClientUserApartmentCard'
import LoadingSpinner from '../components/LoadingSpinner'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import Paginations from '../components/UI/Pagination'
import SnackBar from '../components/UI/SnackBar'
import { getSelectFilterData } from '../store/slices/SelectFilterInnerPageUserActions'
import InnerPageFilterCards from './InnerPageFilterCards'

const Product = () => {
   const store = useSelector((store) => store?.selectfilterData)
   const snackbar = useSelector((store) => store.likeandbookmark)
   const [open, setopen] = useState(false)
   const [open2, setopen2] = useState(false)
   const navigate = useNavigate()
   const [path, setpath] = useSearchParams()
   const dispatch = useDispatch()
   const [data, setdata] = useState({
      regionId: '',
      kind: '',
      type: '',
      price: '',
      city: '',
      page: 1,
      size: '',
   })
   const getvalue = (e) => {
      setdata({
         ...data,
         regionId: e.regionId,
         kind: e.fetchKind,
         type: e.fetchType,
         price: e.fetchPrice,
         city: e.city,
      })
   }
   const page = (_, value) => {
      setdata({
         ...data,
         page: value,
      })
   }

   useEffect(() => {
      if (data.kind || data.type) {
         if (data.city) {
            setdata({
               ...data,
               city: path.get('city'),
               page: 1,
            })
            return
         }
         setdata({
            ...data,
            page: 1,
         })
      }
   }, [data.kind, data.type])
   useEffect(() => {
      const search = {}
      if (data.regionId) {
         search.regionId = data.regionId
      }
      if (data.city) {
         search.city = data.city
      }
      if (data.kind) {
         search.kind = data.kind
      }
      if (data.type) {
         search.type = data.type
      }
      if (data.price) {
         search.price = data.price
      }
      if (data.page) {
         search.page = data.page
      }
      setpath(search)
   }, [data.regionId, data.kind, data.type, data.price, data.page, data.city])
   useEffect(() => {
      dispatch(
         getSelectFilterData(`api/announcements/filter?${path.toString()}`)
      )
   }, [path.toString()])

   const count = Math.ceil(store.totalSizeCard / 16)
   const opensnack = () => {
      setopen(true)
   }
   const opensnack2 = () => {
      setopen2(true)
   }
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <>
         {store.status === 'pending' && <LoadingSpinner />}
         {snackbar.likestatus === 'success' && snackbar.likeordislike ? (
            <SnackBar
               open={open}
               onClose={setopen}
               severity="success"
               message="successfully added in like"
            />
         ) : (
            <SnackBar
               open={open}
               onClose={setopen}
               severity="success"
               message="successfully deleted in like"
            />
         )}
         {snackbar.likestatus === 'error' ? (
            <SnackBar open={open} onClose={setopen} message="error" />
         ) : null}
         {snackbar.postBookmarkstatus === 'success' &&
         snackbar.postBookmarkvalue ? (
            <SnackBar
               open={open2}
               onClose={setopen2}
               severity="success"
               message="successfully added in favorite"
            />
         ) : (
            <SnackBar
               open={open2}
               onClose={setopen2}
               severity="success"
               message="successfully deleted in favorite"
            />
         )}
         {snackbar.postBookmarkstatus === 'error' ? (
            <SnackBar open={open2} onClose={setopen2} message="error" />
         ) : null}

         <WrapperContainer>
            <Container>
               <BreadCrumbs location={useLocation()} />
               <InnerPageFilterCards getvalue={getvalue} />
               <WrapperCard>
                  {store?.data?.responses?.map((i) => {
                     return (
                        <WrapperBox
                           key={i.id}
                           onClick={() => navigate(`/main/catalog/${i.id}`)}
                        >
                           <ClientApartmentCard
                              data={i}
                              open={opensnack}
                              open2={opensnack2}
                           />
                        </WrapperBox>
                     )
                  })}
               </WrapperCard>
               <WrapperPagination>
                  {store.totalSizeCard > 16 ? (
                     <Paginations
                        count={count}
                        page={data.page}
                        onChange={page}
                     />
                  ) : null}
               </WrapperPagination>
            </Container>
         </WrapperContainer>
      </>
   )
}
export default React.memo(Product)

const WrapperBox = styled.div``
const WrapperPagination = styled.div`
   margin-top: 60px;
   padding-bottom: 197px;
   width: 1240px;
   display: flex;
   justify-content: center;
`
const WrapperCard = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   width: 1240px;
   gap: 20px;
`
const Container = styled.div`
   width: 1240px;
   margin: 0 auto;
   padding-top: 40px;
`
const WrapperContainer = styled.div`
   width: 100%;
   margin: 0 auto;
   min-height: 800px;
   background: #f7f7f7;
`
