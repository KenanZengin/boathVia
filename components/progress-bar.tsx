import NextTopLoader from 'nextjs-toploader'


const ProgressBar = () => {
  
  return (
    <NextTopLoader 
        color='#178a87'
        height={4}
        speed={300}
        showSpinner={false}
        shadow={"0 0 10px #178a87, 0 0 5px #178a87"}
        zIndex={9999999}
    />
  )
}

export default ProgressBar