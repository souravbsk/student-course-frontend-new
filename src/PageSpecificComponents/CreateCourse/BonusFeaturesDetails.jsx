import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

const BonusFeaturesDetails = (props) => {
  const {
    formData,
    handleChange,
    numberofBonusFeatures,
    handleBonusFeaturesChange,
    handleBonusFeaturesRemove,
    handleAddBonusFeatures,
  } = props;

  const [newItemAdded, setNewItemAdded] = React.useState(false);


  React.useEffect(() => {
    if (newItemAdded) {
      setTimeout(() => {
        setNewItemAdded(false);
      }, 300); 
    }
  }, [newItemAdded]);
  return (
    <div className="mb-8 bg-slate-100 border p-4 rounded-md">
      <h2 className="text-xl font-semibold mt-4">Plan Details - Bonus Features</h2>
      <hr className="border-[1px] border-gray-300" />
      <div>
        {numberofBonusFeatures > 0 && (
          <div className={`grid grid-cols-1 lg:${newItemAdded > 1 ? "grid-cols-2" : "grid-cols-1"} gap-4 mt-4`}>
            {[...Array(numberofBonusFeatures)].map((_, i) => (
              <div key={i} className={`flex flex-row gap-6 mb-4 bg-slate-200 p-2 rounded ${newItemAdded && (i === newItemAdded - 1) ? 'scale-up-animation' : ''
            }`}>
                <div className="flex-1">
                  <label htmlFor={`module${i}`} className="block text-sm font-medium text-gray-700">
                    Bonus features {i + 1}
                  </label>
                  <input
                    type="text"
                    id={`module${i}`}
                    name={`module${i}`}
                    value={formData.plan.bonusFeatures[i] || ""}
                    onChange={(e) => handleBonusFeaturesChange(e, i)}
                    className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
                  />
                </div>
                <div className="options self-end">
                  <button className="btn btn-primary rounded text-white text-xl"
                    onClick={(e) => handleBonusFeaturesRemove(e, i)}><AiFillDelete /></button>
                </div>
              </div>
            ))}
          </div>

        )}
        <div className="flex gap-4-items-center justify-center">
          <button className="btn-sm btn-primary rounded text-white text-lg" onClick={e=>{handleAddBonusFeatures(e); setNewItemAdded(true); }}>
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BonusFeaturesDetails
