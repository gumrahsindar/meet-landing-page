import Image from 'next/image'

const Features = () => {
  return (
    <section
      id='features'
      className='flex flex-col items-center px-6 tablet:px-10 space-y-16 tablet:space-y-12 laptop:space-y-20 mb-20'
    >
      {/* image-grid container */}
      <div className='grid grid-cols-2 tablet:grid-cols-4 gap-6 tablet:gap-3 laptop:gap-8 '>
        {/* image */}
        <Image
          src='/assets/desktop/image-woman-in-videocall.jpg'
          alt='woman in videocall'
          className='rounded-xl '
          width={255}
          height={255}
        />
        <Image
          src='/assets/desktop/image-women-videochatting.jpg'
          alt='women in videochatting'
          className='rounded-xl '
          width={255}
          height={255}
        />
        <Image
          src='/assets/desktop/image-men-in-meeting.jpg'
          alt='men in meeting'
          className='rounded-xl '
          width={255}
          height={255}
        />
        <Image
          src='/assets/desktop/image-man-texting.jpg'
          alt='man-texting'
          className='rounded-xl '
          width={255}
          height={255}
        />
      </div>
      {/* description container */}
      <div className='flex flex-col items-center text-center'>
        <h2 className='text-clr-teal font-redHat font-black uppercase text-sm tracking-[4px] mb-6'>
          Built for modern use
        </h2>
        <h3 className='text-lg tablet:text-xl font-redHat font-black text-clr-black mb-8 max-w-md '>
          Smarter meetings, all in one place
        </h3>
        <p className='text-sm laptop:text-base text-clr-gray max-w-lg'>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  )
}
export default Features
