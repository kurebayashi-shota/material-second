import { useOutletContext, useParams } from 'react-router-dom';

export default function Pages() {
    const data = useOutletContext();
    const { id } = useParams();
    const currentData = id-1;
    
  return (
    <div>
        <div key={data[id]}>{data[currentData]?.value}</div>
    </div>
  )
}