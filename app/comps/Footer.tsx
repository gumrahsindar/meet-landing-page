import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      id='footer'
      className='relative overflow-hidden max-h-[500px] laptop:max-h-80'
    >
      <img
        src='/assets/mobile/image-footer.jpg'
        alt='footer'
        className='tablet:hidden w-full bg-no-repeat'
      />
      <img
        src='/assets/tablet/image-footer.jpg'
        alt='footer'
        className='hidden tablet:block laptop:hidden object-contain w-full'
      />
      <img
        src='/assets/desktop/image-footer.jpg'
        alt='footer'
        className='hidden tablet:hidden laptop:block w-full bg-no-repeat bg-cover'
      />
      <div className='absolute inset-0 bg-clr-teal opacity-90 '></div>
      <div className='flex flex-col laptop:flex-row laptop:justify-evenly justify-center items-center text-center'>
        <h4 className='absolute text-lg tablet:text-xl text-clr-white font-redHat font-black top-20 laptop:left-36 laptop:top-28 max-w-sm laptop:max-w-sm'>
          Experience more together
        </h4>
        <p className='absolute font-redHat text-clr-white top-52 px-6 max-w-xl laptop:max-w-xs laptop:top-28 laptop:text-left'>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className='absolute text-sm font-redHat font-bold text-white bg-clr-purple px-10 py-4 rounded-full top-80 laptop:right-56 laptop:top-28 z-30 hover:bg-[#B18BDD] duration-200 '>
          Download{' '}
          <span className='text-sm font-redHat font-black text-clr-pink'>
            v1.3
          </span>
        </button>
      </div>
    </footer>
  )
}
export default Footer
