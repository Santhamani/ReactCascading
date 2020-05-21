import React,{ Component } from "react";
import "./data.css";
import { Grid, Col, Row, Button, FormGroup, FormControl, ControlLabel, Checkbox, SplitButton, MenuItem, DropdownButton } from "react-bootstrap";
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

// import options from './options';
// import SelectSearch from 'react-select-search';


class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unique_continent_id:'Select',
      continent_name:'',
      continent_area:'',
      continent_area_rank:'',
      country_id:'',
      country_name:"",
      state_id:"",
      state_name:"",
      district_id:"",
      district_name:"",
      selectedOption:'',
      states:[], countries:[],continents:[],districts:[],
      state:null,continent:null,district:null,country:null,
    };


    this.handleConIdChange = this.handleConIdChange.bind(this);
    this.handleConNameChange = this.handleConNameChange.bind(this);
    this.handleConAreaChange = this.handleConAreaChange.bind(this);
    this.handleConAreaRankChange = this.handleConAreaRankChange.bind(this);

    this.handleCountryIdChange = this.handleCountryIdChange.bind(this);
    this.handleCountryNameChange = this.handleCountryNameChange.bind(this);

    this.handleStateIdChange = this.handleStateIdChange.bind(this);
    this.handleStateNameChange = this.handleStateNameChange.bind(this);

    this.handleDistrictIdChange = this.handleDistrictIdChange.bind(this);
    this.handleDistrictNameChange = this.handleDistrictNameChange.bind(this);

    // Forms
    this.handleContinentSubmit = this.handleContinentSubmit.bind(this);
    this.handleCountrySubmit=this.handleCountrySubmit.bind(this);
    this.handleStateSubmit=this.handleStateSubmit.bind(this);
    this.handleDistrictSubmit=this.handleDistrictSubmit.bind(this);
    
  }

  
  handleConIdChange(event) {
    this.setState({continent_id: event.target.value});
  }
  handleConNameChange(event) {
    this.setState({continent_name: event.target.value});
  }
  handleConAreaChange(event){
    this.setState({continent_area: event.target.value});
  }
  handleConAreaRankChange(event){
    this.setState({continent_area_rank: event.target.value});
  }
  handleCountryNameChange(event){
    this.setState({country_name:event.target.value});
    // this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
  }
  handleCountryIdChange(event){
    this.setState({country_id:event.target.value});
  }
  handleStateIdChange(event){
    this.setState({state_id:event.target.value});
  }
  handleStateNameChange(event){
    this.setState({state_name:event.target.value});
  }
  handleDistrictIdChange(event){
    this.setState({district_id:event.target.value});
  }
  handleDistrictNameChange(event){
    this.setState({district_name:event.target.value});
  }
  // handleSChange = ({ target }) => {
  //   this.setState({
  //     selectedOption: target.value
  //   })
  // }

  componentDidMount(){
    this.getContinents();
    this.getCoutries();
    this.getStates();
    this.getDistricts();

  }


  // Continentss get method
  getContinents = _ => {
    fetch('/continents',{
      method: 'GET', // or ‘PUT’
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'},
    })
    .then(res => res.json())
    .then( res => this.setState({continents: res.data}))
    // .then(({data}) => {
    //  // this.setState({continents: res['data']})
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // Countries get method
  getCoutries = _ => {
    fetch('/countries',{
      method: 'GET', // or ‘PUT’
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'}
    })
    .then(res => res.json())
    .then( res => this.setState({countries: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // States get method
  getStates = _ => {
    fetch('/states',{
      method: 'GET', // or ‘PUT’
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'}
    })
    .then(res => res.json())
    .then( res => this.setState({states: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // Districts get method
  getDistricts = _ => {
    fetch('/districts',{
      method: 'GET', // or ‘PUT’
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(res => res.json())
    .then( res => this.setState({districts: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }


  renderContinentNames = ({continent_id, continent_name}) => <div key={continent_id}> {continent_id}.){continent_name} </div>

  renderCountryNames = ({country_id, country_name}) => <div key={country_id}> {country_id}.){country_name} </div>

  renderStateNames = ({state_id, state_name}) => <div key={state_id}> {state_id}.){state_name} </div>

  renderDistrictNames = ({district_id, district_name}) => <div key={district_id}> {district_id}.){district_name} </div>

  // Countinent post method
  handleContinentSubmit(event){
    // alert('A name was submitted: ' +this.state.continent_name+this.state.continent_area+this.state.continent_area_rank);
    // console.log(this.state.continent_name);
    const data = {continent_name:this.state.continent_name}
    fetch('/continents/add',{
      method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' }
    })
    // .then(res => res.json())
    // .then(({data}) => {
    //   console.log(data)
    // })
    .then(this.getContinents)
    .catch(err => console.error(err)
    .then(response => console.log('Success:', response)));

    event.preventDefault();
  }

  // COuntry post method
  handleCountrySubmit(event) {
    // alert('A name was submitted: ' + this.state.country_name+this.state.continent_id);
    // console.log(this.state.country_name+'_'+this.state.continent_id);
    const data = {country_name:this.state.country_name,continent_id:this.state.continent_id}
    fetch('/countries/add',{
      method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' }
    })
    // .then(res => res.json())
    // .then(({data}) => {
    //   console.log(data)
    // })
    .then(this.getCoutries)
    .catch(err => console.error(err)
    .then(response => console.log('Success:', response)));

    event.preventDefault();
  }

  // State post method
  handleStateSubmit(event) {
    // alert('A name was submitted: ' + this.state.state_name+this.state.country_id);
    // console.log(this.state.state_name+'_'+this.state.country_id);
    const data = {state_name:this.state.state_name,country_id:this.state.country_id}
    fetch('/states/add',{
      method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' }
    })
    // .then(res => res.json())
    // .then(({data}) => {
    //   console.log(data)
    // })
    .then(this.getStates)
    .catch(err => console.error(err)
    .then(response => console.log('Success:', response)));

    event.preventDefault();
  }

  // District post method
  handleDistrictSubmit(event) {
    // alert('A name was submitted: ' + this.state.state_id+ this.state.district_name);
    // console.log(this.state.state_id+ this.state.district_name);
    const data ={district_name:this.state.district_name,state_id:this.state.state_id}
    fetch('/districts/add',{
      method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' }
    })
    // .then(res => res.json())
    // .then(({data}) => {
    //   console.log(data)
    // })
    .then(this.getDistricts)
    .catch(err => console.error(err)
    .then(response => console.log('Success:', response)));

    event.preventDefault();
  }

  render() {
    const { continents,countries,states,districts } = this.state;
    return (
      <div className="Data_Class">
    <Grid>
      <Row>
        {/* Continents */}
        <Col xs={6} md={3}>
          <div className="Continents_Class">
            Continents
            <div>
              {continents.map(this.renderContinentNames)}
              {/* {this.state.users} */}
            </div>

            <form onSubmit={this.handleContinentSubmit}>
              <FormGroup>
                <ControlLabel>Continents Name</ControlLabel>
                <FormControl 
                  autoFocus
                  type="text"
                  value={this.state.continent_name} onChange={this.handleConNameChange}
                />
              </FormGroup>
              {/*<FormGroup>
               <ControlLabel>Continents Area</ControlLabel>
                <FormControl 
                  autoFocus
                  type="text"
                  value={this.state.continent_area} onChange={this.handleConAreaChange}
                />
              </FormGroup> */}
              {/* <FormGroup>
              <ControlLabel>Continents Area Rank</ControlLabel>
                <FormControl 
                  autoFocus
                  type="text"
                  value={this.state.continent_area_rank} onChange={this.handleConAreaRankChange}
                />
              </FormGroup> */}
              <FormGroup>
                <FormControl autoFocus type="Submit" value="Submit"/>
              </FormGroup>
            </form>
          </div>
        </Col>

         {/* Country */}
        <Col xs={6} md={3}>
          <div className="Country_Class">
            Country
            <div>
              {countries.map(this.renderCountryNames)}
            </div>
            <form onSubmit={this.handleCountrySubmit}>
              <FormGroup>
                <ControlLabel>Country Name:</ControlLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.country_name} onChange={this.handleCountryNameChange}
              />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select Continent</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={this.state.continent_id}
                onChange={this.handleConIdChange} >
                  {continents.map(({ continent_id, continent_name }) => <option value={continent_id} >{continent_name}</option >)}
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl autoFocus type="Submit" value="Submit"/>
              </FormGroup>
              {/* <select
                value={this.state.selectedOption}
                onChange={this.handleOptionChange}
                >
              {continents.map(({ id, name }) => <option value={id} >{name}</option>)}
              </select> */}
            </form>
          </div>
        </Col>
         

        {/* States */}
        <Col xs={6} md={3}>
          <div className="States_Class">
            State
            <div>
              {states.map(this.renderStateNames)}
            </div>
            <form onSubmit={this.handleStateSubmit}>
              <FormGroup>
                <ControlLabel>State Name</ControlLabel>
                <FormControl 
                autoFocus
                type="text"
                value={this.state.state_name} onChange={this.handleStateNameChange}
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select Country</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={this.state.country_id}
                onChange={this.handleCountryIdChange}>
                  {countries.map(({ country_id, country_name }) => <option value={country_id} >{country_name}</option >)}
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl autoFocus type="Submit" value="Submit"/>
              </FormGroup>
              
              {/* <select
                value={this.state.selectedOption}
                onChange={this.handleOptionChange}
                >
              {countries.map(({ id, name, address }) => <option value={id} >{name}</option>)}
              </select> */}
            </form>
          </div>
        </Col>

        {/* District */}
        <Col xs={6} md={3}>
          <div className="District_Class">
            District
            <div>
              {districts.map(this.renderDistrictNames)}
            </div>
            <form onSubmit={this.handleDistrictSubmit}>
              <FormGroup>
                <ControlLabel>District Name</ControlLabel>
                <FormControl autoFocus type="text" value={this.state.district_name} onChange={this.handleDistrictNameChange}/>
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select State</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={this.state.state_id}
                onChange={this.handleStateIdChange}>
                  {states.map(({ state_id, state_name }) => <option value={state_id} >{state_name}</option >)}
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl autoFocus type="Submit" value="Submit"/>
              </FormGroup>
              
              {/* <select
                value={this.state.selectedOption}
                onChange={this.handleOptionChange}
                >
              {states.map(({ id, name, address }) => <option value={id} >{name}</option>)}
              </select> */}
            </form>
          </div>
        </Col>
      </Row>
    </Grid>
       

    </div>
    );
  }

}

export default Data