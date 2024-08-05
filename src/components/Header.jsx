import React from 'react'

function Header() {
    return (
        <div>
            <Button
                text={"SIGN IN!"}
                textColor={'text-customColors-lightPurple'}
                bgColor={'bg-white'}
                className='shadow-sm shadow-black'
                round={false}
            />
        </div>
    )
}

export default Header