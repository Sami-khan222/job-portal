import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left'>
                <span className='text-[#0000ff]'>Latest & Top </span> Job Openings
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 my-5'>
                {
                    allJobs.length <= 0 ? <span className="col-span-full text-center text-gray-500 py-8">No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJobs