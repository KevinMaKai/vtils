import { forOwn } from './forOwn'

export function defaultValue<
  T extends { [key: string]: any },
  X extends Partial<T>,
>(getDefaultValue: (obj: X) => T, obj: X): T {
  const defaultValue = getDefaultValue(obj)
  forOwn(obj, (value, key) => {
    if (value != null) {
      defaultValue[key as any] = value
    }
  })
  return defaultValue
}
