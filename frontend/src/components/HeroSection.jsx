import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-3 sm:gap-5 my-6 sm:my-10'>
                <span className='mx-auto px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-100 text-[#0b6623] font-medium text-sm sm:text-base'>No. 1 Job Website</span>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold px-2'>
                    Search, Apply & <br className='hidden sm:block' /> Get Your <span className='text-[#0000ff]'>Dream Jobs</span>
                </h1>
                <p className='text-sm sm:text-base px-4 sm:px-0 max-w-2xl mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
                </p>
                <div className='flex w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-sm sm:text-base py-2 sm:py-3'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#0000ff] px-3 sm:px-4">
                        <Search className='h-4 w-4 sm:h-5 sm:w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection