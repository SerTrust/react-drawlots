import React,{useEffect,useState,useRef} from 'react';
import './App.css';

const App=()=>{
  const [imgPath,setImgPath] = useState('./image/test.jpg')
  const [view,setView] = useState('本次幸運得主是...')
  const [value,setValue] = useState(0)
  const [rd,setRd] = useState(0)
  const mounted=useRef();

  const button = {
    margin: 20,
    marginLeft: 70,
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

  const random=()=>{
    change()
    setView('下一個幸運得主是...')
    mounted.current=true;
  }

  const change=()=>{
    var random = Math.floor(Math.random()*33)+1
    while(random == rd){
      random = Math.floor(Math.random()*33)+1
    }
    setRd(random) 
    setImgPath('./image/'+random+'.jpg')
  }

  useEffect(()=>{
    if(mounted.current){
      setValue(value+1)
      setTimeout(()=>change(),50)
    }
    if(value>=20){
      mounted.current = false
      setValue(0)
    }
  },[imgPath])

    return (
      <div>
        <img src={imgPath} width="360" height="450"/><br/>
        <button style={button} onClick={random}>
          {view}
        </button>
      </div>
    )
}

export default App;
