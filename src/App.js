import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import Register from './Register';
import Success from './Success';


function App() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/success')
    }
    return ( 
        <div className = "App" >
                <Routes>
                    <Route path='/' element={<Register 
                    handleSubmit={handleSubmit}
                    />} />
                    <Route path='success' element={<Success/>} />                
                </Routes>   
        </div>
    );
}

export default App;