import { FC, forwardRef } from 'react'

import MenuList, { MenuListProps } from '@mui/material/MenuList'

const HeadlessMenuList: FC<MenuListProps> = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, ...props }, ref) => {
    return (
      <MenuList ref={ref} {...props}>
        {children}
      </MenuList>
    )
  }
)

HeadlessMenuList.displayName = 'MenuList'

export { HeadlessMenuList }
