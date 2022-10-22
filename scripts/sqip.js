const sqip = require('sqip').default
const { resolve } = require('path')

;(async () => {
  try {
    await sqip({
      input: resolve(__dirname, '../public/new/nextPreview.jpg'),
      output: resolve(__dirname, '../preview/blog/'),
      plugins: [
        {
          name: 'sqip-plugin-primitive',
          options: {
            numberOfPrimitives: 12,
            mode: 0,
          },
        },
        'svgo'
      ]
    })
    console.log('SQIP Success --- done generating preview images')
  } catch (err) {
    console.log('Something went wrong generating the SQIP previews')
    console.error(err)
  }
})()