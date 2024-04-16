import React from 'react'
import whatsapp from "../../assets/whatsapp.png"

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/923288888090" className="whatsapp-cta">
        <img src={whatsapp} width="60px" alt="whatsapp icon" />
    </a>
  )
}
