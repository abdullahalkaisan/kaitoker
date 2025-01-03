
export default function NumberFormatCustom(props) {


  return (
    new Intl.NumberFormat("en-US", {
        useGrouping: true,
        notation: "compact",
      }).format(124)
  )
}
