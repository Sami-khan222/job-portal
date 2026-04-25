import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button'; // ← ADD THIS IMPORT
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    const statusHandler = async (status, id) => {
        console.log('called');
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableCaption className="text-sm sm:text-base">
                    A list of your recent applied user
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">FullName</TableHead>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Email</TableHead>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Contact</TableHead>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Resume</TableHead>
                        <TableHead className="text-xs sm:text-sm whitespace-nowrap">Date</TableHead>
                        <TableHead className="text-right text-xs sm:text-sm whitespace-nowrap">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell className="text-xs sm:text-sm">
                                    {item?.applicant?.fullname}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm break-words min-w-[120px]">
                                    {item?.applicant?.email}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm whitespace-nowrap">
                                    {item?.applicant?.phoneNumber}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm max-w-[200px]">
                                    {
                                        item.applicant?.profile?.resume ? (
                                            <a 
                                                className="text-blue-600 cursor-pointer hover:underline break-all" 
                                                href={item?.applicant?.profile?.resume} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                {item?.applicant?.profile?.resumeOriginalName}
                                            </a>
                                        ) : (
                                            <span>NA</span>
                                        )
                                    }
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm whitespace-nowrap">
                                    {item?.applicant?.createdAt?.split("T")[0]}
                                </TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-24 sm:w-32 p-2">
                                            {
                                                shortlistingStatus.map((status, index) => {
                                                    return (
                                                        <div 
                                                            onClick={() => statusHandler(status, item?._id)} 
                                                            key={index} 
                                                            className='flex w-full items-center justify-center cursor-pointer p-2 hover:bg-muted rounded-md transition-colors'
                                                        >
                                                            <span className='text-xs sm:text-sm'>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
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

export default ApplicantsTable