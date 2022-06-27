import { Circles, Rings } from  'react-loader-spinner'
import React,{FC, useEffect} from 'react'

const Loadingpage:FC = () => {
    return (
      <div className='loader'>
          <Rings color="#00BFFF" height={200} width={200}/>
      </div>
    )
  }

  export default Loadingpage