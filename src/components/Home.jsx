import React, { useState } from 'react';
import Kids from './Kids';
import KidsCollection from './KidsCollection';
import Women from './Women';
import Girls from './Girls';
import GirlsCollection from './GirlsCollection';
import WomenCollection from './WomenCollection';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState(null);

  return (
    <div>
      {selectedProduct ? (
        <>
          {category === 'Kids' && (
            <KidsCollection selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
          )}
          {category === 'Girls' && (
            <GirlsCollection selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
          )}
          {category === 'Women' && (
            <WomenCollection selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
          )}
        </>
      ) : (
        <>
          <Kids setSelectedProduct={setSelectedProduct} setCategory={() => setCategory('Kids')} />
          <Girls setSelectedProduct={setSelectedProduct} setCategory={() => setCategory('Girls')} />
          <Women setSelectedProduct={setSelectedProduct} setCategory={() => setCategory('Women')} />
        </>
      )}
    </div>
  );
}