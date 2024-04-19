function Hello(){

  var myName = 'Vinay';
  let number = 345;
  let fullname = ()=>{
    return 'Ganesham Pareek';
  }
  return <h3>
     MessageNo: {number} Hello this is AI Speaking. I am your hero {fullname()} and he is my servant {myName}
  </h3>
}


export default Hello;