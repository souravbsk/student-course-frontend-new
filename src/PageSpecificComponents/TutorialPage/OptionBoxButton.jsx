import React from 'react'

const OptionBoxButton = ({data}) => {
    const {hiddenMenu, setHiddenMenu, buttonData} = data;
    const {id, name} = buttonData;
    return (
        <button 
        className={`btn btn-primary px-4 py-1 font-medium text-md whitespace-nowrap border-b-2 border-transparent capitalize ${hiddenMenu === id && "btn-secondary"}`} 
        onClick={() => setHiddenMenu(id)}
        >
            {name}
        </button>

    )
}

export default OptionBoxButton
