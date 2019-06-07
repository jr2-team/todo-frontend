import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
  
export default function SimpleAppBar() {  
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              To-Do Frontend
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}