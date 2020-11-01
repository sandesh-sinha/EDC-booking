import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import withStyles from '@material-ui/styles/withStyles'

const styles = (theme) => ({
    ...theme.spreadThis, 
})
export class Signup extends Component {
    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}
export default withStyles(styles)(Signup);


// mapStateToProps = (state) => {

// }
// mapActionsToProps = {
    
// }
// export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Signup));
