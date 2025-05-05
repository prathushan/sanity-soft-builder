// schemas/index.js

import page from './page'
import builderBlock from './builderBlock'

// Import blocks
import heroSection from './blocks/heroSection'
import textBlock from './blocks/textBlock'
import imageBlock from './blocks/imageBlock'
import videoBlock from './blocks/videoBlock'
import buttonBlock from './blocks/buttonBlock'
import columnsBlock from './blocks/columnsBlock'
import containerBlock from './blocks/containerBlock'  // ✅ Add this
import headingBlock from './blocks/headingBlock'      // ✅ And this
import spacerBlock from './blocks/spacerBlock'

export const schemaTypes = [
  page,
  builderBlock,
  heroSection,
  textBlock,
  imageBlock,
  videoBlock,
  buttonBlock,
  columnsBlock,
  containerBlock,  // ✅ Included
  headingBlock,    // ✅ Included
  spacerBlock
]
