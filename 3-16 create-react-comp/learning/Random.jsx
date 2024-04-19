function Random(){


  let number = Math.random() * 1000;

  return <h1 style={{'background-color': '#776767'}}>Random number is: { Math.round(number)}</h1>
}

export default Random;