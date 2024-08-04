"use client"

import { useGlobalContext } from '@/app/context/store'
import ControlPanel from '@/components/ControlPanel';
import Login from '@/components/Login';

const Profile = () => {
  const {flag} =useGlobalContext();

  return (
    <div className="mt-20">
      {flag?(<ControlPanel/>):(<Login/>)}
    </div>
  )
}

export default Profile

