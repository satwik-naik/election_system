import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Scanner() {

    const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader',{
      qrbox:{
        width:900,
        height:900,
      },
      fps: 5,
    });
  
    scanner.render(success,error);
  
    function success(result){
      scanner.clear();
      setScanResult(result);
    }
  
    function error(err){
      console.warn(err)
    }
  },[]);

  return (
   <>
    <Navbar/>
    <div className="App">
      <h1 className='text-center font-bold text-[3rem]'>QR Code Scanning</h1>
      { scanResult
      ?<div >Success: <a  href={"http://"+scanResult}>{scanResult}</a></div>
      : <div id="reader"  width="600px" ></div>
      }
    </div>
   </>
  );
}
