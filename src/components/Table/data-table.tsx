"use client"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { SyncLoader } from "react-spinners"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    isLoading: boolean
}

const truncateText = (text: string, maxLength: number = 15) => {
    if (typeof text === 'string' && text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};

export function DataTable<TData, TValue>({
    columns,
    data,
    isLoading
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="bg-backgroundColor !rounded-3xl overflow-hidden">
            <Table>
                <TableHeader className="h-14">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow className="!bg-emerald-900 first:!rounded-t-3xl" key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => (
                                <TableHead
                                    className={`text-center text-white font-semibold ${index === 0 ? 'first:rounded-tl-3xl' : ''
                                        } ${index === headerGroup.headers.length - 1 ? 'rounded-tr-3xl' : ''
                                        }`}
                                    key={header.id}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row, rowIndex) => (
                            <TableRow
                                className={`h-20 group relative transition-all duration-700 ease-in-out hover:text-white
                                bg-gradient-to-l from-emerald-500 to-emerald-900 bg-[length:0%_100%] 
                                bg-no-repeat hover:bg-[length:100%_100%] ${rowIndex === table.getRowModel().rows.length - 1 ? '!rounded-b-3xl' : ''
                                    }`}
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell, index) => {
                                    const value = cell.getValue() as string;
                                    const shouldTruncate = typeof value === 'string' && value.length > 15;

                                    return (
                                        <TableCell
                                            className={`${rowIndex === table.getRowModel().rows.length - 1 && index === 0
                                                ? 'rounded-bl-3xl'
                                                : ''
                                                } ${rowIndex === table.getRowModel().rows.length - 1 &&
                                                    index === row.getVisibleCells().length - 1
                                                    ? 'rounded-br-3xl'
                                                    : ''
                                                } text-center`}
                                            key={cell.id}
                                        >
                                            {shouldTruncate ? (
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full">
                                                            {truncateText(value)}
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-emerald-500 text-white">
                                                            {value}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            ) : (
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 rounded-b-3xl"
                            >
                                <div className="flex items-center justify-center h-full">
                                    {isLoading ? (
                                        <SyncLoader size={10} color="#064e3b " />
                                    ) : (
                                        "Nenhum registro."
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}