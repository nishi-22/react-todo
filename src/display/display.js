import React from 'react';

const Display = (props)=>{
        return(
            <div className="row p-3">
                <div className="col col-md-3"/>
                <div className="col col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="data">Product Code</label>
                                    <input type="text" className="form-control" onChange={props.handleInput} name="data"/>
                                </div>

                                <button type="button" className="btn btn-primary" onClick={props.addItem}>
                                    Display
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col col-md-3"/>


                <div>
                    {props.state}
                </div>
            </div>
        )

}
export default  Display;