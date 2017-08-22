# status-interfaces

Function for setting [HTTP Status interfaces](https://github.com/carrot/restful-api-spec#base-interface) and an object for `content` quickly.

## Install

`npm i status-interfaces`

## Usage

```js
import si from 'status-interfaces'

router.get(`/:id`, ctx => {
  const record = find(dataSource, o => o.id === Number(ctx.params.id))

  if (record) {
    ctx.body = Object.assign(si(200, {
      record
    })
  } else {
    ctx.body = si(404)
  }
})
```
