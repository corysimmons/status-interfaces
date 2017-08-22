# status-interfaces

Function for setting [HTTP Status interfaces](https://github.com/carrot/restful-api-spec#base-interface) and an object for `content` quickly.

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
    ctx.body = Object.assign(si(200, {
      record
    })
  } else {
    ctx.body = si(404, undefined, [
      {
        code: 1,
        text: `Ya dun goofed...`
      }
    ])
  }
})
```
