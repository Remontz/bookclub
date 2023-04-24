import React from 'react'

const AddBookForm = () => {
  return (
    <section>
        <h3>Upload<span> A Book</span></h3>
        <form>
            <div>
                <label for="new-book">Title:</label>
                <input type="text" id="new-book" name="new-book" required size="10" />
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea type="text" id="description" name="description" required minlength="5" rows="4" cols="30"></textarea>
            </div>
            <button type="submit">Add Book to Library</button>
        </form>
    </section>
  )
}

export default AddBookForm