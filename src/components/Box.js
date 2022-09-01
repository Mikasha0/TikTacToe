import React from 'react'

export default function Box({value, onClick}) {
    const style = value ==="X"? "box x": "box o"
  return (
    <div className="contain">
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}