import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';


function App(props) {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Profile profileState={props.state.profileState} dispatch={props.dispatch} />} /> 
                    <Route path='/messages/*' element={<Messages messagesState={props.state.messagesState} dispatch={props.dispatch} />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;