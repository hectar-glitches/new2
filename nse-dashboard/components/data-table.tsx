"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Trash, CheckCircle, XCircle } from "lucide-react"

const data = [
  {
    id: "REQ-001",
    title: "Daily Market Summary Data",
    category: "Market Data",
    submittedBy: "John Smith",
    submittedDate: "2025-06-18",
    status: "Approved",
    priority: "High",
  },
  {
    id: "REQ-002",
    title: "Quarterly Compliance Report",
    category: "Compliance",
    submittedBy: "Sarah Johnson",
    submittedDate: "2025-06-17",
    status: "Pending",
    priority: "Medium",
  },
  {
    id: "REQ-003",
    title: "Regulatory Disclosure Data",
    category: "Regulatory",
    submittedBy: "Michael Chen",
    submittedDate: "2025-06-15",
    status: "Rejected",
    priority: "High",
  },
  {
    id: "REQ-004",
    title: "Trading Volume Analytics",
    category: "Analytics",
    submittedBy: "Priya Patel",
    submittedDate: "2025-06-14",
    status: "Approved",
    priority: "Low",
  },
  {
    id: "REQ-005",
    title: "Market Maker Performance Data",
    category: "Market Data",
    submittedBy: "Alex Rodriguez",
    submittedDate: "2025-06-12",
    status: "Pending",
    priority: "Medium",
  },
]

export default function DataTable() {
  const [requirements, setRequirements] = useState(data)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800 hover:bg-green-100/80"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80"
      case "Rejected":
        return "bg-red-100 text-red-800 hover:bg-red-100/80"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 hover:bg-red-100/80"
      case "Medium":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80"
      case "Low":
        return "bg-green-100 text-green-800 hover:bg-green-100/80"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">Submitted By</TableHead>
            <TableHead className="hidden lg:table-cell">Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden lg:table-cell">Priority</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requirements.map((req) => (
            <TableRow key={req.id}>
              <TableCell className="font-medium">{req.id}</TableCell>
              <TableCell>{req.title}</TableCell>
              <TableCell className="hidden md:table-cell">{req.category}</TableCell>
              <TableCell className="hidden md:table-cell">{req.submittedBy}</TableCell>
              <TableCell className="hidden lg:table-cell">{req.submittedDate}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getStatusColor(req.status)}>
                  {req.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <Badge variant="outline" className={getPriorityColor(req.priority)}>
                  {req.priority}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Requirement
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
