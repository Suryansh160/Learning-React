import { useEffect, useState } from 'react'

export default function Users () {
  const [usersList, setUsersList] = useState([])
  const [pending, setPending] = useState(false)

  async function fetchAllUsers () {
    try {
      setPending(true)
      const apiResponse = await fetch('https://dummyjson.com/users')
      const result = await apiResponse.json()

      if (result?.users) {
        setPending(false)
        setUsersList(result?.users)
      } else {
        setUsersList([])
      }

      console.log(result)
    } catch (e) {
      setPending(false)
      console.log(e)
    }
  }

  // useEffect(() => {
  //   fetchAllUsers()
  // }, [])

  console.log(usersList)

  if (pending) return <h1>Fetching</h1>

  return (
    <div>
      <h1>All Users Lists</h1>
      <button onClick={fetchAllUsers}>Fetch Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map(userItem => (
            <li key={userItem.id}>
              <p>
                {userItem?.firstName} {userItem?.lastName}
              </p>
            </li>
          ))
        ) : (
          <li>No users found! please try again.</li>
        )}
      </ul>
    </div>
  )
}
