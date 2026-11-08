// Turns a title into a URL slug.
// Known bug (the demo job): accented letters become dashes instead of plain letters.
export function slugify(title) {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
