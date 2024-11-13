import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar"
import { useState } from "react"

interface AvatarProps {
  name: string
  img: string
  fallback: string
}
 
export function AvatarComponent() {
  const [name, setName] = useState('tester')
  const [img, setImg] = useState('https://github.com/shadcn.png')
  const [fallback, setFallback] = useState('T')

  return (
    <Avatar>
      <AvatarImage src={img} alt={name} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}