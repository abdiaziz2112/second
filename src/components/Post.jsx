function Post(props){
    
    return(
        <div className="container">
        <div className="card">
        <h3 className="title h3"> {props.desc} </h3>
        <hr/>

        <div className="content">
                    <h5>{props.title}</h5>
                </div>
                <hr />

                <div className="footer">

                    <div className="classes">
                        <div className="icon">
                            <i class="fa-solid fa-location-arrow"></i>
                        </div>
                        <h6> {props.grade} </h6>
                    </div>
                    </div>
        </div>
        
                    
        

        </div>
    
    )

}


// 






export default Post;