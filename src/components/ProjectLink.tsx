import React, { useState } from "react";
import { Link, Button, Menu, MenuItem } from "@mui/material";

type ProjectLinkProps = {
  href?: string;
  text: string;
  iconSrc: string;
  altText: string;
  onClick?: () => void;
  menuItems?: { label: string; onClick: () => void }[];
  variant?: "link" | "button";
};

export default function ProjectLink({
  href,
  text,
  iconSrc,
  altText,
  onClick,
  menuItems,
  variant = "link",
}: ProjectLinkProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  if (variant === "link" && href) {
    return (
      <Link
        sx={{
          textTransform: "uppercase",
          fontSize: "12px",
          lineHeight: "16px",
          textDecoration: "none",
          color: "#7692ff",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center", 
          ":hover": {
            textDecoration: "underline",
          },
        }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={iconSrc}
          alt={altText}
          style={{ width: "18px", height: "18px", marginLeft: "6px" }}
        />
        {text}
      </Link>
    );
  }

  if (variant === "button" && menuItems && menuItems.length > 0) {
    return (
      <>
        <Button
          onClick={handleClick}
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            lineHeight: "16px",
            textDecoration: "none",
            color: "#7692ff",
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center", 
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          <img
          src={iconSrc}
          alt={altText}
          style={{ width: "18px", height: "18px", marginLeft: "2px" }}
        />
          {text}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: "max",
              maxHeight: "max",
            },
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={item.onClick}
              sx={{
                fontSize: "12px", 
                color: "#7692ff",
                backgroundColor: "2b2d42",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }

  return null;
}