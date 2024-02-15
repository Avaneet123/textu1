import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("hii i am clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        //console.log("hii i am clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
      //console.log("hii i am clicked"+text);
      let newText=" ";
      setText(newText);
  }
    const handleOnChange=(event)=>{
       // console.log("hii i am onchanged");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("Enter text here");
  return (
<>
    <div class="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange}id="my-box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    
    </div>
    <div class="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008}Minutes read</p>
        <p>Priview</p>
        <h4>{text.length>0?text:"Enter Something For Preview"}</h4>


    </div>
    </>
  )
}
