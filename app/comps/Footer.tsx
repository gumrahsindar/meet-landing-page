import Image from 'next/image'

const Footer = () => {
  return (
    <footer id='footer' className='container min-w-full  overflow-hidden '>
      <div className='relative'>
        <img
          src='/assets/mobile/image-footer.jpg'
          alt='footer image'
          className='w-full  tablet:hidden'
        />
        <img
          src='/assets/tablet/image-footer.jpg'
          alt='footer image'
          className='w-full hidden tablet:block laptop:hidden'
        />
        <img
          src='/assets/desktop/image-footer.jpg'
          alt='footer image'
          className='w-full  hidden laptop:block'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-clr-teal  bg-opacity-90'>
          <div className='grid place-items-center laptop:grid-cols-3 px-6 z-10 text-center mt-32 tablet:mt-28 space-y-8 laptop:space-y-0 max-w-[1440px] mx-auto'>
            <h4 className=' text-lg tablet:text-xl text-clr-white font-redHat font-black  max-w-sm'>
              Experience more together
            </h4>
            <p className=' font-redHat text-clr-white px-6 max-w-xl'>
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <button className=' text-sm font-redHat font-bold text-white z-50 bg-opacity-100 bg-clr-purple px-10 mx-auto py-4 rounded-full hover:bg-[#B18BDD] duration-200'>
              Download{' '}
              <span className='text-sm font-redHat font-black text-clr-pink'>
                v1.3
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
