'use client'
import Image from 'next/image'
import NavCartButton from './NavCartButton'
import NavMobileMenu from './NavMobileMenu'
import clsx from 'clsx'

const links = [
  {
    name: 'Shop all',
    href: '#'
  },
  {
    name: 'Latest arrivals',
    href: '#'
  }
]

const Nav = () => {
  return (
    <div
      className={clsx(
        'z-sticky sticky top-[5px] mx-auto h-[68px] max-w-[1216px] px-4 py-3 md:px-8 lg:h-auto xl:px-0',
        'flex items-center justify-between gap-4 lg:gap-20'
      )}
    >
      <div className='w-[163px]'>
        <Image
          src='/stylenest.svg'
          alt='Logo'
          width={105}
          height={69}
          className='w-[105px] h-[69px] rounded-lg'
        />
      </div>
      <nav className={clsx('hidden flex-1 gap-8', 'lg:flex')}>
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
      <div className='flex items-center gap-4'>
        <Nav.CartButton count={1} />
        <Nav.MobileMenu links={links} />
      </div>
    </div>
  )
}

Nav.CartButton = NavCartButton
Nav.MobileMenu = NavMobileMenu

export default Nav
