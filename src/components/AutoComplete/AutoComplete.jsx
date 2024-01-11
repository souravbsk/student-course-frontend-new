"use client";
import { useState, Fragment } from 'react'
import { Combobox } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa'

const AutoComplete = ({ data, attribute, selected, setSelected }) => {
  console.log(selected,setSelected);
  const [query, setQuery] = useState('');
  const filteredData =
    query === ''
      ? data
      : data.filter((item) => {
        return item[`${attribute}`].toLowerCase().includes(query.toLowerCase())
      });

  return (
    <Combobox value={selected} onChange={setSelected} as={"div"} className="relative">
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => person[`${attribute}`]}
        className={'w-full p-2 border border-gray-300 rounded-md'}
      />
      <Combobox.Options className={`absolute w-full max-h-[200px] md:max-h-[300px] overflow-auto z-10`}>
        {filteredData.map((person) => (
          <Combobox.Option key={person.id} value={person} className={`bg-white text-primary text-md w-full py-1 px-4 my-1 rounded-md hover:bg-primary hover:text-white`}>
            {({ active, selected }) => (
              <div
                className={`cursor-pointer select-none relative py-2 pr-4 hover:bg-primary hover:text-white`}
              >
                <span className=''>{person[`${attribute}`]}</span>
                {selected && <FaCheck className='inline ml-4' />}
              </div>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}

export default AutoComplete
