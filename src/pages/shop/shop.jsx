import React, { Component } from 'react';

import './shop.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        return (
            <div className='shop'>
                <h1>SHOP PAGE</h1>
                {
                    this.state.collections.map(({ id, ...otherProps}) =>
                        <CollectionPreview key={id} {...otherProps}/>
                    )
                }
            </div>
        );
    }
}

export default ShopPage;