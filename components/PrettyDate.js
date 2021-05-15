const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct", "Nov", "Dec"]

const prettyDate = (datestring) => {
  const dateObj = new Date(datestring)
  const month = dateObj.getMonth()
  const date = dateObj.getDate()
  const year = dateObj.getFullYear()
  return `${months[month]} ${date}, ${year}`
}

const PrettyDate = ({datestring, style}) => {
  return (
    <p style={style}>{prettyDate(datestring)}</p>
  )
}

export default PrettyDate