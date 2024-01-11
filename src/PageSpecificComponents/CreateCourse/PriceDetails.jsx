import React from 'react'

const PriceDetials = ({formData, handleChange}) => {
    return (
        <div className="course-price mb-8 bg-slate-100 border p-4 rounded-md">
            <h3 className="text-xl font-medium">Course Price</h3>
            <hr className="border-[1px] border-gray-300" />
            <div className="my-4 flex gap-6 items-end">
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-gray-200">₹</span>
                        <input type="text" placeholder="10" className="input input-bordered border-gray-200 bg-white" name="price" value={formData.price} onChange={handleChange} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PriceDetials
