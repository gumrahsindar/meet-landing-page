const Hero = () => {
  return (
    <section id='hero' className='pt-12 mx-auto container'>
      <nav>
        {/* logo */}
        <img
          src='/assets/logo.svg'
          alt='logo'
          className='mx-auto mb-14 tablet:mb-28'
        />
        {/* images & introduction container */}

        <div className='flex flex-col laptop:flex-row laptop:justify-between items-center'>
          {/* images */}
          <div className='laptop:hidden mb-20 tablet:mb-20'>
            <img src='/assets/tablet/image-hero.png' alt='mobile hero image' />
          </div>
          <div className='hidden laptop:block -translate-y-14 '>
            <img
              src='/assets/desktop/image-hero-left.png'
              alt='left hero image'
              className='-translate-x-10'
            />
          </div>
          {/* introduction */}
          <div className='flex flex-col justify-center items-center px-6 laptop:px-0 text-center '>
            <h1 className='font-redHat max-w-lg text-xl font-black text-clr-black tablet:text-2xl laptop:text-3xl px-5 mb-6 laptop:mb-9 '>
              Group Chat for Everyone
            </h1>
            <p className='font-redHat  text-clr-gray text-sm laptop:text-base max-w-md '>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className='flex flex-col items-center tablet:flex-row space-y-4 tablet:space-y-0 tablet:space-x-4 mt-8'>
              <button className='text-sm font-redHat font-bold text-white bg-clr-teal px-10 py-4 rounded-full '>
                Download{' '}
                <span className='text-sm font-redHat font-black text-clr-lightBlue'>
                  v1.3
                </span>
              </button>
              <button className='text-sm font-redHat font-bold text-white bg-clr-purple px-7 py-4 rounded-full'>
                What is it?
              </button>
            </div>
          </div>
          <div className='hidden laptop:block translate-y-14 '>
            <img
              src='/assets/desktop/image-hero-right.png'
              alt='right hero image'
              className='translate-x-10'
            />
          </div>
        </div>
      </nav>
    </section>
  )
}
export default Hero
