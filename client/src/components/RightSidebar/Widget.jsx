import React from 'react'
import comment from '../../assets/comment.png'
import pen from '../../assets/pen.png'
import blacklogo from '../../assets/blacklogo.png'

import './RightSidebar.css'

const Widget = () => {
  return (
    <div className='widget'>
<h4>The overflow blog </h4>
<div className="right-sidebar-div-1">
<div className="right-sidebar-div-2">
<img src={pen} alt="pen" width="18" />
 <p>Job insights from the tech community: The latest survey results from Stack... </p>
</div>
<div className="right-sidebar-div-2">
<img src={pen} alt="pen" width="18" />
<p>An honest end-of-year rundown (Ep. 518)</p>
</div>
</div>


<h4>Featured on Meta  </h4>
<div className="right-sidebar-div-1">
<div className="right-sidebar-div-2">
<img src={comment} alt="pen" width="18" />
 <p>Job insights from the tech community: The latest survey results from Stack... </p>
</div>
<div className="right-sidebar-div-2">
<img src={comment} alt="pen" width="18" />
<p>An honest end-of-year rundown (Ep. 518)</p>
</div>
</div>


<h4>The overflow blog </h4>
<div className="right-sidebar-div-1">
<div className="right-sidebar-div-2">
<img src={blacklogo} alt="pen" width="18" />
 <p>Job insights from the tech community: The latest survey results from Stack... </p>
</div>
<div className="right-sidebar-div-2">
<img src={blacklogo} alt="pen" width="18" />
<p>An honest end-of-year rundown (Ep. 518)</p>
</div>
</div>


<h4>The overflow blog </h4>
<div className="right-sidebar-div-1">
<div className="right-sidebar-div-2">
<img src={pen} alt="pen" width="18" />
 <p>Job insights from the tech community: The latest survey results from Stack... </p>
</div>
<div className="right-sidebar-div-2">
<img src={pen} alt="pen" width="18" />
<p>An honest end-of-year rundown (Ep. 518)</p>
</div>
</div>



    </div>
  )
}

export default Widget











