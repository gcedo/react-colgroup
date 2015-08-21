# react-colgroup
This simple React component is meant to use the `<colgroup>` tag to statically
set the number and width of columns in a HTML table.

## Example
In the following example, we create a table where the columns will be respectively 120, 140 and 200 pixels wide.

```javascript
import React from 'react';
import Colgroup from 'react-colgroup';

const table = (
    <table>
        <Colgroup cols={[120, 140, 200]}/>
        <tbody>
            <tr>
                <td>Hello</td>
                <td>World</td>
                <td>!</td>
            </tr>
        </tbody>
    </table>
);


React.render(table, document.getElementById('colgroup-example'));
```
