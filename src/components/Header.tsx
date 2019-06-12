// tslint:disable-next-line: no-submodule-imports
import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';

export default function SimpleAppBar() {
    return (
      <div>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography variant='h4' color='inherit'>
              To-Do Frontend
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}