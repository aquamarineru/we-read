import React from 'react'

export default function Tooltip({ text, children }) {
  return (
    <div className="tooltip-container">
    {children}
    <div className="tooltip-content">{text}</div>
  </div>
  )
}
