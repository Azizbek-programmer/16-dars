import React from 'react'

const BookView = ({data}) => {
  return (
    <div className='grid grid-cols-5 gap-3'>
      {
        data?.map((book) =>(
      <div  key={book.id} className='p-4 bg-slate-100 rounded-xl'>
        <div className='w-full h-52 bg-slate-300 rounded-xl'></div>
        <div>
          <h3 className='text-xl'>nomi: {book.name}</h3>
          <strong>tafsif: {book.destcript}</strong><br />
          <strong>narxi: {book.price}$</strong>
          <h4>davlat: {book.country}</h4>
          <h5>halolmi ? {book.isHalal}</h5>
          <div className='flex gap-2 mt-2'>
            {
              book?.categorys?.map((item, inx) => (
                <span key={inx} className='bg-slate-300 px-3 text-sm rounded-xl'>#{item}</span>
              ))
            }
          </div>
        </div>
      </div>
        ))
      }
    </div>
  )
}

export default BookView