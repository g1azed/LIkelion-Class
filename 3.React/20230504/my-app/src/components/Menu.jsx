import './Menu.css'

function Menu(){
    return (
        <ul className="newClass">
            <li> 짜장면 </li>
            <li> 짬뽕 </li>
        </ul>
    )
}


function TextArea() {
    return (
      <div class="wrapper">
        <textarea
          readonly
          maxlength=3
          style={"background-color: blue;"}
        />
      </div>
    );   
  }

  function TextArea() {
    return (
      <div className="wrapper">
        <textarea
          readonly
          maxlength={3}
          style = {{backgroundColor: "blue"}}
        />
      </div>
    );   
  }