import React from 'react'
import styled from 'styled-components'
import windowBackgroundMedia from '../assets/images/Rectangle 111.png'
import windowBackground from '../assets/images/windowback.png'
import GlobalSearch from '../components/GlobalSearch'
import HeaderPhoto from '../components/HeaderPhoto'
import ToastifySnackbar from '../components/ToastifySnackbar'
import Button from '../components/UI/Button'
import Checkbox from '../components/UI/Checkbox'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../utils/helpers/ToastyfyFunction'
import MainPagefilter from './MainPagefilter'

const MainPage = () => {
   return (
      <>
         <ToastifySnackbar />
         <Div1>
            <MediaBackImg>
               <Image src={windowBackground} alt="#" />
               <Image src={windowBackgroundMedia} alt="#" />
            </MediaBackImg>
            <H1>FIND A PLACE YOU`LL LOVE TO STAY AT</H1>
            <Div2>
               <GlobalSearch
                  width="735px"
                  placeholder="Region, city, apartment, house..."
               />
               <Checkbox label="search nearby" color="#EDEDED" />
            </Div2>
         </Div1>
         <Div3>
            <Div4>
               <h2>Regions in kyrgystan</h2>
               <Button onClick={() => showSuccessMessage('success')}>
                  toast success
               </Button>
               <Button onClick={() => showErrorMessage('error')}>
                  toast error
               </Button>
               <p>
                  You can visit the site any day and be sure that you will find
                  everything for a great vacation.
               </p>
            </Div4>
            <HeaderPhoto />
         </Div3>
         <MainPagefilter />
      </>
   )
}
export default React.memo(MainPage)

const Div1 = styled.div`
   text-align: center;
   margin-top: 277px;
`
const Div2 = styled.div`
   display: flex;
   width: 725px;
   margin: 0 auto;
   flex-direction: column;
   align-items: flex-end;
   @media screen and (max-width: 375px) {
      overflow: hidden;
      width: 343px;
   }
`
const Div3 = styled.div`
   width: 1240px;
   margin: 0 auto;
   & > :nth-child(3) {
      display: none;
   }
   @media screen and (max-width: 375px) {
      width: 343px;
      overflow: hidden;
      margin: 0 auto;
      & > :nth-child(2) {
         display: none;
      }
      & > :nth-child(3) {
         display: flex;
         align-items: center;
         flex-direction: column;
         width: 343px;
      }
   }
`
const Div4 = styled.div`
   margin-top: 451px;
   & > :nth-child(1) {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #363636;
   }
   & > :nth-child(2) {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #363636;
      margin-top: 14px;
   }
`
const MediaBackImg = styled.div`
   & > :nth-child(1) {
      display: block;
   }
   & > :nth-child(2) {
      display: none;
   }
   @media screen and (max-width: 375px) {
      & > :nth-child(1) {
         display: none;
      }
      & > :nth-child(2) {
         display: block;
      }
   }
`
const Image = styled.img`
   padding: 0;
   width: 100%;
   height: 820px;
   z-index: -1;
   position: absolute;
   top: 0;
   left: 0;
`
// const Container = styled.div`
//    width: 725px;
//    @media screen and (max-width: 375px) {
//       width: 343px;
//       height: 42px;
//       overflow: hidden;
//    }
// `
const H1 = styled.h1`
   font-family: 'Jenriv Titling';
   font-style: normal;
   font-weight: 400;
   font-size: 37px;
   line-height: 48px;
   margin-bottom: 50px;
   text-transform: uppercase;
   color: #ffffff;
   @media screen and (max-width: 375px) {
      font-weight: 400;
      font-size: 26px;
      line-height: 31px;
   }
`
