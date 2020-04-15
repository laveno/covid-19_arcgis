import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import axios from 'axios'
import { readString } from 'react-papaparse'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Active: [],
            Admin2: [],
            Combined_Key: [],
            Confirmed: [],
            Country_Region: [],
            Deaths: [],
            FIPS: [],
            Last_Update: [],
            Lat: [],
            Long_: [],
            Province_State: [],
            Recovered: []
        };
    }

    componentDidMount() {
        const sstate = this
        var date = new Date().getDate() - 2;
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (date.toString().length == 1)
            date = "0" + date
        if (month.toString().length == 1)
            month = "0" + month
        var actual_date = month + "-" + date + "-" + year
        console.log(actual_date)
        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + actual_date + '.csv')
        .then(res => {
            const data = res.data;
            console.log(res.data)
            var lines=res.data.split("\n");

            var result = [];
          
            var headers=lines[0].split(",");
          
            for(var i=1;i<lines.length;i++){
          
                var obj = {};
                var currentline=lines[i].split(",");
          
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
          
                result.push(obj);
          
            }
            console.log(JSON.stringify(result))
            //return JSON.stringify(result);
           /* const parse = readString(res.data)
            sstate.setState({ data: parse.data})
            var tab = []
            var i = 1
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][0])
            }
            sstate.setState({ FIPS: tab})
            //console.log(sstate.state.FIPS)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][1])
            }
            sstate.setState({ Admin2: tab})
            //console.log(sstate.state.Admin2)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][2])
            }
            sstate.setState({ Province_State: tab})
            //console.log(sstate.state.Province_State)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][3])
            }
            sstate.setState({ Country_Region: tab})
            //console.log(sstate.state.Country_Region)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][4])
            }
            sstate.setState({ Last_Update: tab})
            //console.log(sstate.state.Last_Update)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][5])
            }
            sstate.setState({ Lat: tab})
            //console.log(sstate.state.Lat)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][6])
            }
            sstate.setState({ Long: tab})
            //console.log(sstate.state.Long)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][7])
            }
            sstate.setState({ Confirmed: tab})
            //console.log(sstate.state.Confirmed)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][8])
            }
            sstate.setState({ Deaths: tab})
            //console.log(sstate.state.Deaths)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][9])
            }
            sstate.setState({ Recovered: tab})
            //console.log(sstate.state.Recovered)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][10])
            }
            sstate.setState({ Active: tab})
            //console.log(sstate.state.Active)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][11])
            }
            sstate.setState({ Combined_Key: tab})*/
            //console.log(sstate.state.Combined_Key)
        })
        .catch(e => {console.log(e)});
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
/* <div className="mb-2 w-25">
                    <TotalConfirmed 
                    Confirmed={this.state.Confirmed}
                    />
                </div>

                <div className="w-25">
                    <Confirmed
                    Confirmed={this.state.Confirmed}
                    Combined_Key={this.state.Combined_Key}
                    Country_Region={this.state.Country_Region}
                    />
                </div>
*/