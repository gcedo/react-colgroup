import React, {PropTypes} from 'react';

class Colgroup extends React.Component {

    render() {
        const cols = this.props.cols.map((colWidth, index) =>
            <col key={'col' + index} style={{width: colWidth}}/>
        );

        return (
            <colgroup>
                {cols}
            </colgroup>
        );
    }
}

Colgroup.propTypes = {
    /**
     * An array containing the sizes of the different columns.
     *
     * @type {Array.<Number>}
     */
    cols: PropTypes.arrayOf(PropTypes.number)
}

export default Colgroup;
