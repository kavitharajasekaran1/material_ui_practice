import './App.css';
//import TourCard from '../src/Components/TourCard'
// import Container from '@mui/material/Container';
import SearchAppBar from './Components/Appbar';
import Home from './pages/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Tour from './pages/Tour';

function App() {
  return (
    <BrowserRouter>
    <SearchAppBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:id" element={<Tour/>}></Route>

    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <SearchAppBar/>
    //   <Container sx={{marginY:5}}>

    //     {cities.map((city)=>{
    //       return <>
    //       <Typography
    //       variant="h4"
    //       component="h2"
    //       marginTop={5}
    //       marginBottom={3}>
    //         Top {city.name} Tours
    //       </Typography>
    //       <Grid container spacing={5}>
    //         {city.tours.map((tour,index)=>{
    //           return <TourCard tour={tour} key={index}/>
    //         })}
    //       </Grid>
    //       </>
    //     })}
    //     {/* <Grid container spacing={5}>
    //     <TourCard/>
    //     <TourCard/>
    //     <TourCard/>
        
    //     <TourCard/>
    //     </Grid> */}
    //     </Container>
    
    // </div>
  );
}

export default App;
