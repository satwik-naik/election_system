// import React, { useState } from "react";
// import Navbar from '../components/Navbar'

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
// import { auth } from "./firebase/setup";

// export default function OTP() {

//   const[Phone,SetPhone]=useState("")
//     const[user,setUser]=useState(null)
//     const[otp,setOtp]=useState("")

   

//     const sendOtp=async()=>{
//         try{
//             const recaptha = new RecaptchaVerifier(auth,"recaptha",{})
//             const confirmation = await signInWithPhoneNumber(auth,Phone,recaptha)
//             setUser(confirmation)
//         }catch(err){
//             console.error(err)
//         }
        
//     }

//     const verifyOtp = async() => {
//         try{
//             const data = await user.confirm(otp)
//             console.log("Verification Successful",data)
//         }catch(err)
//         {
//             console.error(err)
//         }
//     }


//   return (
//     <>
//     <Navbar/>
//     <div className="Voting">
//         <div className="Voting-content">
//             <PhoneInput
//                 country={"in"}
//                 value={Phone}
//                 onChange={(Phone)=>SetPhone("+"+ Phone)}
//             />
//             <button onClick={sendOtp} variant='contained'>Send OTP</button>
//             <div id="recaptha">

//             </div>
//             <br/>
//             <textarea onChange={(e)=>setOtp(e.target.value)} variant='outlined' size='small' label='Enter OTP'></textarea>
//             <br/>
//             <button onClick={verifyOtp} variant='contained' color="success">Verify OTP</button>
//         </div>
//     </div>
//     </>
//   )
// }


import React, { useState } from "react";
import Navbar from '../components/Navbar'

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { auth } from "./firebase/setup";

export default function OTP() {

    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOtp = async () => {
        try {
            const recaptha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptha);
            setUser(confirmation);
        } catch (err) {
            console.error(err);
        }
    };

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp);
            console.log("Verification Successful", data);
            window.location.href="http://localhost:3000/v-id/vote"
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Navbar />
            <section className='max-w-[1340px] mx-auto h-[80vh] flex justify-center items-center flex-col '>
                <div className='Voting border border-gray-300 rounded-lg'>
                    <div className='Voting-content p-5'>
                        <PhoneInput
                            country={"in"}
                            value={phone}
                            onChange={(phone) => setPhone("+" + phone)}
                            inputProps={{
                                className: 'border border-gray-300 rounded-lg px-5 py-2 my-2'
                            }}
                        />
                        <button onClick={sendOtp} className='bg-blue-600 text-white py-2 px-5 rounded-lg'>Send OTP</button>
                        <div id="recaptcha"></div>
                        <br />
                        <textarea onChange={(e) => setOtp(e.target.value)} className='border border-gray-300 rounded-lg px-5 py-2 my-2' placeholder='Enter OTP'></textarea>
                        <br />
                        <button onClick={verifyOtp} className='bg-green-600 text-white py-2 px-5 rounded-lg'>Verify OTP</button>
                    </div>
                </div>
            </section>
        </>
    );
}

