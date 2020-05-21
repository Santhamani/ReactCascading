import React,{ Component } from "react";
import "./Test.css";
import { Grid, Col, Row, Button, FormGroup, FormControl, ControlLabel, Checkbox, SplitButton, MenuItem, DropdownButton } from "react-bootstrap";
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

// import options from './options';
// import SelectSearch from 'react-select-search';


class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      id: '21212', name: 'sdsadsads',address:'qwewqewqewq',
      continent_id:'Select',
      continent_name:'Asia',
      country_id:'Select',
      country_name:"India",
      state_id:"",
      state_name:"Andhra Pradesh",
      district_id:"",
      district_name:"Krishna",
      selectedOption:'',
      states:[], countries:[],continents:[],districts:[],
      state:null,continent:null,district:null,country:null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);

    this.handleConIdChange = this.handleConIdChange.bind(this);
    this.handleConNameChange = this.handleConNameChange.bind(this);

    this.handleCountryIdChange = this.handleCountryIdChange.bind(this);
    this.handleCountryNameChange = this.handleCountryNameChange.bind(this);

    this.handleStateIdChange = this.handleStateIdChange.bind(this);
    this.handleStateNameChange = this.handleStateNameChange.bind(this);

    this.handleDistrictIdChange = this.handleDistrictIdChange.bind(this);
    this.handleDistrictNameChange = this.handleDistrictNameChange.bind(this);

    // Forms
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContinentSubmit = this.handleContinentSubmit.bind(this);
    this.handleCountrySubmit=this.handleCountrySubmit.bind(this);
    this.handleStateSubmit=this.handleStateSubmit.bind(this);
    this.handleDistrictSubmit=this.handleDistrictSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }
  handleOptionChange(selectedOption){
    this.setState({selectedOption})
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
  handleConIdChange(event) {
    this.setState({continent_id: event.target.value});
  }
  handleConNameChange(event) {
    this.setState({continent_name: event.target.value});
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
    this.getNames();
    this.getContinents();
    this.getCoutries();
    this.getStates();
    this.getDistricts();
  }

  getNames = _ => {
    fetch('http://localhost:4007/names')
    .then(res => res.json())
    .then( res => this.setState({names: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // Continentss get method
  getContinents = _ => {
    fetch('http://localhost:4007/continents')
    .then(res => res.json())
    .then( res => this.setState({continents: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // Countries get method
  getCoutries = _ => {
    fetch('http://localhost:4007/countries')
    .then(res => res.json())
    .then( res => this.setState({countries: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // States get method
  getStates = _ => {
    fetch('http://localhost:4007/states')
    .then(res => res.json())
    .then( res => this.setState({states: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  // Districts get method
  getDistricts = _ => {
    fetch('http://localhost:4007/districts')
    .then(res => res.json())
    .then( res => this.setState({districts: res.data}))
    // .then(({data}) => {
    //   console.log(data)
    // })
    .catch(err => console.log(err))
  }

  renderNames = ({id, name,address}) => <div key={id}> {id}.){name}  --> {address} </div>

  renderContinentNames = ({continent_id, continent_name}) => <div key={continent_id}> {continent_id}.){continent_name} </div>

  renderCountryNames = ({country_id, country_name}) => <div key={country_id}> {country_id}.){country_name} </div>

  renderStateNames = ({state_id, state_name}) => <div key={state_id}> {state_id}.){state_name} </div>

  renderDistrictNames = ({district_id, district_name}) => <div key={district_id}> {district_id}.){district_name} </div>

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.id+ this.state.name+this.state.address);
    console.log(this.state.id+'_'+this.state.name+'_'+this.state.address);
    const data = {id:this.state.id,name:this.state.name,address:this.state.address}
    fetch('http://localhost:4007/names/add',{
      method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{ 'Content-Type': 'application/json' }
    })
    // .then(res => res.json())
    // .then(({data}) => {
    //   console.log(data)
    // })
    .then(this.getNames)
    .catch(err => console.error(err)
    .then(response => console.log('Success:', response)));

    event.preventDefault();
  }

  // Countinent post method
  handleContinentSubmit(event){
    alert('A name was submitted: ' +this.state.continent_name);
    // console.log(this.state.continent_name);
    const data = {continent_name:this.state.continent_name}
    fetch('http://localhost:4007/continents/add',{
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
    fetch('http://localhost:4007/countries/add',{
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
    fetch('http://localhost:4007/states/add',{
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
    fetch('http://localhost:4007/districts/add',{
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
    const { names,continents,countries,states,districts } = this.state;
    let options = this.state.names.map(function (key) {
      return {value: key.name, label: key.name};
    })
    
    return (
      <div className="Data_Class">
         <div className="Names_Class">
          Names
          <div>
            {names.map(this.renderNames)}
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              ID:
              <input type="text" value={this.state.id} onChange={this.handleChange} />
              Name:
              <input type="text" value={this.state.name} onChange={this.handleNameChange} />
              Address:
              <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
            </label>
            <input type="submit" value="Submit" />
            <select
              value={this.state.selectedOption}
              onChange={this.handleOptionChange}
              >
            {names.map(({ id, name, address }) => <option value={id} >{name}</option>)}
            </select>
            <Select
                name="name"
                value={this.state.value}
                // options={names.map(this.renderNames)}
                options={options}
                onChange={this.handleOptionChange}
            />
          </form>
        </div> 

    <hr />
    <br />
    <Grid>
      <Row>
        {/* Continents */}
        <Col xs={6} md={3}>
          <div className="Continents_Class">
            Continents
            <div>
              {continents.map(this.renderContinentNames)}
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

export default Test