import PropTypes from 'prop-types';
import React, { FC } from 'react';
import Area from '@evershop/evershop/src/components/common/Area';
import './GeneralInfo.scss';
import { Name } from '@evershop/evershop/src/components/frontStore/catalog/product/single/Name';
import { Price } from '@evershop/evershop/src/components/frontStore/catalog/product/single/Price';
import { Sku } from '@evershop/evershop/src/components/frontStore/catalog/product/single/Sku';

interface GeneralInfoProps{
    product: any
}

const GeneralInfo: FC<GeneralInfoProps> = (props) => {
    const product: any = props.product;
    const sku: string = product.sku
    const index: number = sku.indexOf('_');
    const category: string = sku.substring(0, index);
    const theme: string = `
    main.content {
        background-image: url(/images/${category}.png);
        background-size: cover;
    }
    `
    return (
        <>
            <style>{theme}</style>
            <Area
                id="productViewGeneralInfo"
                coreComponents={[
                    {
                    component: { default: Name },
                    props: {
                        name: product.name
                    },
                    sortOrder: 10,
                    id: 'productSingleName'
                    },
                    {
                    component: { default: Price },
                    props: {
                        regular: product.price.regular,
                        special: product.price.special
                    },
                    sortOrder: 10,
                    id: 'productSinglePrice'
                    },
                    {
                    component: { default: Sku },
                    props: {
                        sku: product.sku
                    },
                    sortOrder: 20,
                    id: 'productSingleSku'
                    }
                ]}
            />
        </>
    );
}

export default GeneralInfo;

GeneralInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    price: PropTypes.shape({
      regular: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      }),
      special: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
    })
  }).isRequired
};

export const layout: {[key: string]: any} = {
  areaId: 'productPageMiddleRight',
  sortOrder: 10
};

export const query: string = `
  query Query {
    product (id: getContextValue('productId')) {
      name
      sku
      price {
        regular {
          value
          text
        }
        special {
          value
          text
        }
      }
    }
  }`;
