import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Search(props) {
  const { showClear, clearUsers, setAlert, searchUsers } = props
  const [text, setText] = useState('')

  function onChange(event) {
    setText(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'light')
    } else {
      searchUsers(text)
      setText('')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button
          className='btn btn-light btn-block'
          style={{ marginBottom: '14px' }}
          onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}
