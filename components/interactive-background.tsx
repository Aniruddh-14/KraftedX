"use client"

import { useEffect, useRef, useState } from "react"

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Calculate gradient position based on mouse movement
  const gradientX = (mousePosition.x / dimensions.width) * 100
  const gradientY = (mousePosition.y / dimensions.height) * 100

  // Calculate the distance from center for intensity
  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2
  const distanceX = (mousePosition.x - centerX) / centerX
  const distanceY = (mousePosition.y - centerY) / centerY

  // Create a dynamic gradient that follows the mouse
  const backgroundStyle = {
    background: `radial-gradient(
      circle at ${gradientX}% ${gradientY}%, 
      rgba(120, 119, 198, 0.8) 0%, 
      rgba(88, 94, 229, 0.4) 25%, 
      rgba(72, 79, 225, 0.2) 50%, 
      rgba(59, 66, 177, 0.1) 75%,
      rgba(30, 33, 93, 0.05) 100%
    )`,
    filter: `blur(${Math.abs(distanceX * distanceY) * 30 + 60}px)`,
    transform: `translate(${distanceX * -20}px, ${distanceY * -20}px)`,
    opacity: 0.8,
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 transition-all duration-300 ease-out" style={backgroundStyle} />
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[100px]" />
    </div>
  )
}
