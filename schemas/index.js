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
import containerBlock from './blocks/containerBlock'  
import headingBlock from './blocks/headingBlock'     
import spacerBlock from './blocks/spacerBlock'
import contactForm from './blocks/contactForm'
import Form from './blocks/form'


import fontUpload from './blocks/fontUpload'
import footerSetting from './blocks/footerSettings'
import menu from './blocks/menu'
import menuitem from './blocks/menuitem'
import post from './blocks/post'
import siteSettings from './blocks/siteSettings'
import { FaCog } from 'react-icons/fa'
// import mediaAsset from './blocks/mediaAsset'
import category from './blocks/category'

export const schemaTypes = [
  siteSettings,
  menu,
  menuitem,
  footerSetting,
  page,
  post,
  category,
  builderBlock,
  heroSection,
  textBlock,
  imageBlock,
  videoBlock,
  buttonBlock,
  columnsBlock,
  containerBlock,  
  headingBlock,    
  spacerBlock,
  fontUpload, 
  // mediaAsset,
  contactForm,
  Form,
]
