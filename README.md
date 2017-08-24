# status-interfaces

Function for setting [HTTP Status interfaces](https://github.com/carrot/restful-api-spec#base-interface) and an object for `content` quickly.

> *Note:* Metadata is wrapped in `meta` obj.

## Install

`npm i status-interfaces`

## API

`si(code, [{content}], [[error objects]])`

## Usage

```js
import si from 'status-interfaces'

router.get(`/:id`, ctx => {
  const record = find(dataSource, o => o.id === Number(ctx.params.id))

  if (record) {
    ctx.body = si(200, {
      record
    })
  } else {
    ctx.body = si(404, undefined, [ // this doesn't actually work because Koa doesn't escape here. I'll write some Koa middleware when time allows.
      {
        code: 1,
        text: `Ya dun goofed...`
      }
    ])
  }
})
```
