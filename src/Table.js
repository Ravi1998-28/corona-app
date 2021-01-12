import React ,{ useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {CanvasJSChart} from 'canvasjs-react-charts'
import ReactFlagsSelect from 'react-flags-select';


const Table = () => {
    const [confirmed, setConfirmed] = useState();
    const [recovered, setRecovered] = useState();
    const [deaths, setDeaths] = useState();
    const [active, setActive] = useState();
    const [options, setOptions] = useState();
    const [selected, setSelected] = useState("IN");
    console.log(selected)

    useEffect(()=>{
        async function getData(){

            axios.get(`https://bz4xi4g3x8.execute-api.us-east-1.amazonaws.com/test/country?name=${selected}`)
                .then(resp => {
                    if(resp.data.stats != null && resp.data.stats !== undefined){
                        setConfirmed(resp.data.stats.confirmed);
                        setRecovered(resp.data.stats.recovered);
                        setDeaths(resp.data.stats.deaths);
                        setActive(resp.data.stats.critical);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
        function chart() {

                setOptions({
                    animationEnabled: true,
                    theme: "dark2",
                    title: {
                        text: `Country Code: ${selected}`
                    },
                    axisY: {
                        title:"Covid Live Updates",
                        scaleBreaks: {
                            autoCalculate: true,
                            type: "wavy",
                            lineColor: "white"
                        }
                    },
                    data: [{
                        type: "column",
                        indexLabel: "{y}",
                        indexLabelFontColor: "white",
                        dataPoints: [
                            {"label": "Confirmed", "y": confirmed},
                            {"label": "Recovered", "y": recovered},
                            {"label": "Deaths", "y": deaths},
                            {"label": "Critical","y":active},
                        ]
                    }]

                })
        }

        getData();
        chart();
    },[selected,confirmed,recovered,deaths,active]);


    return(
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                       <div className='search-Box mt-4 form-group' >
                        <h1>Covid19 Stats</h1>
                       </div>
                        <br/>
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            searchable={true}
                            searchPlaceholder="Search country"
                            className="btn btn-light ml-2 mb-1 drop-dawn"

                        />
                        <div>
                            <CanvasJSChart options = {options}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;
