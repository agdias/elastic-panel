import React from 'react'


class Connect extends React.Component {
    render() {
        return (
            <div className="connect">
               <div>
                   <form>
                      <ul className="connect-form">
                        <li>
                            <input   type="text" placeholder="informe a url de conexão"/>
                        
                        </li>

                      </ul>
                   </form>
                 
               </div>
            </div>

        )
    }
}

export default Connect