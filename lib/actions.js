export function selectFiles (files) {
  return {
    name: 'SELECT_FILES',
    data: { files }
  }
}
