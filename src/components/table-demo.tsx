"use client";

import { Data } from "@/app/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  data: Data;
}

export function TableDemo({ data }: TableProps) {
  return (
    <Table>
      <TableCaption>A list of your recent submissions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index + "=" + item.email}>
            <TableCell>{item.timestamp}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
