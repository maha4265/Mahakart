import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/material/Grid2';
import { girls_images } from './Girls';
import { useCart } from './CartContext';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    boxShadow: theme.shadows[5],
  },
}));

export default function GirlsCollection({ selectedProduct, setSelectedProduct }) {
  const { addToCart } = useCart();
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          
          <Grid item xs={12} sm={4}>
            <Item>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <img
                  src={selectedProduct.url}
                  alt={selectedProduct.title}
                  style={{ objectFit: 'cover', width: '100%', maxHeight: '250px' }}
                />
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Item>
              <Typography level="title-lg">{selectedProduct.title}</Typography>
              <Typography level="body-lg">Rs.{selectedProduct.price}</Typography>
              <Typography level="title-lg">PRODUCT DESCRIPTION</Typography>
              <Typography level="body-sm">{selectedProduct.description}</Typography>
              <Button
                variant="solid"
                color="success"
                size="lg"
                onClick={() => addToCart(selectedProduct)}
              >
                Add to cart
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 3 ,textAlign: 'center'}}>
        <Typography level="title-lg">RELATED PRODUCTS</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {girls_images
            .filter((image) => image.title !== selectedProduct.title)
            .map((image, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Item onClick={() => setSelectedProduct(image)}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <img
                      src={image.url}
                      alt={image.title}
                      style={{ objectFit: 'cover', width: '100%', maxHeight: '200px' }}
                    />
                  </Box>
                  <Typography level="body-xs">{image.title}</Typography>
                  <Typography level="body-xs">Rs.{image.price}</Typography>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>

    </div>
  );
}