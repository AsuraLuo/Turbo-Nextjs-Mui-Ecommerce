import { formatMessage } from '../CurrentLocale'

const getMaxFileSizeLabel = (maxSize: number) => {
  if (maxSize / 1048576 > 1) {
    return `${(maxSize / 1048576).toFixed(1)}MB`
  }
  if (maxSize / 1024 > 1) {
    return `${(maxSize / 1024).toFixed(1)}KB`
  }
  return `${maxSize}B`
}

export const getRejectMessage = (
  rejectedFile: File,
  acceptedFiles: string[],
  maxFileSize: number
) => {
  const { name, size, type } = rejectedFile

  let isAcceptFileType = false
  acceptedFiles.forEach((acceptedFileType) => {
    isAcceptFileType =
      new RegExp(acceptedFileType).test(type) || isAcceptFileType
  })

  if (!isAcceptFileType) {
    return formatMessage(
      {
        id: 'validate.fileUpload.typeNotSupport'
      },
      {
        name
      }
    )
  }

  if (size > maxFileSize) {
    return formatMessage(
      {
        id: 'validate.fileUpload.fileSizeExceedsLimit'
      },
      {
        maxSize: getMaxFileSizeLabel(maxFileSize)
      }
    )
  }

  return ''
}
