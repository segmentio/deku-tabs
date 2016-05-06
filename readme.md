
# deku-tabs

A tabs component for Deku.

![Demo]()

## Usage

```js
import { Tabs, Tab } from '@segment/deku-tabs';

function render() {
  return (
    <Tabs>
      <Tab label="1" href='/1' active={active === '1'} />
      <Tab label="2" href='/2' active={active === '2'} />
      <Tab label="3" href='/3' active={active === '3'} />
    </Tabs>
  );
}
```
