# parse-to-all (parse to All Types)

This library parses all possible outputs

### Return types

- integer
- float
- string
- array
- arrayInteger
- arrayFloat
- arrayString
- object

## Installation
<pre>npm install parse-to-all</pre>


## Usage
#### parseAll(value)
```javascript
const pa = require('parse-to-all');

console.log(pa.parseAll(12.55));

// Returns:
{
  integer: 12,
  float: 12.55,
  string: '12.55',
  array: [ 12.55 ],
  arrayInteger: [ 12 ],
  arrayFloat: [ 12.55 ],
  arrayString: [ '12.55' ],
  object: { value: 12.55 }
}

```
