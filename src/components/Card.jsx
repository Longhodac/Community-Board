import React from 'react'

export default function Card({ name, description, link, image }) {
  return (
    <div className="card">
      {/* show the spot’s image */}
      <img src={image} alt={name} className="card-image" />

      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          Visit Website
        </a>
      </div>
    </div>
  )
}
