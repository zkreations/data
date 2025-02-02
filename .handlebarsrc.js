import Handlebars from 'handlebars'


const ternary = (cond, valorTrue, valorFalse) => {
  return cond ? valorTrue : valorFalse;
}

const stringify = (context) => {
  const jsonString = JSON.stringify(context)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/:"/g, ': "')
    .replace(/&#x3D;/g, '=')
    .replace(/"(\([^"]+\))"/g, '$1')

  return new Handlebars.SafeString(decodeURI(jsonString))
}

export default {
  helpers: {
    ternary,
    stringify
  }
}
