import { useCallback, useMemo } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'
import type { InputBaseProps } from '@mui/material/InputBase'

export const useInputSpace = (props: InputBaseProps['inputProps']) => {
  const { onBlur, onChange, onKeyDown } = props ?? {}
  const pressEnterFlag = false

  const regex: RegExp = useMemo(() => {
    return /(^\s*)|(\s*$)/g
  }, [])

  const handleTrimSpace = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      let inputValue = e?.target?.value

      if (!(typeof regex === 'boolean' && !regex)) {
        inputValue = inputValue.replace(regex, '')
      }

      e.target.value = inputValue
      onChange?.(e)

      if (e?.type === 'blur' && typeof onBlur === 'function') {
        onBlur?.(e)
      } else if (e?.type === 'keydown' && typeof onKeyDown === 'function') {
        onKeyDown?.(e as unknown as KeyboardEvent<HTMLInputElement>)
      }
    },
    [onBlur, onChange, onKeyDown, regex]
  )

  const handleKeydown = useCallback(
    (e: any) => (pressEnterFlag ? handleTrimSpace(e) : onKeyDown?.(e)),
    [handleTrimSpace, onKeyDown, pressEnterFlag]
  )

  const inputSpaceEvent = useMemo(
    () => ({
      onBlur: handleTrimSpace,
      onKeyDown: handleKeydown
    }),
    [handleKeydown, handleTrimSpace]
  )

  return {
    inputSpaceEvent
  }
}
