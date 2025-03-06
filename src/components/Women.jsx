import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { CartContext } from './CartContext';

export const women_images = [
  {
    url: 'https://singhanias.in/cdn/shop/products/359965_20PL.jpg?v=1668123221&width=770',
    title: 'Sky Blue Tissue Kanjivaram Silk',
    price: 2500,
    stock: '9',
    description: 'This sky blue pattu saree intricate floral jaal design delicately adorns the entire body. ',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqNnapretbApsfvaI_HbLynIri1ganMIWJw&s',
    title: 'Teal Color South Style Poly Cotton Half Saree Set',
    price: 3700,
    stock: '8',
    description: 'Elevate your ethnic wardrobe with the Suratikart Teal Color Poly Cotton Half Saree Set.',
  },
  {
    url: 'https://nehamta.com/cdn/shop/files/184A6694.jpg?v=1706166123&width=1080',
    title: 'PANIHARI COLLECTION Women Kurta Churidar',
    price: 800,
    stock: '10',
    description: 'Boasting a delightful mix of patterns, this exquisite women’s kurta, pants, and dupatta set adds a vibrant touch to your wardrobe.',
  },
];

export default function Women({ setSelectedProduct, setCategory }) {
  const { addToCart } = React.useContext(CartContext);
  return (
    <div>
      <h1>Women Collection</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {women_images.map((image, index) => (
          <Card
            key={index}
            sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src={image.url} alt={image.title} style={{ objectFit: 'auto', width: '100%', height: '100%' }} />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">{image.title}</Typography>
              <Typography level="title-lg">
                <Chip component="span" size="sm" variant="soft" color="warning">
                  RS.{image.price}
                </Chip>
              </Typography>
              <Typography level="body-sm">(Only <b>{image.stock}</b> left in stock!)</Typography>
            </CardContent>
            <CardOverflow>
              <Button variant="solid" color="white" size="sm" onClick={() => { setSelectedProduct(image); setCategory("Women"); }}>
                View Details ⏩
              </Button>
            </CardOverflow>
            <CardOverflow>
              <Button variant="solid" color="success" size="sm" 
                                onClick={() => addToCart(image)}>
                Add to cart
              </Button>
            </CardOverflow>
          </Card>
        ))}
      </div>
    </div>
  );
}