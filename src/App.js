import React,{useEffect,useState,useRef} from 'react';
import './App.css';

const App=()=>{
  const [imgPath1,setImgPath1] = useState('./image/0.jpg')
  const [imgPath2,setImgPath2] = useState('./image/0.jpg')
  const [view,setView] = useState('本次幸運得主是...')
  const [value,setValue] = useState(0)
  const [rd,setRd] = useState(0)
  const [numberArray,setNumberArray] = useState([])
  const mounted = useRef();
  const init = useRef();

  const button = {
    margin: 20,
    marginLeft: 40,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }

  function jpeg2png() {
    for (let i = 0; i < 10; i++) {
      const img = new Image();
      img.setAttribute("src", "./image/"+i+".jpg");
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/jpeg");
        numberArray[i] = dataURL
      };
    }  
  }

  const random=()=>{
    change()
    setView('下一個幸運得主是...')
    mounted.current=true;
  }

  function numberToArray(number) {
    let myFunc = num => Number(num);
    let intArr = Array.from(String(number), myFunc);
    if (intArr.length < 2) return [0, intArr[0]]

    return intArr;
}

  const change=()=>{
    var random = Math.floor(Math.random()*33)+1
    while(random === rd){
      random = Math.floor(Math.random()*33)+1
    }
    setRd(random) 
    let xArr = numberToArray(random)
    setImgPath1(numberArray[xArr[0]])
    setImgPath2(numberArray[xArr[1]])
  }

  useEffect(()=>{
    if(!init.current){
      jpeg2png()
      init.current = true
    }
    if(mounted.current){
      setValue(value+1)
      setTimeout(()=>change(),100)
    }
    if(value>=20){
      mounted.current = false
      setValue(0)
    }
  },[imgPath1,imgPath2])

    return (
      <div>
        <img src={imgPath1} width='10%' height='10%'/>
        <img src={imgPath2} width='10%' height='10%'/><br/>
        <button style={button} onClick={random}>
          {view}
        </button>
      </div>
    )
}

export default App;
