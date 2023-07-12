import Image from 'next/image'

const Footer = () => {
  return (
    <footer id='footer' className='relative overflow-hidden -z-10 '>
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
        className='hidden tablet:hidden laptop:block w-full bg-no-repeat'
      />
      <div className='absolute inset-0 bg-clr-teal opacity-90 '></div>
      <div className='flex flex-col laptop:flex-row justify-center items-center text-center z-10]'>
        <h4 className='absolute text-lg text-clr-white font-redHat font-black  top-20 '>
          Experience more together
        </h4>
        <p className='absolute font-redHat text-clr-white top-48 px-6 max-w-xs'>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className='absolute text-sm font-redHat font-bold text-white bg-clr-purple px-7 py-4 rounded-full top-80'>
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
