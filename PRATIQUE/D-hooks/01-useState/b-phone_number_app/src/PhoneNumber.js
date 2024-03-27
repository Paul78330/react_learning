import React, {useState} from 'react';

//expression régulière pour correspondre à des nombres de 1 à 10 chiffres de long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {

  //Déclarer un state pour stocker le numéro de téléphone
  const [phone, setPhone] = useState('');

  const handleChange = ({target}) =>{
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone)

    if(isValid){
      //mise à jour du state
      setPhone(newPhone)
    }
    return
  }

  return (
    <div id="alexandre">
      <label for='phone-input'>Phone:</label>
      <input id='phone-input' value={phone} onChange={handleChange} placeholder='Entrez votre numero'/>
    </div>
    
  )


}
