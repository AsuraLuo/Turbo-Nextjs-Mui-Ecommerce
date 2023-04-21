import styled from '@emotion/styled'

export const StyledDropZone = styled('div')(() => ({
  marginBottom: '1rem',
  cursor: 'pointer',

  '& .MuiDropzoneArea-root': {
    minHeight: 'unset'
  },

  '& .MuiDropzoneArea-textContainer': {
    display: 'flex',
    padding: '20px',
    border: '2px dotted #3c64f4',
    borderRadius: '8px',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTypography-root': {
      fontSize: '1rem',
      color: '#767676',
      order: 1
    },

    '& .MuiSvgIcon-root': {
      marginRight: '0.5rem',
      fontSize: '3rem',
      color: '#d1d1d1'
    }
  },

  '& .MuiGrid-container': {
    width: '100%',
    margin: 0,

    '& .MuiGrid-item': {
      position: 'relative',
      display: 'flex',
      maxWidth: '120px',
      padding: '20px',
      margin: '20px 20px 0 0',
      borderRadius: '4px',
      boxShadow:
        '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)',
      flexBasis: '120px',
      flexDirection: 'column',
      alignItems: 'center',

      '& .MuiSvgIcon-root': {
        fontSize: '40px',
        color: '#757575'
      },

      '& .MuiTypography-root': {
        width: '100%',
        marginTop: '10px',
        overflow: 'hidden',
        fontSize: '1rem',
        textAlign: 'center',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },

      '& .MuiButtonBase-root': {
        position: 'absolute',
        top: '-12px',
        right: '-12px',
        width: '24px',
        height: '24px',
        minHeight: 'inherit',
        backgroundColor: '#757575',
        boxShadow: 'none',

        '& .MuiSvgIcon-root': {
          fontSize: '16px',
          color: '#fff'
        }
      }
    }
  }
}))
