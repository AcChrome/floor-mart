import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$255",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/328c107b-0189-4707-8c80-fdd7b34af8ae/zoomx-vaporfly-next-2-road-racing-shoes-VkbrS0.png",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "$1800",
    image: "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SL1500_.jpg",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
