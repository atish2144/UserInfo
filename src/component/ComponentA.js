import React, { useEffect, useState } from 'react'

function ComponentA(props) {

  const [data, setdata] = useState(props.count)


  useEffect(() => {
    setdata(props.count)
  })

  return (
    <div>
      <label>{data}</label>
    </div>
  )
}

export default ComponentA