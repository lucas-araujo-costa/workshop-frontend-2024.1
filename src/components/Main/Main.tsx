import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Main() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows`)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='flex flex-wrap w-full'>
      {data.map((item) => {
        return <div className='flex flex-col w-1/5 gap-3 m-10 items-center justify-between'>
          <h1 className='font-bold text-xl'>{item.name}</h1>
          <Image className='rounded-sm' src={item.image.medium} width={200} height={200} alt='' />
          <p className='text-xs'>{item.summary.replace(/(<([^>]+)>)/ig, '')}</p>
          <div className='flex items-center gap-1'>
            <FaStar />
            <p>{item.rating.average}</p>
          </div>
          <p className='text-sm'>Data de lançamento: {item.premiered.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1')}</p>
        </div>
      })}
    </div>
  )
}
