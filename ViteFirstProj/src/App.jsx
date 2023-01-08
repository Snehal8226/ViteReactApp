import Welcome from "./components/Welcome"
import Form from './components/Form'
import Header from './components/Header';





 const App= () => {
    return (
            <div className="wrapper">

                <Header appname="Vite+React" />

                <h2>Welcome To Reagistration Form</h2>

                <Form />
                
            </div>
             
                 
    );
  };
      export default App;
  