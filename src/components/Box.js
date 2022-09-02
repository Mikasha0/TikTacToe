import React from 'react'

export default function Box({mark,Click}) {
    const myStyle = mark === "X" ? "box x" : "box o"
  return (
    <>
        <button className={myStyle} onClick={Click}>{mark}</button>
    </>
  )
}