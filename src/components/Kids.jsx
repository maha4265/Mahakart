import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { CartContext } from './CartContext';

export const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQt5uhy-kWNECmWps_O9dwmP-c5zKLiPDgw&s',
    title: 'Cutedoll Net Sparkle Toddler Girls Party Dress',
    price: 1500,
    stock: '5',
    description: 'The Cutedoll Net Sparkle Toddler Girls Party Dress is a charming and elegant choice for special occasions.',
  },
  {
    url: 'https://www.cutedoll.in/cdn/shop/files/Untitleddesign_25.jpg?v=1735384911&width=600',
    title: 'Girls Purple Floral Applique Party Dress',
    price: 500,
    stock: '7',
    description: 'A stylish and comfortable dress for baby girls.For Smart and preferred look ,  this dress looks smart when picked a little shorter than knees',
  },
  {
    url: 'https://www.cutedoll.in/cdn/shop/files/434186015_18299604730152249_1733591701942102733_n.jpg?v=1715596917&width=493',
    title: 'Girls Mint Green Off Shoulder Frock Dress',
    price: 1000,
    stock: '10',
    description: 'The Girls Mint Green Off Shoulder Frock Dress is a charming choice for kids parties!it features a stylish off-shoulder design that adds a trendy flair',
  },
];

export default function Kids({ setSelectedProduct, setCategory }) {
  const { addToCart } = React.useContext(CartContext);
  return (
    <div>
      <h1>Kids Collection</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <Card
            key={index}
            sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src={image.url} alt={image.title} style={{ objectFit: 'auto', width: '100%' }} />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">{image.title}</Typography>
              <Typography level="title-lg">
                <Chip component="span" size="sm" variant="soft" color="warning">
                  Rs.{image.price}
                </Chip>
              </Typography>
              <Typography level="body-sm">(Only <b>{image.stock}</b> left in stock!)</Typography>
            </CardContent>
            <CardOverflow>
              <Button variant="solid" color="white" size="sm" onClick={() => {setSelectedProduct(image);setCategory("Kids");}}>
                View Details ⏩
              </Button>
            </CardOverflow>
            <CardOverflow>
              <Button variant="solid" color="success" size="sm"  onClick={() => addToCart(image)}>
                Add to cart
              </Button>
            </CardOverflow>
          </Card>
        ))}
      </div>
    </div>
  );
}