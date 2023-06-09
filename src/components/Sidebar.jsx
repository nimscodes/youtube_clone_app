import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="column"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: selectedCategory === category.name && "#fc1503",
            color: "white",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color: selectedCategory === category.name ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? 1 : 0.8,
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
