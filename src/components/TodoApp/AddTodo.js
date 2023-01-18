import React, {useRef} from 'react';

function AddTodo(props) {
  //props.onItemSubmit()
  const {onItemSubmit, phrase} = props

  const textarea = useRef(null)
  const checkbox = useRef(null)

  const handleSubmit = () => {
    if (textarea.current.value.trim()) {
      onItemSubmit([textarea.current.value, checkbox.current.checked])

      textarea.current.value = ""
      checkbox.current.checked = false
      textarea.current.focus()
    }
  }

  return (
<div id="pridanie_ulohy">
  <h2>{phrase["Add a task"]}</h2>
  <textarea ref={textarea}></textarea>
  <label> <input type="checkbox" ref={checkbox} /> {phrase["Important task"]} </label>
  <button type="submit" className="btn" onClick={handleSubmit}> {phrase["Save the task"]}</button>
</div>
  );
}

export default AddTodo;