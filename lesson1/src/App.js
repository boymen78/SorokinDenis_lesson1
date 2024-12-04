
import './App.css';

function Header () {
  return (
      <div>
          <Title />
          <h1>I am Header</h1>
      </div>
  )
}

function Content () {
  return (
      <div>
          <Title/>
          <h1>I am Content</h1>
      </div>

  )
}

function Footer () {
  return (
      <div>
          <Title/>
          <h1>I am Footer</h1>
      </div>
  )
}

function Title () {
  return (
      <h1>I am Title</h1>
  )
}




function App() {
  return (
    <div className="App">
          <Header />
          <Content />
          <Footer />

    </div>
  );
}

export default App;
