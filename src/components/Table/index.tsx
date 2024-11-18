import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TableProps {
  caption?: string;
  header: {
    heads: {
      label: string;
      width?: string;
    }[]
  };
  body: {
    cells: {
      value: string;
      checkValues?: [
        {
          checked: boolean;
        },
        {
          checked: boolean;
        },
        {
          checked: boolean;
        },
      ]
    }[]
  };
  footer: {
    total: string;
  };
}

const defaultTableData = {
  caption: "A list of your recent invoices.",
  header: {
    heads: [
      {
        label: "Invoice",
        width: "100px",
      },
      {
        label: "Status",
      },
      {
        label: "Method",
      },
      {
        label: "Amount",
      },
    ],
  },
  body: {
    cells: [
      {
        value: "INV-0001",
      },
      {
        value: "Paid",
      },
      {
        value: "Credit Card",
      },
      {
        value: "$500.00",
      },
      {
        value: "INV-0002",
      },
      {
        value: "Paid",
      },
      {
        value: "Paypal",
      },
      {
        value: "$1,000.00",
      },
    ],
  },
  footer: {
    total: "$2,500.00",
  },
}

export function TableComponent(props: TableProps = defaultTableData) {
  const { caption, header, body, footer } = props
  return (
    <Table className="md:p-32 p-16">
      <TableCaption className="mt-8">{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {header.heads.length > 0 && header.heads.map((head, index) => (
            <TableHead key={index} style={{ width: head.width }}>{head.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {body.cells.length > 0 && body.cells.map((cell, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{cell.value}</TableCell>
            {cell.checkValues && cell.checkValues.map((check, index) => (
              <TableCell key={index}>{check.checked ? "Yes" : "No"}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {footer.total && <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>}
    </Table>
  )
}
