import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { otpdatas } from '../redux/action/Actions'


const Otpregfun = () => {
  const dispatch = useDispatch();
  const otpdataa = useSelector((state)=> state.alldata.otp_data)
  useEffect(() => {
    
      dispatch(otpdatas())
   
  }, [])
  const arr = [2,4,3]

  console.log('this is otp dta',otpdataa)
  
  return (
    <div>Otpregfun
      {otpdataa.email}
    </div>
  )
}

export default Otpregfun