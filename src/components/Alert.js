import React from 'react'

function Alert(props) {
  return (
 
props.alert && <div className="alert alert-primary" role="alert">
{props.alert.msg} : {props.alert.type}    
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}

export default Alert
