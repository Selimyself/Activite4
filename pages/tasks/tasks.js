import axios from 'axios';

const TaskDetail = ({ task }) => {
  return (
    <div>
      <h1>Détails de la tâche :</h1>
      <h2>{task.title}</h2>
      <p>Statut : {task.completed ? 'Terminée' : 'En cours'}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const task = response.data;

  return {
    props: {
      task,
    },
  };
}

export default TaskDetail;
