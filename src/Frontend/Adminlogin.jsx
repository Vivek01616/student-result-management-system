function Adminlogin(){
    return (
        <div className="d-flex justify-content-center border-shadow">
                <div className="card border-shadow" style={{width: "500px",height:'300px',marginTop:'60px',marginBottom:'100px',borderRadius:'20px',}}>
                    <div className="card-body">
                        <h5 className="card-title text-center ">Faculty Login</h5>
                        <form className='justify-content-center mt-5'>
                            <div className="form-group mb-3" style={{marginLeft:'20%'}}>
                                <label for="exampleInputEmail1">Enter Id  </label>
                                <input style={{borderRadius:'50px'}} type="text"></input>
                            </div>
                            <div className="form-group mb-3" style={{marginLeft:'20%'}}>
                                <label for="exampleInputEmail1"class="">Password</label>
                                <input type="text" style={{borderRadius:'50px'}}></input>
                            </div>
                            <div>
                               <button type="button" class="btn btn-primary" style={{marginLeft:'40%'}}>Login</button>
                            </div>
    
                        </form>
                    </div>
    
                </div>
    
            </div>
      );
}
export default Adminlogin;