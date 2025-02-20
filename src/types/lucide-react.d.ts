declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  
  export interface IconProps extends SVGProps<SVGElement> {
    size?: number | string
    color?: string
    strokeWidth?: number
  }

  export const ChevronDown: FC<IconProps>
  export const Search: FC<IconProps>
  export const Mic: FC<IconProps>
  export const Share2: FC<IconProps>
}
