import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import withStyles from '@material-ui/styles/withStyles'

const styles = (theme) => ({
    ...theme.spreadThis, 
})
export class Home extends Component {
    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default withStyles(styles)(Home);

// mapStateToProps = (state) => {
//     undefined
// }
// mapActionsToProps = {
//     undefined
// }
// export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Home));
