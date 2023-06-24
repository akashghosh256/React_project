import React from 'react'

function Alert(props) {
  return (
 <div style={{height: '60px'}}> 
{props.alert && <div className="alert alert-primary" role="alert">
{props.alert.msg}   
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}

export default Alert


//<div style={{height: '60px'}}> 60px is the height of alert 
// so that screen does not move up and down when alert is shown and hidden