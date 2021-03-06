/**
 * 检查 `value` 是否是一个数字。
 *
 * @param value 要检查的值
 * @returns 是（true）或否（false）
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number'
}
