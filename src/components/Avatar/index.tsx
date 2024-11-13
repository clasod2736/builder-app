import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar"

interface AvatarProps {
  name: string
  img: string
  fallback: string
}

const defaultAvatarData = {
  name: "tester",
  img: "https://github.com/shadcn.png",
  fallback: "T",
}
 
export function AvatarComponent(props: AvatarProps = defaultAvatarData) {
  const { name, img, fallback } = props
  return (
    <Avatar>
      <AvatarImage src={img} alt={name} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}