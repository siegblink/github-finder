import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from '../types'
import { GET_USERS, GET_REPOS } from '../types'

export default function GithubState(props) {
  const initialState = {
    users: [],
    user: [],
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // Search users
  async function searchUsers(text) {
    setLoading()
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    // setUsers(response.data.items)
    setLoading()
  }

  // Get user

  // Get repos

  // Clear users

  // Set loading
  function setLoading() {
    dispatch({ type: SET_LOADING })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}>
      {props.children}
    </GithubContext.Provider>
  )
}
