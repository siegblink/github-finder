import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
  render() {
    const { users } = this.props

    return (
      <div style={userStyle}>
        {users.map(user => {
          return <UserItem key={user.id} user={user} />
        })}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default Users
