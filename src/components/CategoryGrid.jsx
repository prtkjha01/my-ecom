import React from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";
import styles from '../styles/CategoryGrid.module.css'
const gridItems = [
    {
        id : 1,
        title : 'Tech',
        banner: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fDElM0EyJTIwdGVjaCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        row : 2,
        col : 1,
    },
    {
        id : 2,
        title : 'Clothing',
        banner: 'https://images.unsplash.com/photo-1501073959548-c699978d65ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
        row : 1,
        col : 2,
    },
    {
        id : 3,
        title : 'Fitness',
        banner: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
        row : 1,
        col : 2,
    },
    {
        id : 4,
        title : 'Personal Care',
        banner: 'https://images.unsplash.com/photo-1487412840181-f63f62e6a0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        row : 1,
        col : 3,
    },
    {
        id : 5,
        title : 'Books',
        banner: 'https://images.unsplash.com/photo-1581447109217-19026003eba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fDElM0ExJTIwYm9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        row : 1,
        col : 1,
    }
]
const CategoryGrid = () => {
  return (
    <div>
      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        px={8}
        my={4}
        gap={4}
      >
        {
            gridItems.map((gridItem, i)=>{
                return (
                <GridItem 
                    className={styles.gridItem}
                    key={gridItem.id} 
                    rowSpan={gridItem.row} 
                    colSpan={gridItem.col} 
                    bg="papayawhip" 
                >
                    <Image className={styles.bannerImage} src={gridItem.banner}/>
                    <p
                        className={styles.text}
                    >
                        {gridItem.title}
                    </p>
                </GridItem>
                )
            })
        }
      </Grid>
    </div>
  );
};

export default CategoryGrid;
