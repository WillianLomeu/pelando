import React, { useState } from 'react';

const NewVideoInput = ({ onSubmit }) => {
    const [newVideo, setNewVideo] = useState('');

    function setNewTask({target}) {
        setNewVideo(target.value);
    }

    function submit(e) {
        e.preventDefault();
        onSubmit(newVideo);
      }
    
      return (
        <div className="new-video">
          <form onSubmit={submit}>
            <input
              className="Todo-input"
              placeholder="Digite o nome do vídeo"
              onChange={setNewTask}
            />
            <button type="submit">
              Adicionar
            </button>
          </form>
        </div>
      )
};

export default NewVideoInput;