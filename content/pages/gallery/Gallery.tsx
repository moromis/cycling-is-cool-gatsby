import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react'
import useGallery from "../../../src/hooks/useGallery"

const Gallery = () => {
    const images = useGallery()
    console.log(images)

    return (
        <div>
            {images.map((image) => (
                // <Image src={image.gatsbyImageData.images.fallback.src} key={image.id} alt={image.id} />
                <GatsbyImage objectFit="contain" key={image.id} image={image.gatsbyImageData} alt={image.id} style={{ maxHeight: "100vh" }} />
            ))}
        </div>
    )
}

export default Gallery