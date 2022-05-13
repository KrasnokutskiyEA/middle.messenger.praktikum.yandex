export default function get (object: Record<string, any>, path: string, defaultValue?: string): any {
  const parts = path.split('.')
  for (const part of parts) {
    if (!object) return defaultValue
    object = object[part]
  }
  return object ?? defaultValue
}
