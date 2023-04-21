import { FC } from 'react'

import Modal, { ModalProps } from '@mui/material/Modal'

const HeadlessModal: FC<ModalProps> = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>
}

export default HeadlessModal
