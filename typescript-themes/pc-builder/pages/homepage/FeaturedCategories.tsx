import React, { FC } from 'react';
import Button from '../../components/common/Button';

const FeaturedCategories: FC = () => {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/public/images/men-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Nvidia Geforce PCs</h3>
          <div className="mb-1">
            <p>
                NVIDIA GeForce powered PCs deliver exceptional gaming performance and provide a premium gaming experience. With state-of-the-art graphics technology, NVIDIA GeForce graphics cards provide stunning visual effects, smooth gameplay, and unmatched power efficiency.
            </p>
          </div>
          <Button href="/category/nvidia" title="Nvidia" label="Shop Nvidia" />
        </div>
        <div>
          <div>
            <img src="/public/images/women-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">AMD Radeon PCs</h3>
          <div className="mb-1">
            <p>
                AMD Radeon powered PCs offer an exceptional gaming experience, delivering stunning visuals and smooth performance for even the most demanding games. With advanced graphics technology and optimized drivers, AMD Radeon graphics cards provide exceptional performance and efficiency for gamers, content creators, and professionals.
            </p>
          </div>
          <Button href="/category/amd" title="Amd" label="Shop Amd" />
        </div>
        <div>
          <div>
            <img src="/public/images/kid-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Intel Arc PCs</h3>
          <div className="mb-1">
            <p>
                Intel Arc powered PCs are a powerful and exciting choice for gamers, content creators, and professionals. With the new Intel Arc graphics technology, Intel Arc powered PCs offer an exceptional gaming experience with stunning visuals and smooth performance.
            </p>
          </div>
          <Button href="/category/intel" title="Intel" label="Shop Intel Arc" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout: object = {
  areaId: 'content',
  sortOrder: 10
};
