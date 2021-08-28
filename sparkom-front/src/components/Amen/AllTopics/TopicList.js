import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const ITEM_HEIGHT = 8;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
const style1 = {
    border: 0,
    color: "#fff",
    background: "#236aed",
  };
function TopicList() {
    const classes = useStyles();
    const TopicBar = (name, nbrFollowers) => {
        return (
    
            <div class="ui-block">

				
            <div class="birthday-item inline-items badges">
                
                <div class="birthday-author-name">
                    <a href="topicpage" class="h6 author-name">{name}</a>
                </div>
                <div class="skills-item">
                                    <Button
                                      variant="contained"
                                      style={style1}
                                      size="small"
                                      className={classes.button}
                                    >
                                      Follow
                                    </Button>
                                  </div>
            
            </div>
            
            </div>
            
    
        );
      };
    
    return (
        <div>
            <div className="container">
	<div className="row">
		<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

        {TopicBar("Politics", "0")}
        {TopicBar("COVID-19", "0")}
        {TopicBar("Python", "0")}
        
     
			</div>
            </div>
			</div>
			</div>

            
        
    )
}

export default TopicList
