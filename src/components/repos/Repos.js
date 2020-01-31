import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

export default function Repos({ repos }) {
  return repos.map(function(repo) {
    return <RepoItem key={repo.id} repo={repo} />
  })
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}
