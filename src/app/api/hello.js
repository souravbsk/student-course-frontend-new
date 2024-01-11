export default async (req ,res) => { 
  try{
    const response = await fetch(`http://track4.millitrack.com/api/middleMan/getDeviceInfo?accessToken=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUl3SWl3aWFYTnpJam9pWjNCekxYUnlZV05yWlhJaUxDSnBZWFFpT2pFMk9EUTRORFEyTURCOS45cHZsZk05dUoxbXB2ZUFEZERPN2k3MDBNdEVRbE1vcDhpREtobWk3NWNB` ) ;
    console.log(response);
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch(error){
    console.error(error);
    res.status(500).json({error: "An error occurred"});
  }
};