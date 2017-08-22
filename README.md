# status-interfaces
Importable [HTTP Status interface objects](https://github.com/carrot/restful-api-spec#base-interface).

Works well with `Object.assign()`.

## Install

`npm i status-interfaces`

## Usage

```js
import si from 'status-interfaces'

router.get(`/:id`, ctx => {
  const record = find(dataSource, o => o.id === Number(ctx.params.id))

  if (record) {
    ctx.body = Object.assign(si(200), {
      content: record
    })
  } else {
    ctx.body = si(404)
  }
})
```
