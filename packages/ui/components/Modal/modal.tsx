import { FC } from 'react'
import Modal from '@mui/material/Modal'
import type { ModalProps } from '@mui/material/Modal'

const MuiModal: FC<ModalProps> = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>
}

export default MuiModal
