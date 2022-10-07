function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT = '/';

export const PATH_PAGE = {
  homeFC: ROOT,
  homeCC: path(ROOT, 'homecc'),
  settings: path(ROOT, 'settings'),
};