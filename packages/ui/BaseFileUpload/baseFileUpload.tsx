import { FC } from 'react'
import { FormLabel } from '@mui/material'
import { DropzoneArea, FileObject, PreviewIconProps } from 'react-mui-dropzone'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import DescriptionRounded from '@mui/icons-material/DescriptionRounded'
import ImageRoundedIcon from '@mui/icons-material/ImageRounded'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded'

import { formatMessage } from '../CurrentLocale'
import { getRejectMessage } from './util'
import { StyledDropZone } from './styled'

interface BaseFileUploadProps {
  acceptedFiles?: string[]
  filesLimit?: number
  maxFileSize?: number
  dropzoneText?: string
  previewText?: string
  default?: File[]
  label?: string
  name: string
  setValue: Function
}

const FILE_UPLOAD_ACCEPT_TYPE: string[] = [
  'image/jpeg',
  'image/png',
  'image/bmp'
]

const BaseFileUpload: FC<BaseFileUploadProps> = ({
  acceptedFiles = FILE_UPLOAD_ACCEPT_TYPE,
  filesLimit = 3,
  maxFileSize = 2097152, // 2M
  dropzoneText,
  previewText = ' ',
  default: defaultValue = [],
  label,
  name,
  setValue
}) => {
  const getPreviewIcon = (
    fileObject: FileObject,
    classes: PreviewIconProps
  ) => {
    const { type } = fileObject.file
    const iconProps = {
      className: classes.classes
    }
    if (type.startsWith('image/')) return <ImageRoundedIcon {...iconProps} />

    switch (type) {
      case 'application/pdf':
        return <PictureAsPdfRoundedIcon {...iconProps} />
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      case 'text/csv':
        return <DescriptionRounded {...iconProps} />
      default:
        return <InsertDriveFileRoundedIcon {...iconProps} />
    }
  }

  const getFileLimitExceedMessage = () => {
    return formatMessage(
      {
        id: 'validate.fileUpload.fileNumberExceedsLimit'
      },
      {
        limit: filesLimit
      }
    )
  }

  const handleFilesChange = (files: File[]) => {
    if (setValue) setValue(name, files)
  }

  return (
    <StyledDropZone>
      {label && <FormLabel>{label}</FormLabel>}
      <DropzoneArea
        Icon={CloudUploadOutlinedIcon}
        showPreviews
        showFileNamesInPreview
        showPreviewsInDropzone={false}
        getDropRejectMessage={getRejectMessage}
        getFileLimitExceedMessage={getFileLimitExceedMessage}
        getPreviewIcon={getPreviewIcon}
        showAlerts={['error']}
        maxFileSize={maxFileSize}
        initialFiles={defaultValue}
        acceptedFiles={acceptedFiles}
        filesLimit={filesLimit}
        dropzoneText={
          dropzoneText ||
          formatMessage({ id: 'validate.fileUpload.defaultText' })
        }
        previewText={previewText}
        onChange={handleFilesChange}
      />
    </StyledDropZone>
  )
}

export default BaseFileUpload
