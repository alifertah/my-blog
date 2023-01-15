import React from 'react'
import NextNProgress from 'nextjs-progressbar'

export default function Progressbar() {
  return (
    <div>
        <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        />
    </div>
  )
}