import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'indigo',
  },
};

function MyComponent(props) {
    console.log('props MyComponent')
    console.log(props)

  return <div className={props.classes.root}>f MyComponent</div>;
}

export default withStyles(styles)(MyComponent);


