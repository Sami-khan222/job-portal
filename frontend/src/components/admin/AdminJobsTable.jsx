import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'  // ← THIS IMPORT WAS MISSING
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => { 
    const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(()=>{ 
        console.log('called');
        const filteredJobs = allAdminJobs.filter((job)=>{
            if(!searchJobByText){
                return true;
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredJobs);
    },[allAdminJobs,searchJobByText])
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableCaption className="text-sm sm:text-base">
                    A list of your recent posted jobs
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Company Name</TableHead>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Role</TableHead>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Date</TableHead>
                        <TableHead className="text-right text-xs sm:text-sm whitespace-nowrap">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs?.map((job) => (
                            <TableRow key={job._id}>
                                <TableCell className="text-xs sm:text-sm whitespace-nowrap">
                                    {job?.company?.name}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm">
                                    {job?.title}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm whitespace-nowrap">
                                    {job?.createdAt.split("T")[0]}
                                </TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-24 sm:w-32 p-2">
                                            <div 
                                                onClick={()=> navigate(`/admin/companies/${job._id}`)} 
                                                className='flex items-center gap-2 w-full cursor-pointer p-2 hover:bg-muted rounded-md transition-colors'
                                            >
                                                <Edit2 className='h-3 w-3 sm:h-4 sm:w-4' />
                                                <span className='text-xs sm:text-sm'>Edit</span>
                                            </div>
                                            <div 
                                                onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} 
                                                className='flex items-center w-full gap-2 cursor-pointer p-2 hover:bg-muted rounded-md transition-colors mt-1'
                                            >
                                                <Eye className='h-3 w-3 sm:h-4 sm:w-4'/>
                                                <span className='text-xs sm:text-sm'>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable