import React from 'react';
import Button from '../../components/common/Button';
const FeaturedCategories = () => {
    return (React.createElement("div", { className: "mt-15" },
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2 page-width" },
            React.createElement("div", null,
                React.createElement("div", { className: "text-center" },
                    React.createElement("img", { src: "/public/images/men-shoes.jpeg", alt: "" })),
                React.createElement("h3", { className: "h4 uppercase mt-1 mb-1" }, "Nvidia Geforce PCs"),
                React.createElement("div", { className: "mb-1" },
                    React.createElement("p", null, "NVIDIA GeForce powered PCs deliver exceptional gaming performance and provide a premium gaming experience. With state-of-the-art graphics technology, NVIDIA GeForce graphics cards provide stunning visual effects, smooth gameplay, and unmatched power efficiency.")),
                React.createElement(Button, { href: "/category/nvidia", title: "Nvidia", label: "Shop Nvidia" })),
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("img", { src: "/public/images/women-shoes.jpeg", alt: "" })),
                React.createElement("h3", { className: "h4 uppercase mt-1 mb-1" }, "AMD Radeon PCs"),
                React.createElement("div", { className: "mb-1" },
                    React.createElement("p", null, "AMD Radeon powered PCs offer an exceptional gaming experience, delivering stunning visuals and smooth performance for even the most demanding games. With advanced graphics technology and optimized drivers, AMD Radeon graphics cards provide exceptional performance and efficiency for gamers, content creators, and professionals.")),
                React.createElement(Button, { href: "/category/amd", title: "Amd", label: "Shop Amd" })),
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("img", { src: "/public/images/kid-shoes.jpeg", alt: "" })),
                React.createElement("h3", { className: "h4 uppercase mt-1 mb-1" }, "Intel Arc PCs"),
                React.createElement("div", { className: "mb-1" },
                    React.createElement("p", null, "Intel Arc powered PCs are a powerful and exciting choice for gamers, content creators, and professionals. With the new Intel Arc graphics technology, Intel Arc powered PCs offer an exceptional gaming experience with stunning visuals and smooth performance.")),
                React.createElement(Button, { href: "/category/intel", title: "Intel", label: "Shop Intel Arc" })))));
};
export default FeaturedCategories;
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
