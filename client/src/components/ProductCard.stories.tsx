import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './ProductCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product Card',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'Test',
    price: 1000,
};