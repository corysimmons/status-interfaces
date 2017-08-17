# status-interfaces
Importable HTTP Status interface objects.

## Install

`npm i status-interfaces`

## Usage

```js
import { statusOk, statusNotFound } from 'status-interfaces

router.get(`/:id`, ctx => {
  const record = find(dataSource, o => o.id === Number(ctx.params.id))

  if (record) {
    ctx.body = Object.assign(statusOk, {
      content: record
    })
  } else {
    ctx.body = statusNotFound
  }
})
```
