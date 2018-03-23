import { connect } from 'react-redux'

import Link from '../components/Link'
import { setTodoFilter } from '../../actionsCreator'

const mapStateToProps = (state, ownProps) => ({
    active:ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps =(dispatch,ownProps)=>({
    onClick: ()=> dispatch(setTodoFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
