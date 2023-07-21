import Link from 'next/link';
import axios from 'axios';

const Home = ({ tasks }) => {
  return (
    <div>
      <h1>Liste des tâches :</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link href={`/task/${task.id}`}>
              <a>{task.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const tasks = response.data;

  return {
    props: {
      tasks,
    },
  };
}

export default Home;
