import React from 'react'
import TextField from "@material-ui/core/TextField";

function QuestionForm() {
    return (
        <div className="ui-block">
        <div className="ui-block-title bg-blue">
            <h6 className="title c-white">Create a New Topic</h6>
        </div>
        <div className="ui-block-content">
            
            <form>
                <div className="row">
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group label-floating">
                            <TextField
                        id="email"
                        label="Title"
                        variant="outlined"
                        fullWidth
                      />                        </div>
                    </div>
            
                    
            
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group label-floating">
                            <label className="control-label">Body</label>
                            <textarea className="form-control" ></textarea>
                        </div>
            
                        <div className="form-group">
                        <TextField
                        id="email"
                        label="Tags"
                        variant="outlined"
                        fullWidth
                      />
                                              </div>
                    </div>
            
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <a href="#" className="btn btn-secondary btn-lg full-width">Cancel</a>
                    </div>
            
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <a href="#" className="btn btn-blue btn-lg full-width">Add Question</a>
                    </div>
                </div>
            </form>
        </div>
    </div>


    )
}

export default QuestionForm
