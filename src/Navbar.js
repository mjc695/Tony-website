import React from 'react'

const Navbar = () => {
  // const navList = [{ name: 'facebook', link: 'https://www.facebook.com/profile.php?id=100010560219319' }, { name: 'soundcloud', link: 'https://www.google.com' },]
  return (
    <div className='navbar'>
      <div className='nav-list'>
        <img className='facebook-logo' src={'/facebook-logo/facebook-logo2.png'} alt={'/facebook-logo/facebook-logo2.png'} onClick={() => window.open('https://www.facebook.com/profile.php?id=100010560219319', '_blank')} />

      </div>
    </div>
  )
}

export default Navbar
