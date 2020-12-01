import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './page'
import show from './show'
import list from './list'
import form from './form'
import address from './address'
import externalMedia from './externalMedia'
import buttonLink from './buttonLink'
import band from './band'
import venue from './venue'
import scPlayer from './scPlayer'
import youTubeVideo from './youTubeVideo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    show,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    list,
    form,
    address,
    externalMedia,
    buttonLink,
    band,
    venue,
    scPlayer,
    youTubeVideo,
  ]),
})
