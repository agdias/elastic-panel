import React from 'react'
import { connect } from 'react-redux'
import {DebounceInput} from 'react-debounce-input';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined'
import { addInstanceAction } from '../assets/actions'




class Header extends React.Component {

    state = {
      name: null,
      ip: null,
      port: null

    }

    handleChange = (event) => {
        const target = event.target
        const value= target.value
        const name = target.name
        this.setState({
            [name]: value
        })
        console.log(this.state)


    }
    onSubmit =() => {
        const name = this.state.name;
        const ip = this.state.ip;
        const port = this.state.port;
        const { dispatch } = this.props
        dispatch(addInstanceAction(name, ip, port))
        
        // TODO - dispatch(addInstance(name,ip,port)
        
        // This method will fetch the instance by ip and port, returning an object like 
        // {
        //   production: {
        //       health: {

        //       },
        //       nodes: {

        //       }
        //   }
        // }
        //
       
    }   
 
    render() {

     
        return (
            <div className="header">
              <div>
                  <form>
                      <ul className="es-instances-form">
                      <li>
                              <DebounceInput
                                minLength={2}
                                debounceTimeout={300}
                                name="name"   
                                type="text" 
                                onChange={this.handleChange} 
                                placeholder="Instance Name"/>
                            </li>
                          <li>
                              <DebounceInput
                                minLength={2}
                                debounceTimeout={300}
                                name="ip"   
                                type="text" 
                                onChange={this.handleChange} 
                                placeholder="ES Instance IP"/>
                            </li>
                            <li>
                              <DebounceInput 
                                minLength={2}
                                debounceTimeout={300}
                                name="port" 
                                type="text" 
                                onChange={this.handleChange} 
                                placeholder="ES Instance Port"/>
                            </li>
                          <li className="icons">
                             <AddCircleOutlined onClick={this.onSubmit} />
                          </li>
                      </ul>
                  </form>
              </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => (state)

export default  connect (mapStateToProps)(Header)