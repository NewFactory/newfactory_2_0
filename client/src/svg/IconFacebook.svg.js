function IconFacebook(props) {
  const fill = props.iconFill || '#fff'
  const width = props.iconWidth || '35'
  const height = props.iconHeight || '35'

  return (
    <svg className="IconFacebook"
         xmlns="http://www.w3.org/2000/svg"
         width={width} height={height}
         viewBox="0 0 32 32"
         aria-labelledby="title">
      <title id="title">Icon Facebook</title>
      <path
        fill={fill}
        d="M27.7,0H4.3C1.9,0,0,1.9,0,4.3v23.4C0,30.1,1.9,32,4.3,32h11.6l0-11.4h-3c-0.4,0-0.7-0.3-0.7-0.7l0-3.7
	c0-0.4,0.3-0.7,0.7-0.7h3v-3.6c0-4.1,2.5-6.4,6.3-6.4H25c0.4,0,0.7,0.3,0.7,0.7v3.1c0,0.4-0.3,0.7-0.7,0.7l-1.8,0
	c-2,0-2.4,1-2.4,2.4v3h4.4c0.4,0,0.7,0.4,0.7,0.8L25.5,20c0,0.4-0.3,0.6-0.7,0.6h-3.9l0,11.4h6.8c2.4,0,4.3-1.9,4.3-4.3V4.3
	C32,1.9,30.1,0,27.7,0z"/>
    </svg>
  )
}

export default IconFacebook
