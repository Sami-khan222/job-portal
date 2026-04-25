import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
    return (
        <div className="overflow-x-auto">
            <Table className="min-w-[500px] sm:min-w-full">
                <TableCaption className="text-sm sm:text-base">
                    A list of your applied jobs
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-xs sm:text-sm">Date</TableHead>
                        <TableHead className="text-xs sm:text-sm">Job Role</TableHead>
                        <TableHead className="text-xs sm:text-sm">Company</TableHead>
                        <TableHead className="text-right text-xs sm:text-sm">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500 py-8">
                                    You haven't applied any job yet.
                                </TableCell>
                            </TableRow>
                        ) : (
                            allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob._id}>
                                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">
                                        {appliedJob?.createdAt?.split("T")[0]}
                                    </TableCell>
                                    <TableCell className="text-xs sm:text-sm break-words min-w-[100px] sm:min-w-0">
                                        {appliedJob.job?.title}
                                    </TableCell>
                                    <TableCell className="text-xs sm:text-sm break-words min-w-[100px] sm:min-w-0">
                                        {appliedJob.job?.company?.name}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'} text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1`}>
                                            {appliedJob.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable