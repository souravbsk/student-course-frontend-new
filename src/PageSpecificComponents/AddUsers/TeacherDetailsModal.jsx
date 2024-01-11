"use client"
import React, { useEffect } from 'react'

function TeacherDetialsModal({ setModalOpen, isModalOpen }) {

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    image: '',
    bio: '',
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll-bg');
    } else {
      document.body.classList.remove('no-scroll-bg');
    }
    return () => {
      document.body.classList.remove('no-scroll-bg');
    };
  }, [isModalOpen]);

  const [teacherPreviewImageUrl, setTeacherPreviewImageUrl] = React.useState(null);

  const handleNameChange = e => {
    setFormData({ ...formData, name: e.target.value })
  }
  const handlePhoneChange = e => {
    setFormData({ ...formData, phone: e.target.value })
  }
  const handleEmailChange = e => {
    setFormData({ ...formData, email: e.target.value })
  }
  const handleAddressChange = e => {
    setFormData({ ...formData, address: e.target.value })
  }
  const handleBioChange = (newContent) => {
    setFormData({ ...formData, bio: newContent });
  }

  const imageUploadRef = React.useRef(null);
  const handlePsudoButtonClick = (e) => {
    e.preventDefault();
    imageUploadRef.current.click();
  };

  const handleTeacherImageUpload = e => {
    const file = e.target.files[0];
    if (!file) return;
    setTeacherPreviewImageUrl(URL.createObjectURL(file));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result })
    }
  }

  const submitFormData = () => {
    console.log(formData);
  }

  return (
    <>
      <div className='fixed inset-0 bg-black/80 z-30 '
        onClick={() => setModalOpen(false)} />
      <div className="fixed z-40 bg-slate-200 w-[95%] h-[50vh] min-h-[500px] max-h-[1000px]  md:w-[600px] lg:w-[800px] top-28 left-[50vw] translate-x-[-50%] p-4 md:p-6 lg:p-8 rounded-lg transition-all duration-150 delay-0 overflow-auto">
        <h1 className='text-2xl font-semibold text-parimary mb-4'>Add Teacher</h1>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="w-full flex flex-col">
              <label htmlFor="name" className='text-md font-medium text-gray-600 block'>Name</label>
              <input type="text" name="name" id="name" className='border-2 border-gray-400 rounded-md p-2' onChange={handleNameChange} value={formData.name}/>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="phone" className='text-md font-medium text-gray-600 block'>Phone</label>
              <input type="tel" name="phone" id="phone" className='border-2 border-gray-400 rounded-md p-2' onChange={handlePhoneChange} value={formData.phone}/>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="email" className='text-md font-medium text-gray-600 block'>Email</label>
              <input type="email" name="email" id="email" className='border-2 border-gray-400 rounded-md p-2' onChange={handleEmailChange} value={formData.email} />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="address" className='text-md font-medium text-gray-600 block'>Address</label>
              <input type="text" name="address" id="address" className='border-2 border-gray-400 rounded-md p-2' onChange={handleAddressChange} value={formData.address}/>
            </div>
            <div className="mt-5 col-span-2 lg:col-span-1 border-dashed border-4 border-gray-300 rounded-lg p-2 bg-gray-100">
              <div className="wrapper w-full h-full flex flex-row items-center justify-between gap-4 ">
                {teacherPreviewImageUrl &&
                  <div className="preview grow flex flex-col gap-2 items-center max-w-[50%]">
                    <img src={teacherPreviewImageUrl} alt="Placeholder"
                      className='w-[150px] ' />
                    <p className="image-name text-xs">{formData.image.name}</p>
                  </div>}
                <div className="file-upload grow">
                  <label htmlFor="courseImage" className="text-sm font-medium text-gray-700 flex flex-col justify-between items-center gap-5">
                    <h5 className='text-lg font-medium'>Teacher Image</h5>
                    <input type="file" id="courseImage" name="courseImage" className="mt-1 hidden" onChange={handleTeacherImageUpload} ref={imageUploadRef} />
                    <button className="btn-sm btn-primary block rounded" onClick={handlePsudoButtonClick}>upload image</button>
                  </label>
                </div>
              </div>
            </div>
            <div className=" col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="bio" className='text-md font-medium text-gray-600 block'>Bio</label>
              <textarea name="bio" id="" cols="30" rows="6" className='border rounded-md border-gray-400 p-2'/>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className='btn-sm btn-primary px-2 py-1 rounded-md'
              onClick={submitFormData}>Add Teacher</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherDetialsModal
