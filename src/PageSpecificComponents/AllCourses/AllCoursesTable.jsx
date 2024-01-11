import Table from '@/components/Table/Table'
import React from 'react'
import Link from 'next/link'

const AllCoursesTable = ({ data, cols }) => {
    const linkClass = "text-white hover:text-blue-700 bg-primary hover:bg-secondary px-4 py-2 rounded-md transition duration-300 ease-in-out";
    const finalData = data.map((item, index) => {
        return {
            id: item.id,
            name: item.name,
            teacher: item.teacher,
            price: item.price,
            modules: item.modules,
            viewMore: <Link href={`/course-details/${index+1}`} className={linkClass}>View more</Link>
        }
    });
    cols.push('viewMore');

    console.log(finalData);

    return (
        <div>
            <Table cols={cols} data={finalData} />
        </div>
    )
}

export default AllCoursesTable
