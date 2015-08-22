export function SELECT_FILES (domain, { data: { files } }) {
  return domain.clear().push(...files)
}
