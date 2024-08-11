import React from 'react'
import {HeaderOpaque,LeftPanel} from '../components/mainComponent.jsx'
import ProfileForm from '../components/ProfileForm.jsx'
function Info() {
  return (
    
    <div className="min-h-screen flex flex-col">
            <HeaderOpaque />
            <div className="flex flex-1 mt-20">
                <LeftPanel role="seller" menuItems={["Home","Your Info"]} isActive={1} />
                <main className="flex-1  ">
                    <ProfileForm/>
                </main>
            </div>
    </div>
    
  )
}

export default Info