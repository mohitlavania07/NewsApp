import React from 'react'

const Newsitem  = (props) => {
    let {tittle, description, imageUrl, newsUrl} = props;
    return (
      <div className="my-3">
       <div className="card" style={{width: "17rem"}}>
  <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/29/600x338/3-0-86449917-iStock-1167137273-0_1679792587527_1693275057442.jpg": imageUrl}  className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title ">{tittle}...  <span className="position-absolute top=0 start-100 translate-top badge rounded-pill bg-danger">{}</span></h5> <span className="badge rounded-pill bg-success">New</span>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
}

export default Newsitem