import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './CommunityLife.css'
import mycommunity_data    from '../../assets/mywork_data'

const CommunityLife = () => {
  return (
    <div id="communityLife" className='communityLife'>
       <div className="communityLife-title">
            <h1>Community Life</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="container">
            {mycommunity_data.map((work,index)=>{
                return <img  key={index} src={work.w_img} alt=""  />
            })}

        </div>

    </div>
  )
}

export default CommunityLife
