import React from 'react'
import Note from './Note'

const Notes = [
  { id: 1, title: 'Note 1', content: 'This is the content of Note 1 lorem' },
  { id: 2, title: 'Note 2', content: 'This is the content of Note 2' },
  { id: 3, title: 'Note 3', content: 'This is the content of Note 3' },
  { id: 4, title: 'Note 4', content: 'This is the content of Note 4' },
  { id: 5, title: 'Note 5', content: 'This is the content of Note 5' },
]
const Assets = () => {
  return (
    <div className=''>
      <h1 className='font-medium text-xl text-gray-700'>Assets</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2'>
        {Notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
    </div>
  )
}

export default Assets
