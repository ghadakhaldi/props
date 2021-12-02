import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import image  from './img/pr.png';
function App() {
  const handleName=(x)=>{
    return alert(`hello,${x}`)
  }
  return (
    <div className="App">
  <Profile fullName ='khaldi Ghada' bio='' profession='web developer' handleName={handleName}>
    <img src={image} className="hoverZoomLink" />
  </Profile>
    </div>
  );
}

export default App;
