import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { otpdatas } from '../redux/action/action'


const Otpregfun = () => {
  const dispatch = useDispatch();
  const otpdataa = useSelector((state)=> state.otpdata_reducers.otp_data)
  useEffect(() => {
   dispatch(otpdatas())
  }, [])

  console.log('this is otp dta',otpdataa)
  
  return (
    <div>Otpregfun</div>
  )
}

export default Otpregfun