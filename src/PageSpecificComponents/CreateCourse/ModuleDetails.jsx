import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'


const ModuleDetails = (props) => {
  const {
    formData,
    handleChange,
    handleAddModules,
    handleModuleNameChange,
    handleModuleLengthChange,
    handlRemoveModule,
    numberofModules, } = props;

  const [newModuleAdded, setNewModuleAdded] = useState(false);


  useEffect(() => {
    if (newModuleAdded) {
      setTimeout(() => {
        setNewModuleAdded(false);
      }, 300); // Adjust the duration to match your CSS animation duration
    }
  }, [newModuleAdded]);

  return (
    <div className="mb-8 bg-slate-100 border p-4 rounded-md">
      <h2 className="text-xl font-semibold mt-4">Plan Details - Modules</h2>
      <hr className="border-[1px] border-gray-300" />
      <div>
        {numberofModules > 0 && (
          <div className={`grid grid-cols-1 lg:${numberofModules > 1 ? "grid-cols-2" : "grid-cols-1"} gap-4 mt-4`}
          >
            {[...Array(numberofModules)].map((_, i) => (
              <div key={i} className={`flex flex-row gap-6 mb-4 bg-slate-200 p-2 rounded ${newModuleAdded && (i === numberofModules - 1) ? 'scale-up-animation' : ''
                }`} >
                <div className="flex-1">
                  <label htmlFor={`module${i}`} className="block text-sm font-medium text-gray-700">
                    Module {i + 1}
                  </label>
                  <input
                    type="text"
                    id={`module${i}`}
                    name={`module${i}`}
                    value={formData.plan.modules[i].title || ""}
                    onChange={(e) => {
                      handleModuleNameChange(e, i);
                    }
                    }
                    className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor={`module${i}-content`} className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <input
                    type="text"
                    id={`module${i}-content`}
                    name={`module${i}-content`}
                    value={formData.plan.modules[i].content || ""}
                    onChange={(e) => handleModuleLengthChange(e, i)}
                    className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
                  />
                </div>
                <div className="options self-end">
                  <button className="btn btn-primary rounded text-white text-xl"
                    onClick={(e) => handlRemoveModule(e, i)}>
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>

        )}
        <div className="flex gap-4-items-center justify-center">
          <button className="btn-sm btn-primary rounded text-white text-xl" onClick={e => { handleAddModules(e); setNewModuleAdded(true); }}>
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModuleDetails;