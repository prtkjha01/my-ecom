import React from "react";
import styles from "../styles/SearchContainer.module.css";
import { Grid, GridItem } from "@chakra-ui/react";
const SearchContainer = () => {
  const count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={`${styles.superContainer}`}>
      <div>
        <div>
          <Grid p={6} templateColumns="repeat(4, 1fr)" gap={8}>
            {count.map((element) => {
              return (
                <GridItem
                  className={styles.loda}
                  w="100%"
                  //  h="80"
                  bg="#fff"
                  boxShadow={`xl`}
                  _hover={{
                    // backgroundColor: "green",
                    // width: "400px",
                    boxShadow: "500px #808080",
                    margin: "0 10px",
                    // zIndex: 1,
                    // border: "5px solid red",
                  }}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
