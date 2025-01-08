import imgStarGreen from '../assets/images/star-green.png'
import imgStarGray from '../assets/images/star-gray.png'



export function Pessoas({ name, data, comment }) {
    return (
        <>
            <div className='m-10'>
                    <h1 className='text-text-white text-xl font-bold'>{name}</h1>
                    <p className='text-tertiary-text text-xs font-light'>{data}</p>

                    <div className='flex gap-1 mt-2'> 
                        <img src={imgStarGreen} alt="" className='w-6 h-6'/>
                        <img src={imgStarGreen} alt="" className='w-6 h-6'/>
                        <img src={imgStarGreen} alt="" className='w-6 h-6'/>
                        <img src={imgStarGreen} alt="" className='w-6 h-6'/>
                        <img src={imgStarGreen} alt="" className='w-6 h-6'/>
                    </div>

                    <p className='text-text-white text-base font-light mt-3'>{comment}</p>
                    <hr className='mt-10 text-[#525252]'/>
            </div>
        </>
    )
}