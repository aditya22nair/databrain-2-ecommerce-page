import React from 'react'
import Product from './Product'
import { Grid } from '@mui/material'
// import { products } from '../Data'

function Products({products}) {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                //<div>product.name</div>
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Products