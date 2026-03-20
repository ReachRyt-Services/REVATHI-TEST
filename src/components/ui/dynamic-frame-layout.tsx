"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Frame {
  id: number
  /** Video URL — takes priority over `image` if both provided */
  video?: string
  /** Image URL — used when no video is provided */
  image?: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize?: number
  borderThickness?: number
  borderSize?: number
  isHovered?: boolean
  /** Optional caption shown on hover */
  label?: string
}

interface FrameComponentProps {
  video?: string
  image?: string
  width: number | string
  height: number | string
  className?: string
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  showFrame: boolean
  isHovered: boolean
  label?: string
}

function FrameComponent({
  video,
  image,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
  label,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    if (isHovered) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isHovered])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {video ? (
              <video
                className="w-full h-full object-cover"
                src={video}
                loop
                muted
                playsInline
                ref={videoRef}
              />
            ) : image ? (
              <img
                className="w-full h-full object-cover transition-transform duration-700"
                src={image}
                alt={label ?? "Campus"}
                style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
              />
            ) : null}
          </div>
        </div>

        {/* Hover overlay with label */}
        {label && (
          <div
            className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
            style={{ zIndex: 3, background: "linear-gradient(to top, rgba(0,51,102,0.75) 0%, transparent 60%)", opacity: isHovered ? 1 : 0 }}
          >
            <span className="text-white font-black text-sm uppercase tracking-widest">{label}</span>
          </div>
        )}

        {showFrame && corner && edgeHorizontal && edgeVertical && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${corner})` }} />
            <div className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }} />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }} />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }} />
            <div className="absolute top-0 left-16 right-16 h-16" style={{ backgroundImage: `url(${edgeHorizontal})`, backgroundSize: "auto 64px", backgroundRepeat: "repeat-x" }} />
            <div className="absolute bottom-0 left-16 right-16 h-16" style={{ backgroundImage: `url(${edgeHorizontal})`, backgroundSize: "auto 64px", backgroundRepeat: "repeat-x", transform: "rotate(180deg)" }} />
            <div className="absolute left-0 top-16 bottom-16 w-16" style={{ backgroundImage: `url(${edgeVertical})`, backgroundSize: "64px auto", backgroundRepeat: "repeat-y" }} />
            <div className="absolute right-0 top-16 bottom-16 w-16" style={{ backgroundImage: `url(${edgeVertical})`, backgroundSize: "64px auto", backgroundRepeat: "repeat-y", transform: "scaleX(-1)" }} />
          </div>
        )}
      </div>
    </div>
  )
}

interface DynamicFrameLayoutProps {
  frames: Frame[]
  className?: string
  showFrames?: boolean
  hoverSize?: number
  gapSize?: number
}

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4,
}: DynamicFrameLayoutProps) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {initialFrames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4)
        const col = Math.floor(frame.defaultPos.x / 4)
        const isHov = hovered?.row === row && hovered?.col === col
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

        return (
          <motion.div
            key={frame.id}
            className="relative"
            style={{ transformOrigin, transition: "transform 0.4s ease" }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              video={frame.video}
              image={frame.image}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize ?? 1}
              borderThickness={frame.borderThickness ?? 4}
              borderSize={frame.borderSize ?? 90}
              showFrame={showFrames}
              isHovered={isHov}
              label={frame.label}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
