import { createSelector } from 'reselect'

export const albumsNewerThanThe80s = state =>
  state.albums.filter(album => album.year > 1980)

export const rockAlbums = state =>
  state.albums.filter(album => album.genre.indexOf('rock') > 0)

export const getVisibleRefData = createSelector(
  albumsNewerThanThe80s, albums => rockAlbums({ albums })
)
