import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { CartContext } from './CartContext';

export const girls_images = [
  {
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqPqSRosVNF7toGbtNQLg7zv3RbLRBjxY5ArQtFDuDGOvWG18Nup95wi2spCgyqmmDiWsNrpL9e9dSB0ShTbLMEpvXQuVFAqlHA4jXAiEDdMhbkpeprskz6w&usqp=CAE',
    title: 'Cherry & Jerry Girls Cream Maxi Dress',
    price: 1500,
    stock: '5',
    description: 'Girls Cream Maxi Maxi Dress has Long Sleeves, Flared hemline, and Square Neck.',
  },
  {
    url: 'https://images.meesho.com/images/products/384983175/fhgox_400.webp',
    title: 'White Printed Cotton Maxi Dress',
    price: 700,
    stock: '7',
    description: 'Our white printed fit and flare cotton dress features a V-neckline and three-quarter sleeves.',
  },
  {
    url: 'https://images.meesho.com/images/products/387360710/y7mrb_400.webp',
    title: 'Net Fabrics Beautifull One Peace',
    price: 1000,
    stock: '10',
    description: 'This charming black midi dress features a delicate daisy floral pattern, perfect for casual outings and summer events.',
  },
];

export default function Girls({ setSelectedProduct, setCategory }) {
const { addToCart } = React.useContext(CartContext);
  return (
    <div>
      <h1>Girls Collection</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {girls_images.map((image, index) => (
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
                  Rs.{image.price}
                </Chip>
              </Typography>
              <Typography level="body-sm">(Only <b>{image.stock}</b> left in stock!)</Typography>
            </CardContent>
            <CardOverflow>
              <Button variant="solid" color="white" size="sm" onClick={() => {setSelectedProduct(image);setCategory("Girls");}}>
                View Details ⏩
              </Button>
            </CardOverflow>
            <CardOverflow>
              <Button variant="solid" color="success" size="sm" onClick={() => addToCart(image)}>
                Add to cart
              </Button>
            </CardOverflow>
          </Card>
        ))}
      </div>
    </div>
  );
}