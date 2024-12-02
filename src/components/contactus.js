import { useEffect, useState } from "react";
import "../ContactUs.css"

function ContactUs() {

    const [msg, setMsg] = useState("");
    const [txtfirstname, setFirstname] = useState("");
    const [txtlastname, setLastname] = useState("");
    const [txtemail, setEmail] = useState("");
    const [txtcomment, setComment] = useState("");

    useEffect((e)=>{


    },[]) //1. onpage load [], 2. page unload, 3. on state update [msg], 4. un page /refresh

    const handleFormSubmit = (e) => {

      e.preventDefault();

      try {

        let _msg = "# handleFormSubmit"
        setMsg(_msg)

        if (txtfirstname == null | txtfirstname.trim().length == 0){
          _msg = "# please enter a valid firstname"
          setMsg(_msg)
          return false; //stop button cliek 
        }
        
        if (txtlastname == null | txtlastname.trim().length == 0){
          _msg = "# please enter a valid lastname"
          setMsg(_msg)
          return false; //stop button cliek 
        }

        if (txtemail == null | txtemail.trim().length == 0){
          _msg = "# please enter a valid email"
          setMsg(_msg)
          return false; //stop button cliek 
        }
  
        if (txtcomment == null | txtcomment.trim().length == 0){
          _msg = "# please enter a valid comment"
          setMsg(_msg)
          return false; //stop button cliek 
        }
  
        _msg = `# form sumbmit: ${txtfirstname} - ${txtlastname}  - ${txtemail} - ${txtcomment}`
        console.log(_msg)

        _msg = "form submitted"
        setMsg(_msg)

        _msg = ""
        setFirstname(_msg)
        setLastname(_msg)
        setEmail(_msg)
        setComment(_msg)

      } catch (error) {

        const _msg = "# handleFormSubmit::error"
        setMsg(_msg)

        console.log(_msg)
        console.log(error)
          
      }

    }
    
    const handleFormReset = (e) => {

      e.preventDefault();
      
      try {
      
        let _msg = "# handleFormReset"
        
        _msg = ""

        setMsg(_msg)
        setFirstname(_msg)
        setLastname(_msg)
        setEmail(_msg)
        setComment(_msg)

      } catch (error) {

        const _msg = "# handleFormReset::error"
        setMsg(_msg)

        console.log(_msg)
        console.log(error)
        
      }
      
    }

    return (
      <>
        <div className="container">
          <div class="box">
            <p></p>
            <p>Contact Us</p>
            <p>{msg}</p>
            <div className="output"></div>
            <p></p>
            <div>
              <form>
                <label>* First Name: </label><input value={txtfirstname} onChange={(e)=>setFirstname(e.target.value)} name="txtfirstname" type="text" maxLength={20} placeholder="* firstname required" /><br></br>
                <label>* Last Name: </label><input value={txtlastname}  onChange={(e)=>setLastname(e.target.value)} name="txtlastname" type="text" maxLength={20}  placeholder="* lastname required"/><br></br>
                <label>* Email: </label><input value={txtemail}  onChange={(e)=>setEmail(e.target.value)} name="txtemail" type="text"  maxLength={30}  placeholder="* email required"/><br></br>
                <label>* Comment: </label><br></br>
                <textarea value={txtcomment}  onChange={(e)=>setComment(e.target.value)} name="txtcomment" rows={5} cols={30}  placeholder="* comment required"/><p></p>
                <button onClick={handleFormSubmit}>Submit</button>
                {"   "}
                <a href="#/" onClick={handleFormReset}>reset</a>
              </form>
            </div>
          </div>
        </div>
    </>
    );
  }
  
  export default ContactUs;
  