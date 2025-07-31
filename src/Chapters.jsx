import { Link, Outlet, useParams } from 'react-router-dom';
import { useFetchData } from './components/Hooks/useFetchData';

export default function Chapters() {
  const { chapter } = useParams();
  const pagesData = useFetchData(chapter);

  return (
    <>
      {pagesData.map((page, index) => (
        <Link key={index} to={`/${chapter}/${index + 1}`}>
          ページ{index + 1}
        </Link>
      ))}
      <Outlet context={pagesData} />
    </>
  );
}
