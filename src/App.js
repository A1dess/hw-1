import './App.css';


function Title (props) {
  return (
    <a href = {props.url}>{props.text}</a>
  )
}

function Header ({test}) {
  return (
    <>
     <Title title="Header" subtitle="hello world"/>
     <p>header content = {test}</p>
    </>
  )
}

function Footer (){
  return (
    <>
      <Title title="Footer" subtitle="goodbye"/>
     <p>footer content</p>
    </>
   
  )
}

function Bradd (){
  return(
    <>
    <Title title="Bradd"/>
    </>
  )
}

function Aid (){
  return(
    <>
    <Title title="Aid"/>
    </>
  )
}

function Dead (){
  return(
    <>
    <Title title="Dead"/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header test="1"/>
      <p>content</p>
      <Footer/>
      <Bradd/>
      <Aid/>
      <Dead/>
      <Title url="22222" text="some text"/>
    </div>
  );
}

export default App;
