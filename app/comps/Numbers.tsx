interface NumberProps {
  number: string
  marginBottom?: string
  translateY?: string
}

const Numbers = ({ number, marginBottom, translateY }: NumberProps) => {
  return (
    <section
      id='numbers'
      className={`relative z-10 flex flex-col items-center mt-16 tablet:mt-20 laptop:mt-28 ${marginBottom} ${translateY} `}
    >
      <div className='border-l h-[84px]  border-clr-gray border-opacity-25 '></div>
      <div className='flex items-center justify-center border rounded-full  border-clr-gray border-opacity-25 bg-white z-20  w-14 h-14'>
        <p className='text-clr-gray font-redHat font-black text-sm'>{number}</p>
      </div>
    </section>
  )
}
export default Numbers
