import { useEffect, useRef, useState } from "react"

const CANVAS_HEIGHT = 240

export function useHistoricalChart(){

    const [canvasWidth, setCanvasWidth] = useState(0)
    const historicalPriceRef = useRef<HTMLDivElement>(null)

    const handleReturnResize = () => {
      if (historicalPriceRef.current) {
          setCanvasWidth(historicalPriceRef.current.clientHeight)
      }
    }

    useEffect(() => {
      window.addEventListener("resize", handleReturnResize)
      return () => window.removeEventListener("resize", handleReturnResize)
    }, [historicalPriceRef])
    
    useEffect(() => {
      if (historicalPriceRef.current) {
          setCanvasWidth(historicalPriceRef.current.clientWidth)
      }
    }, [])

    return {
        canvasWidth,
        canvasHeight: CANVAS_HEIGHT,
        historicalPriceRef,
    }
}