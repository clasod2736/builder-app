import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";

interface LabelProps {
  label: string;
  style?: string;
  align?: 'left' | 'center' | 'right';
}
 
export function LabelComponent(props: LabelProps) {
  const { label = 'default', style } = props;
  return (
    <div>
      <div className={cn("flex items-center space-x-2", {
        "justify-start": props.align === 'left',
        "justify-center": props.align === 'center',
        "justify-end": props.align === 'right',
      })}>
        <Label className={style}>{label}</Label>
      </div>
    </div>
  )
}