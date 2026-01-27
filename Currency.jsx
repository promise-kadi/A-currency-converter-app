import React, { useRef, useState } from 'react'

function Currency() {
    const amtRef = useRef()
    const frmRef = useRef()
    const toRef = useRef()
    const [val, setVal] = useState(0)
    const [rate, setRate] = useState(0)

// Dollar Rates  
  var dtp = 0.80
  var dte = 0.9665
  var dtyu = 7.2514
  var dtyen = 155.11
  var dtru = 87.0955
  var dtn = 1497.5

  // Pounds Rates
  var ptd = 1.24
  var pte = 1.20
  var ptyen = 192.92
  var ptyu = 8.94
  var ptru = 108.36
  var ptn = 1861.52

  // Yen Rates
  var ytru = 0.56
  var yte = 0.0062
  var ytp = 0.0052
  var ytd = 0.0065
  var ytyu = 0.046
  var ytn = 9.65

  // Naira Rates
  var ntd = 0.00067
  var nte = 0.00065
  var ntp = 0.00054
  var ntyen = 0.10
  var ntyu = 0.0048
  var ntr = 0.58
  
  // Yuan Rates
  var yutd = 0.14
  var yute = 0.13
  var yutp = 0.11
  var yutn = 207.98
  var yutru = 12.12
  var yutyen = 21.57

  // Ruppee Rates
  var rtd = 0.011
  var rtp = 0.00092
  var rte = 0.011
  var rtyen = 1.78
  var rtn = 17.17
  var rtyu = 0.083

  // Euro Rates
  var etd = 1.0403
  var etp = 0.83
  var etyen = 158.82
  var etn = 1599.60
  var etyu = 7.56
  var etru = 90.86
  
const convertFn = ()=> {
    var amt = amtRef.current.value
    var fromm = frmRef.current.value
    var too = toRef.current.value
    
    if(fromm == "Dollars" && too == "Pounds"){
        var x = amt * dtp;
        setRate(dtp)
        setVal(x);
    } else if(fromm == "Dollars" && too == "Euro"){
        var x = amt * dte;
        setRate(dte)
        setVal(x);
    } else if(fromm == "Dollars" && too == "Yen"){
        var x = amt * dtyen;
        setRate(dtyen)
        setVal(x);
    } else if(fromm == "Dollars" && too == "Yuan"){
        var x = amt * dtyu;
        setVal(x);
        setRate(dtyu)
    } else if(fromm == "Dollars" && too == "Naira"){
        var x = amt * dtn;
        setVal(x);
        setRate(dtn)
    }else if(fromm == "Dollars" && too == "Rupee"){
        var x = amt * dtru;
        setVal(x);
        setRate(dtru)
    }

    if(fromm == "Pounds" && too == "Dollars"){
      var x = amt * ptd;
      setRate(ptd)
      setVal(x);
  } else if(fromm == "Pounds" && too == "Euro"){
      var x = amt * pte;
      setRate(pte)
      setVal(x);
  } else if(fromm == "Pounds" && too == "Yen"){
      var x = amt * ptyen;
      setRate(ptyen)
      setVal(x);
  } else if(fromm == "Pounds" && too == "Yuan"){
      var x = amt * ptyu;
      setVal(x);
      setRate(ptyu)
  } else if(fromm == "Pounds" && too == "Naira"){
      var x = amt * ptn;
      setVal(x);
      setRate(dtn)
  }else if(fromm == "Pounds" && too == "Rupee"){
      var x = amt * ptru;
      setVal(x);
      setRate(ptru)
  }

  if(fromm == "Yen" && too == "Pounds"){
    var x = amt * ytp;
    setRate(ytp)
    setVal(x);
  } else if(fromm == "Yen" && too == "Euro"){
    var x = amt * yte;
    setRate(yte)
    setVal(x);
  } else if(fromm == "Yen" && too == "Dollars"){
    var x = amt * ytd;
    setRate(ytd)
    setVal(x);
  } else if(fromm == "Yen" && too == "Yuan"){
    var x = amt * ytyu;
    setVal(x);
    setRate(ytyu)
  } else if(fromm == "Yen" && too == "Naira"){
    var x = amt * ytn;
    setVal(x);
    setRate(dtn)
  }else if(fromm == "Yen" && too == "Rupee"){
    var x = amt * ytru;
    setVal(x);
    setRate(ytru)
}

if(fromm == "Naira" && too == "Pounds"){
  var x = amt * ntp;
  setRate(ntp)
  setVal(x);
} else if(fromm == "Naira" && too == "Euro"){
  var x = amt * nte;
  setRate(nte)
  setVal(x);
} else if(fromm == "Naira" && too == "Dollars"){
  var x = amt * ntd;
  setRate(ntd)
  setVal(x);
} else if(fromm == "Naira" && too == "Yuan"){
  var x = amt * ntyu;
  setVal(x);
  setRate(ntyu)
} else if(fromm == "Naira" && too == "Yen"){
  var x = amt * ntyen;
  setVal(x);
  setRate(ntyen)
}else if(fromm == "Naira" && too == "Rupee"){
  var x = amt * ntr;
  setVal(x);
  setRate(ntr)
}   

if(fromm == "Yuan" && too == "Pounds"){
  var x = amt * yutp;
  setRate(yutp)
  setVal(x);
} else if(fromm == "Yuan" && too == "Euro"){
  var x = amt * yute;
  setRate(yute)
  setVal(x);
} else if(fromm == "Yuan" && too == "Dollars"){
  var x = amt * yutd;
  setRate(yutd)
  setVal(x);
} else if(fromm == "Yuan" && too == "Yen"){
  var x = amt * yutyen;
  setVal(x);
  setRate(yutyen)
} else if(fromm == "Yuan" && too == "Naira"){
  var x = amt * yutn;
  setVal(x);
  setRate(yutn)
}else if(fromm == "Yuan" && too == "Rupee"){
  var x = amt * yutru;
  setVal(x);
  setRate(yutru)
}

if(fromm == "Rupee" && too == "Pounds"){
  var x = amt * rtp;
  setRate(rtp)
  setVal(x);
} else if(fromm == "Rupee" && too == "Euro"){
  var x = amt * rte;
  setRate(rte)
  setVal(x);
} else if(fromm == "Rupee" && too == "Dollars"){
  var x = amt * rtd;
  setRate(rtd)
  setVal(x);
} else if(fromm == "Rupee" && too == "Yuan"){
  var x = amt * rtyu;
  setVal(x);
  setRate(ytyu)
} else if(fromm == "Rupee" && too == "Naira"){
  var x = amt * rtn;
  setVal(x);
  setRate(rtn)
}else if(fromm == "Rupee" && too == "Yen"){
  var x = amt * rtyen;
  setVal(x);
  setRate(rtyen)
}

if(fromm == "Euro" && too == "Pounds"){
  var x = amt * etp;
  setRate(etp)
  setVal(x);
} else if(fromm == "Euro" && too == "Pounds"){
  var x = amt * etp;
  setRate(etp)
  setVal(x);
} else if(fromm == "Euro" && too == "Dollars"){
  var x = amt * etd;
  setRate(etd)
  setVal(x);
} else if(fromm == "Euro" && too == "Yuan"){
  var x = amt * etyu;
  setVal(x);
  setRate(etyu)
} else if(fromm == "Euro" && too == "Naira"){
  var x = amt * etn;
  setVal(x);
  setRate(etn)
}else if(fromm == "Euro" && too == "Rupee"){
  var x = amt * etru;
  setVal(x);
  setRate(etru)
}
}
    

  return (
    <div style={{backgroundColor: "black",height: "auto",overflow: "hidden",
    color:"white"
    }}>
      <h1 style={{textAlign: "center",color: "white"}}>CURRENCY CONVERTER</h1>
      <div style={{width: "30%",height: "auto",backgroundColor: "gray",
      margin: "20px auto",borderRadius: "7px"
    }}>
      <input ref={amtRef} type="text" style={{width: "calc(100% - 70px)",margin: "20px 0px 10px 20px",fontSize: "25px"}} />
      <p style={{margin: "0px 0 0 20px",fontSize: "20px"}}>From</p>
      <div style={{margin: "10px 20px 10px 0",padding: "10px"}}>
      <select ref={frmRef} name="" id="" style={{width: "calc(100% - 20px)", marginLeft:"10px",height: "40px"}}>
        <option value="Euro">Euro</option>
        <option value="Pounds">Pounds</option>
        <option value="Naira">Naira</option>
        <option value="Yen">Yen</option>
        <option value="Yuan">Yuan</option>
        <option value="Rupee">Rupee</option>
        <option value="Dollars">Dollars</option>
      </select>
      </div>
      <p style={{marginLeft: "20px",fontSize: "20px"}}>Into</p>
      <div style={{margin: "10px 0px 0 10px"}}>
      <select ref={toRef} name="" id="" style={{width: "calc(100% - 50px)", marginLeft:"10px",height: "40px"}}>

        <option value="Euro">Euro</option>
        <option value="Pounds">Pounds</option>
        <option value="Naira">Naira</option>
        <option value="Yen">Yen</option>
        <option value="Yuan">Yuan</option>
        <option value="Rupee">Rupee</option>
        <option value="Dollars">Dollars</option>
      </select>
      </div>
      <button onClick={convertFn} style={{margin: "10px 35%",width: "100px",height: "35px",
      fontWeight: "bold",color: "white",background: "black",cursor: "pointer"
    }}> Convert</button>
        <button style={{margin: "10px 35%",width: "100px",height: "35px",
      fontWeight: "bold",color: "white",background: "black",cursor: "pointer"
    }}>
        Reset
        </button>
        <h1 style={{textAlign: "center"}}>{val.toLocaleString()}</h1>
        <p style={{textAlign: "center", paddingBottom: "30px"}}>Current Rate = {rate.toLocaleString()} </p>
      </div>

    </div>
  )
}

export default Currency
