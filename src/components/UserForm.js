import React from 'react'

const state = {
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:'',
}




const UserForm = () => {

    const [step, setStep] = useState(state.step);

    const nextStep = ()=>{
        setStep(step+1);
    }

    const prevStep = ()=>{
        if(step>1){
            setStep(step-1);
        }
    }


  return (
    <div>UserForm</div>
  )
}

export default UserForm