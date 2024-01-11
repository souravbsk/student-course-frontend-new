import AutoComplete from '@/components/AutoComplete/AutoComplete';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

const fakeTeachersData = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
  { id: 6, name: 'Rickie Wolf' },
  { id: 7, name: 'Glenna Reichert' },
  { id: 8, name: 'Kittie Turnpike' },
  { id: 9, name: 'Kiera Rosenbaum' },
  { id: 10, name: 'Shaun Hilll' },
  { id: 11, name: 'Alfredo Crona' },
  { id: 12, name: 'Matthew Emmerich' },
  { id: 13, name: 'Mr. Chaim Muller' },
  { id: 14, name: 'Gloria Reichert' },
  { id: 15, name: 'Kitty Turner' },
  { id: 16, name: 'Ronny Sanford' },
  { id: 17, name: 'Zoe Denesik' },
  { id: 18, name: 'Alena Reichert' },
  { id: 19, name: 'Vivianne Blanda' },
  { id: 20, name: 'Angelita Koelpin' },
]

const TeacherDetails = ({
  formData,
  handleAddTeachers,
  handleTeacherNameChange,
  handleTeacherSubjectChange,
  handleRemoveTeacher,
  numberofTeachers }) => {

  const authorImageRef = React.useRef(null);
  const handlePsudoButtonClick = (e) => {
    e.preventDefault();
    authorImageRef.current.click();
  };
  return (
    <div className="author-detials mb-8 bg-slate-100 border p-4 rounded-md">
      <h3 className="text-xl font-medium">Teacher Details</h3>
      <hr className="border-[1px] border-gray-300" />
      {[...Array(numberofTeachers)].map((_, i) => (
        <div key={i} className="mt-4 flex items-center gap-6 bg-slate-200 p-2 rounded-md">
          <div className="grow">
            <label htmlFor={`teacher-image-${i}`} className="w-1/3 text-sm font-medium">Teacher name</label>
            <AutoComplete
              data={fakeTeachersData}
              attribute={"name"}
              selected={formData.teachers[i]}
              setSelected={item => handleTeacherNameChange(item, i)} />
          </div>
          <div className="grow">
            <label htmlFor={`teacher-subject-${i}`} className="w-1/3 text-sm font-medium">Subject</label>
            <input
              type="text"
              id={`teacher-subject-${i}`}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={formData.teachers[i].subject}
              onChange={(e) => handleTeacherSubjectChange(e, i)}
            />
          </div>
          <div className="options self-end">
                  <button className="btn btn-primary rounded text-white text-xl"
                    onClick={(e) => handleRemoveTeacher(e, i)}>
                    <AiFillDelete />
                  </button>
                </div>
        </div>
      ))}
      <div className="flex gap-4-items-center justify-center mt-4">
        <button type='button' className="btn-sm btn-primary rounded text-white text-xl" onClick={e => {handleAddTeachers(e)}}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  )
}

export default TeacherDetails
