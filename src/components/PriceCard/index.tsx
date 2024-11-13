import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../ui/card';
import { CircleCheck, CircleX } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: number;
  description: string;
  href: string;
  list: {
    label: string;
    isDisabled: boolean;
  }[]
  badge?: {
    discount: number;
  }
}

const mockedPriceCardData = {
  title: 'testing',
  description: 'testing',
  price: 29,
  href: 'testing',
  list: [
    {
      label: 'testing',
      isDisabled: false,
    },
    {
      label: 'testing2',
      isDisabled: false,
    },
    {
      label: 'testing3',
      isDisabled: false,
    }
  ],
  badge: {
    discount: 99,
  }
}

const PriceBox = ({ price }: { price: number }) => (
  <div className='flex flex-col items-center justify-center bg-accent py-5 px-8 gap-4 rounded-lg group-hover:bg-primary-foreground/90'>
    <span className='flex flex-row items-end text-xl font-semibold gap-1'>
      {price > 0 ? `$${price}` : "Free" }
      {price > 0 ? <p className='text-xs pb-1'>
        /month
      </p> : null}
      </span>
    <Button className='font-semibold'>Get Started Now!</Button>  
  </div>
)

const PriceBadge = ({ badge }: { badge: number }) => (
  <Badge className='text-[10px] group-hover:text-secondary transition-none' variant={"outline"}>
    SAVE {badge}%
  </Badge>
)

export default function PriceCardComponent(props: PriceCardProps = mockedPriceCardData) {
  return (
    <Card className='group hover:bg-black/90 transition duration-75'>
      <CardHeader className='flex items-center gap-2'>
        <span className='flex flex-row items-end gap-2'>
          <CardTitle className='group-hover:text-secondary'>{props.title}</CardTitle>
          {props.badge && <PriceBadge badge={props.badge.discount} />}
        </span>
        <CardDescription className='group-hover:text-secondary'>{props.description}</CardDescription>
        <PriceBox price={props.price} />
      </CardHeader>
      <CardContent className='flex flex-col items-start gap-4'>
        {props.list.map((item, index) => (
          <a
            key={index}
            href={props.href}
            className={`flex flex-row items-center px-2 gap-2 text-sm italic group-hover:text-secondary ${item.isDisabled ? 'opacity-50' : ''}`}
            style={{ opacity: item.isDisabled ? 0.5 : 1 }}
          >
            {item.isDisabled ? <CircleX size={15}/> : <CircleCheck size={15}/>}
            {item.label}
          </a>
        ))}

      </CardContent>
      <CardFooter>
       
      </CardFooter>
    </Card>
  )
}