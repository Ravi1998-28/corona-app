import React,{ useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';


const Table = () => {
    const [title, setTitle] = useState('India');
    const [confirmed, setConfirmed] = useState();
    const [recovered, setRecovered] = useState();
    const [deaths, setDeaths] = useState();
    const [active, setActive] = useState();
    const [code, setCode] = useState();


    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://bz4xi4g3x8.execute-api.us-east-1.amazonaws.com/test/country?name=${title}`);
            console.log(res.data.stats.confirmed);
            setConfirmed(res.data.stats.confirmed)
            setRecovered(res.data.stats.recovered)
            setDeaths(res.data.stats.deaths)
            setActive(res.data.stats.critical)
            setCode(res.data.stats.code)

        }

        getData();
    });


    function handleClick() {
        var input = document.getElementById('myInput')
        if (input.value !== null) {
            var inputValue = input.value;
            setTitle(inputValue)
        }


    }

    return(
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                       <div className='seach-Box' >
                        <input type="text" id="myInput" />
                        <input
                            className='btn btn-primary'
                            type="button"
                            value="search"
                            onClick={handleClick}
                        />
                       </div>

                        <h1>Covid19 Stats Web App</h1>

                        <br/>
                        <img src={`https://www.countryflags.io/IN/flat/64.png`} alt="flag"></img>
                        <div>
                        </div>
                        <h2>you choose {title}</h2>
                        <h2>confirmed {confirmed}</h2>
                        <h2>Recovered {recovered}</h2>
                        <h2>Deaths {deaths}</h2>
                        <h2>Active {active}</h2>
                        <h2>Code {code}</h2>
                    </div>
                </div>
            </div>




            <br/>
        </>
    )
}
export default Table;
