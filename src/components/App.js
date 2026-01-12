import React from 'react'

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        <li key="relativeListItem1">Grandma</li>
        <li key="relativeListItem2">Uncle Raj</li>
        <li key="relativeListItem3">Aunt Priya</li>
        <li key="relativeListItem4">Cousin Rahul</li>
        <li key="relativeListItem5">Cousin Ananya</li>
      </ol>
    </div>
  )
}

export default App
