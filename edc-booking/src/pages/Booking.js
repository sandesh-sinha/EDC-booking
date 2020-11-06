import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/styles/withStyles'

const styles = (theme) => ({
    ...theme.spreadThis,  
})
export class Booking extends Component {
    render() {
        return (
            <Fragment>
                Booking
            </Fragment>
        )
    }
}
export default withStyles(styles)(Booking);
