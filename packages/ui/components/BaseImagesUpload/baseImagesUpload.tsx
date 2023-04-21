import { FC, useState } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import { Button, FormControl, FormLabel, FormHelperText } from '@mui/material'
import ImageUploading, { ImageUploadingPropsType, ImageListType } from 'react-images-uploading'

import { formatMessage } from '../CurrentLocale'
import { StyledImagesUpload } from './styled'

interface BaseImagesUploadProps extends Omit<ImageUploadingPropsType, 'value' | 'onChange'> {
  name?: string
  label?: string
  required?: boolean
  control?: any
  errors?: FieldErrors
  validate?: any
  setValue?: Function
  trigger?: Function
}

const BaseImagesUpload: FC<BaseImagesUploadProps> = ({
  name = '',
  label = '',
  required = false,
  control,
  errors,
  validate,
  setValue,
  trigger,
  ...props
}) => {
  const [images, setImages] = useState<ImageListType>([])

  const fieldsProps = {
    name,
    key: name,
    rules: {
      required:
        required &&
        formatMessage({
          id: 'global.required'
        }),
      validate
    },
    control
  }

  const handleImageChange = (imageList: ImageListType) => {
    setImages(imageList)
    if (name) {
      setValue(name, imageList)
      trigger([name])
    }
  }

  return (
    <StyledImagesUpload>
      <FormControl>
        {label && (
          <FormLabel error={!!errors[name]} required={required}>
            <span dangerouslySetInnerHTML={{ __html: `${label} :` }} />
          </FormLabel>
        )}
        <Controller
          {...fieldsProps}
          render={() => (
            <ImageUploading
              multiple
              dataURLKey="data_url"
              {...props}
              value={images}
              maxNumber={4}
              onChange={handleImageChange}
            >
              {({ dragProps, errors: uploadErrors, imageList, onImageUpload, onImageRemove }) => (
                <div className="reviews__drag">
                  {imageList.length > 0 && (
                    <ul className="reviews__upload">
                      {imageList.map((image: any, index: number) => (
                        <li key={`image__${Math.random()}`}>
                          <div
                            className="image"
                            style={{
                              backgroundImage: `url(${image.data_url})`
                            }}
                          />
                          <Button className="reviews__close" onClick={() => onImageRemove(index)}>
                            <i className="icon icon-remove" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div>
                    <Button className="reviews__add" onClick={onImageUpload} {...dragProps}>
                      <i className="icon icon-upload" />
                    </Button>
                  </div>
                  {uploadErrors && (
                    <div>
                      {uploadErrors.maxNumber && (
                        <span>Number of selected images exceed maxNumber</span>
                      )}
                      {uploadErrors.acceptType && <span>Your selected file type is not allow</span>}
                      {uploadErrors.maxFileSize && (
                        <span>Selected file size exceed maxFileSize</span>
                      )}
                      {uploadErrors.resolution && (
                        <span>Selected file is not match your desired resolution</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </ImageUploading>
          )}
        />
        {errors[name] && (
          <FormHelperText error={!!errors[name]}>
            {(errors as any)[name] ? (errors as any)[name].message : null}
          </FormHelperText>
        )}
      </FormControl>
    </StyledImagesUpload>
  )
}

export default BaseImagesUpload
