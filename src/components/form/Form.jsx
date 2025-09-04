import React, { useState } from 'react'

const Form = ({onClose, setData}) => {
  const [name, setName] = useState("")
  const [destcript, setDestcript] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [categorys, setCategorys] = useState([])
  const [country, setCountry] = useState("") 
  const [isHalal, setIsHalal] = useState(null)
  const countries = ["O'zbek", "Русский", "English",]

const handleSupmit= (e) =>{
  e.preventDefault()

  const book ={
    id: Date.now(),
    name,
    destcript,
    price,
    categorys,
    country,
    isHalal: isHalal ? "halal" : "haram"
  }
  console.log({book});
  
  setData(prev => ([...prev, book]))
  onClose()
  
}

const handleAddcategory = () =>{
  const exists = categorys.some(item => item === category)
  if(!exists && category.trim() !== ""){
    setCategorys(prev => ([...prev, category]))
    setCategory("")
  }
}

const handleHalal = (value) => {
  setIsHalal(value)
}

const handleRemovecategory = (inx) =>{
  setCategorys(prev => prev.filter((_, index) =>index !== inx))  
}

  return (
    <>
     <div className='fixed top-1/2 left-1/2 w-[450px]  bg-gray-100 -translate-1/2 rounded-2xl p-6'>
        <h2 className='text-xl font-bold'>Create foot</h2>
        <form onSubmit={handleSupmit} action="">
          <input value={name} onChange={(e) =>setName(e.target.value)} className='border w-full h-10 indent-3 rounded-lg mt-3 border-gray-200' type="text" placeholder='name' />
          <input value={destcript} onChange={(e) =>setDestcript(e.target.value)} className='border w-full h-10 indent-3 rounded-lg mt-3 border-gray-200' type="text" placeholder='destcription' />
          <input value={price} onChange={(e) =>setPrice(e.target.value)} className='border w-full h-10 indent-3 rounded-lg mt-3 border-gray-200' type="number" placeholder='price' />
          
          <div className='mt-3'>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className='border w-full h-10 rounded-lg indent-3 border-gray-200'>
              <option value="">Select country</option>
              {countries.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className='mt-3 flex gap-4'>
            <label><input type="radio" name="halal" onChange={() => handleHalal(true)} /> Halal</label>
            <label><input type="radio" name="halal" onChange={() => handleHalal(false)} /> Haram</label>
          </div>

          <div className='flex flex-wrap gap-2 mt-3'>
            {
              categorys?.map((item, index) =>(
                <div className='bg-slate-200 rounded-xl px-3 text-sm flex gap-2' key={index}>
                  <span>{item}</span>
                  <button type='button' onClick={() => handleRemovecategory(index)} className='cursor-pointer hover:text-red-500'>&#10005;</button>
                </div>
              ))
            }
          </div>
          <div className='mt-3 flex gap-1'>
            <input value={category} onChange={(e) =>setCategory(e.target.value)} className='border w-full h-10 indent-3 rounded-lg border-gray-200' type="text" placeholder='categorys' />
            <button onClick={handleAddcategory} type='button' className='bg-slate-900 text-white px-3 rounded-lg text-xl'>&#10011;</button>
          </div>
          <div className='flex gap-2 mt-3' >
            <button onClick={onClose} type='button' className='flex-1 bg-slate-900 text-white py-1.5 rounded-lg'>Cancel</button>
            <button type='submit' className='flex-1 bg-slate-900 text-white py-1.5 rounded-lg'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form