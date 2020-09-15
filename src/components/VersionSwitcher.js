import { useRef } from 'react'

export function VersionSwitcher() {
  let selectRef = useRef()

  function submit(e) {
    e.preventDefault()
    if (selectRef.current.value === 'v0') {
      window.location = 'https://github.com/mckenziarts/shopper'
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        <span className="sr-only">Laravel Shopper Version</span>
        <select
          ref={selectRef}
          className="appearance-none block bg-transparent pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800"
          onChange={submit}
        >
          <option value="v1.1.4">v1.1.4</option>
        </select>
      </label>
    </form>
  )
}
