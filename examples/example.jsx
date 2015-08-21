import React from 'react';
import Colgroup from '../src/Colgroup.jsx';

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
