/** @format */

import useFetchGames from '@/Hooks/useFetchGames';

/** @format */
const GameContainer = () => {
  useFetchGames();
  return <div>GameContainer</div>;
};

export default GameContainer;
