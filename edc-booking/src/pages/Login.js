import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import withStyles from '@material-ui/styles/withStyles'

const styles = (theme) => ({
    ...theme.spreadThis, 
})
export class Login extends Component {
    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}
export default withStyles(styles)(Login);

// mapStateToProps = (state) => {

// }
// mapActionsToProps = {
    
// }
// export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login));
