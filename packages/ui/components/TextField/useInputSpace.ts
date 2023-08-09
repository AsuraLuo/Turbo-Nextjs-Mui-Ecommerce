import { useCallback, useMemo } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'

export const useInputSpace = (props: any) => {
  const { onBlur, onChange, onKeyDown, ...rest } = props ?? {}
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
      ...rest,
      onChange,
      onBlur: handleTrimSpace,
      onKeyDown: handleKeydown
    }),
    [rest, onChange, handleTrimSpace, handleKeydown]
  )

  return {
    inputSpaceEvent
  }
}
