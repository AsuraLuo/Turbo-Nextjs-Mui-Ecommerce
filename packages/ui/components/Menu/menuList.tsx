import { FC, forwardRef } from 'react'
import MenuList from '@mui/material/MenuList'
import type { MenuListProps } from '@mui/material/MenuList'

const MuiMenuList: FC<MenuListProps> = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, ...props }, ref) => {
    return (
      <MenuList ref={ref} {...props}>
        {children}
      </MenuList>
    )
  }
)
MuiMenuList.displayName = 'MenuList'

export default MuiMenuList
