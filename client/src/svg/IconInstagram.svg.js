function IconInstagram(props) {
  const fill = props.iconFill || '#fff'
  const width = props.iconWidth || '35'
  const height = props.iconHeight || '35'

  return (
    <svg className="IconInstagram"
         xmlns="http://www.w3.org/2000/svg"
         width={width} height={height}
         viewBox="0 0 32 32"
         aria-labelledby="title">
      <title id="title">Icon Instagram</title>
      <path
        fill={fill}
        d="M22.5,0H9.5C4.3,0,0,4.3,0,9.5v12.9C0,27.7,4.3,32,9.5,32h12.9c5.3,0,9.5-4.3,9.5-9.5V9.5
		C32,4.3,27.7,0,22.5,0z M28.8,22.5c0,3.5-2.8,6.3-6.3,6.3H9.5c-3.5,0-6.3-2.8-6.3-6.3V9.5C3.2,6,6,3.2,9.5,3.2h12.9
		c3.5,0,6.3,2.8,6.3,6.3L28.8,22.5L28.8,22.5z"/>
      <path
        fill={fill}
        d="M16,7.7c-4.6,0-8.3,3.7-8.3,8.3s3.7,8.3,8.3,8.3s8.3-3.7,8.3-8.3S20.6,7.7,16,7.7z M16,21.1
		c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1C21.1,18.8,18.8,21.1,16,21.1z"/>
      <circle fill={fill} cx="24.3" cy="7.8" r="2"/>
    </svg>
  )
}

export default IconInstagram