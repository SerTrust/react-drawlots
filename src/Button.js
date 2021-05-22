import React,{useState} from 'react';

const Button=(props)=>{
        const [view,setView] = useState('本次幸運得主是...')

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
        // function change(){
        //     setView('下一個幸運得主是...')
        // }

    return(
        <React.Fragment>
            <button style={button} onClick={props.handleClick}>
                {view}
            </button>
        </React.Fragment>
    ) 
}

export default Button;