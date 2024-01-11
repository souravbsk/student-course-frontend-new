import Image from 'next/image';
import React from 'react'

const Note = ({note}) => {
    const {title, content} = note;
  return (
    <div className='w-full flex flex-row p-2 bg-gray-100 rounded-md gap-2'>
        <div className="note-image min-w-[100px] max-w-[100px] rounded">
            <img src="https://picsum.photos/200" alt="note" className='w-full rounded border overflow-hidden'/>
        </div>
        <div className="note-info">
            <h5 className='font-base text-lg text-black'>{title}</h5>
            <p className='font-base text-md text-black'>{content}</p>
            <div className="operations flex gap-1 flex-wrap mt-3">
                <button className='btn-sm btn-primary text-white px-2 py-1 rounded-md'>Download</button>
                <button className='btn-sm btn-primary text-white px-2 py-1 rounded-md'>View</button>
            </div>
        </div>
    </div>
  )
}

export default Note
