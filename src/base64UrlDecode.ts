import { base64Decode } from './base64Decode'

/**
 * 返回 base64url 解码后的字符串。
 *
 * @param str 要解码的字符串
 * @returns 解码后的字符串
 * @see http://www.ietf.org/rfc/rfc4648.txt
 */
export function base64UrlDecode(str: string): string {
  return base64Decode(str.replace(/-/g, '+').replace(/_/g, '/'))
}
