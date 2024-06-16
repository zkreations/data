import Handlebars from 'handlebars'

export default {
  helpers: {
    stringify: function (context) {
      const jsonString = JSON.stringify(context)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/:"/g, ': "')
        .replace(/&#x3D;/g, '=')
        .replace(/"(\([^"]+\))"/g, '$1')

      return new Handlebars.SafeString(decodeURI(jsonString))
    }
  }
}
