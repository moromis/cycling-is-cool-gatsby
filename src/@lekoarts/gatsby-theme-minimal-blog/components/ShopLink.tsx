/** @jsx jsx */
import { jsx, ThemeUICSSObject } from "theme-ui"

const divStyles: ThemeUICSSObject = {
    textAlign: "center",
    fontSize: "8rem",
    padding: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "6px solid",
    borderColor: "secondary",
    backgroundImage: `
        url("logo-transparent-half-opacity.png")
    `,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }

const textStyles: ThemeUICSSObject = { 
    color: "secondary",
    fontWeight: "bold",
    opacity: 1,
    // WebkitTextStroke: "white 3px",
    fontSize: "7rem",
    "&:hover": {
        fontSize: "9rem",
        color: "primary",
        WebkitTextStroke: "white 4px",
    },
    transition: "color 0.4s, font-size 0.4s"
}

const ShopLink = () => (
    <div sx={divStyles}>
        <a href="/shop" sx={textStyles}>Shop</a>
    </div>
)

export default ShopLink