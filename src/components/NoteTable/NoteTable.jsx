import Image from 'next/image';
import React from 'react';

const NoteTable = ({note}) => {
    return (
        <tr className=' bg-slate-100 rounded-xl border-b border-gray-300'>
        <td className='hidden sm:block'>
          <div >
            <Image className='w-[63px] h-[40px] md:w-[125px] md:h-[80px] rounded-xl' src={note?.image} alt='imagenote' width={125} height={80}></Image>
          </div>
        </td>
        <td>
          <h3 className='text-[#471850] '>{note?.title}</h3>
        </td>
        <td><p>{note?.category}</p></td>
        <td><p className='text-xl text-primary'>₹{note?.price}</p></td>
        <td>
          <div className='flex gap-3 flex-wrap md:flex-nowrap'>
          <button className="btn-sm btn-secondary md:btn-secondary md:mr-6 md:text-white text-white text-sm flex-1 px-2 rounded-md font-normal whitespace-nowrap">Buy Now</button>
          </div>
        </td>
      </tr>
    );
};

export default NoteTable;