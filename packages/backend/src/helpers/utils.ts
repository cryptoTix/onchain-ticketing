export function GetCurrentUTCTimestamp() : number {
  const now = new Date(Date.now())
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes())
}