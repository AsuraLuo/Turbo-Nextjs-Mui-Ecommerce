import { FC, useEffect, useRef, useState } from 'react'
import { Editor, IAllProps } from '@tinymce/tinymce-react'

import { StyledTinymceEditor } from './styled'

const BaseTinymceEditor: FC<IAllProps> = ({ apiKey, ...props }) => {
  const editorRef = useRef<any>(null)
  const [visible, setVisible] = useState<boolean>(false)

  const handleEditorInit = (event, editor) => {
    editorRef.current = editor
  }

  const handleEditorChange = (values: any) => {
    console.info(values)
  }

  useEffect(() => {
    setVisible(true)
  }, [])

  // const log = () => {
  //   if (editorRef.current) {
  //     console.info(editorRef.current.getContent())
  //   }
  // }

  return (
    <StyledTinymceEditor>
      {visible && (
        <Editor
          apiKey={apiKey}
          {...props}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'a11ychecker',
              'advlist',
              'advcode',
              'advtable',
              'autolink',
              'checklist',
              'export',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'powerpaste',
              'code',
              'fullscreen',
              'formatpainter',
              'insertdatetime',
              'media',
              'table',
              'help',
              'wordcount'
            ],
            toolbar:
              'undo redo | casechange blocks | bold italic backcolor | ' +
              'alignleft aligncenter alignright alignjustify | ' +
              'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          onInit={handleEditorInit}
          onEditorChange={handleEditorChange}
        />
      )}
    </StyledTinymceEditor>
  )
}

export default BaseTinymceEditor
