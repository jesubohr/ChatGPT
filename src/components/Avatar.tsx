interface AvatarProps {
  children: React.ReactNode
}

export function Avatar({ children }: AvatarProps) {
  return (
    <figure className='flex jc:center ai:center w:30 h:30 bg:gpt-logo r:2 overflow:hidden w:full_img h:full_img object-fit:cover_img p:4:has(svg)'>
      {children}
    </figure>
  )
}
