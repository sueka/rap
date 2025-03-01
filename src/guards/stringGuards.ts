export function isUrl(input: string): input is string.Url {
  try {
    new URL(input)

    return true
  } catch (error: unknown) {
    return false
  }
}

export function seemsLikeGtmContainerId(input: string): input is `GTM-${string}` {
  return /^GTM-.*$/.test(input)
}
