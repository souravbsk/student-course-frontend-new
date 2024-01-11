import React from 'react'
import Link from 'next/link'
const Table = ({ data, cols }) => {


    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                            <thead
                                className="border-b font-medium text-white dark:border-neutral-500 bg-primary">
                                <tr>
                                    {cols.map((item, index) => {
                                        return <th key={index} class="px-6 py-3">{item}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => {
                                    return (
                                        <tr key={index} className="border-b border-neutral-200 dark:border-neutral-700">
                                            {cols.map((col, index) => {
                                                return <td key={index} class="px-6 py-4 whitespace-nowrap">{row[col]}</td>
                                            })}
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
