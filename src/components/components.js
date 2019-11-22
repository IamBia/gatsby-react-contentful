import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import Post from './singlePost'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  post: Post
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components